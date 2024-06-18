// routes/index.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;
const User = require('../models/User');
const Movie = require('../models/Movie');
const Wishlist = require('../models/AddToWishlist');
// const connectDB = require('../db');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
const { verifyToken, permit } = require('../middleware/auth');

// connectDB();

cloudinary.config({ 
  cloud_name: 'azii', 
  api_key: '821493881388656', 
  api_secret: 'kf4HQKhl8eLoi4rWWRggYiM2HnE' 
});

const upload = multer({ dest: 'uploads/' });

// Route to create a new user
router.post('/create', async (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ firstname, lastname, username, password: hashedPassword });
    await newUser.save();
    console.log("oooooooo",newUser);

    res.send("User added");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

router.post("/add-to-wishlist/:movieId", verifyToken,async (req, res) => {
  try {
    const { movieId } = req.params;

    console.log("movie is is s",movieId);

    // Fetch the selected movie from the Movie model
    const movie = await Movie.findById(movieId);

    console.log("fake movie",movie);

    if (!movie) {
      return res.status(404).json({ success: false, error: "Movie not found" });
    }

    // Check if the movie ID already exists in the Wishlist
    const existingWishlistItem = await Wishlist.findOne({ movieId });

    if (existingWishlistItem) {
      return res.status(400).json({ success: false, error: "Movie already in wishlist" });
    }

    // Create a new wishlist item
    const wishlistItem = new Wishlist({
      movieId: movie._id,
      title: movie.title,
      director: movie.director,
      genre: movie.genre,
      image: movie.image,
    });

    // Save the wishlist item to the Wishlist model
    const createdWishlistItem = await wishlistItem.save();

    res.status(201).json({ success: true, wishlistItem: createdWishlistItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Route to create a new movie with image upload
router.post('/moviecreate', upload.single('image'), async (req, res) => {
  // console.log("verify token ",verifyToken);
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

    const newMovie = new Movie({ title, director, genre, image: cloudinaryImageUrl });
    await newMovie.save();

    console.log("new movie", newMovie);

    res.send({ message: "Movie added", userData: { title, director, genre, image: cloudinaryImageUrl } });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating movie");
  }
});

// Route to handle user login
router.post('/login',async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });
    console.log(user)

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);


    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});

module.exports = router;
