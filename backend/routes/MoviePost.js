const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;
const { body } = require('express-validator');
const User = require('../models/User');
const Movie = require('../models/Movie'); 
const Wishlist = require('../models/Wishlist');
// const connectDB = require('../db');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
// const { verifyToken, permit } = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const authMiddleware = require('../middleware/auth');

// connectDB();

cloudinary.config({ 
  cloud_name: 'azii', 
  api_key: '821493881388656', 
  api_secret: 'kf4HQKhl8eLoi4rWWRggYiM2HnE' 
});

const upload = multer({ dest: 'uploads/' });

// Route to create a new user



router.post("/add-to-wishlist/:movieId", authMiddleware, async (req, res) => {
  try {
    const { movieId } = req.params;
    const userId = req.user.id;
    console.log("Received movieId:", movieId);

    // Fetch the selected movie from the Movie model
    const movie = await Movie.findById(movieId);
    console.log("Fetched movie:", movie);

    if (!movie) {
      console.log("Movie not found");
      return res.status(404).json({ success: false, error: "Movie not found" });
    }

    // Find the user's wishlist
    let wishlist = await Wishlist.findOne({ 'items.userId': userId });

    if (wishlist) {
      // Check if the movie ID already exists in the Wishlist
      const existingWishlistItem = wishlist.items.find(item => item.movieId.toString() === movieId && item.userId.toString() === userId);

      if (existingWishlistItem) {
        console.log("Movie already in wishlist");
        return res.status(400).json({ success: false, error: "Movie already in wishlist" });
      }

      // Add new item to the existing wishlist
      wishlist.items.push({
        movieId: movie._id,
        userId,
        title: movie.title,
        director: movie.director,
        genre: movie.genre,
        image: movie.image
      });

      await wishlist.save();
    } else {
      // Create a new wishlist with the item
      wishlist = new Wishlist({
        items: [{
          movieId: movie._id,
          userId,
          title: movie.title,
          director: movie.director,
          genre: movie.genre,
          image: movie.image
        }]
      });

      await wishlist.save();
    }

    console.log("Created or updated wishlist item:", wishlist);
    res.status(201).json({ success: true, wishlistItem: wishlist });
  } catch (err) {
    console.error("Error in /add-to-wishlist route:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});


// Route to create a new movie with image upload
router.post('/moviecreate',authMiddleware,[
    
        body('title').not().isEmpty().withMessage('Title is required'),
        body('director').not().isEmpty().withMessage('Director is required'),
        body('genre').not().isEmpty().withMessage('Genre is required'),
        body('image').not().isEmpty().withMessage('Image URL is required')

], upload.single('image'), async (req, res) => {
  // console.log("verify token ",verifyToken);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { title, director, genre } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  try {
    let cloudinaryImageUrl = null;

    if (imageUrl) {
      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(imageUrl);
      cloudinaryImageUrl = result.secure_url;

      // Optionally, delete the local file after uploading to Cloudinary
      await fs.unlink(imageUrl);
    }

    const newMovie = new Movie({ title, director, genre, image: cloudinaryImageUrl,user: req.user.id});
    const movie= await newMovie.save();

    // console.log("new movie", movie);
    res.json(movie);
    // res.send({ message: "Movie added", userData: { title, director, genre, image: cloudinaryImageUrl } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error creating movie");

  }
});

// Route to handle user login


module.exports = router;
