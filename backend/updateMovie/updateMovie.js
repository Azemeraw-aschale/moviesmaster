const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;
const multer = require('multer');
const Movie = require('../models/Movie');
const User = require('../models/User');

cloudinary.config({ 
  cloud_name: 'azii', 
  api_key: '821493881388656', 
  api_secret: 'kf4HQKhl8eLoi4rWWRggYiM2HnE' 
});

const upload = multer({ dest: 'uploads/' });

// Update movie
router.put("/update/:movieId", upload.single('image'), async (req, res) => {
  const { movieId } = req.params;
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

    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId, 
      { title, director, genre, image: cloudinaryImageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
      return res.status(404).send({ message: "Movie not found" });
    }

    res.send({ message: "Movie updated", movieData: updatedMovie });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating movie");
  }
});

// Update user profile
router.put('/api/profile/:userId', async (req, res) => {
  const { userId } = req.params;
  const { firstname, lastname, username } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId, 
      { firstname, lastname, username },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Profile updated successfully', updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

module.exports = router;
