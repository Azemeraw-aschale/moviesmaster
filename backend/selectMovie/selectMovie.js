const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;
const User = require('../models/User');
const Movie = require('../models/Movie');
// const connectDB = require('../db');
const Wishlist = require('../models/AddToWishlist');
const { verifyToken, permit } = require('../middleware/auth');
// connectDB();

// Route to fetch total movies
router.get("/totalmovies", async (req, res) => {
  try {
    const totalMovies = await Movie.countDocuments();
    res.send({ total_movies: totalMovies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching total movies");
  }
});

// Route to fetch total users
router.get("/totalusers", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.send({ total_users: totalUsers });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching total users");
  }
});

// Route to check if username exists
router.get("/check_username/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const count = await User.countDocuments({ username });
    res.send({ exists: count > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error checking username");
  }
});

// Route to fetch user list
router.get("/userlist", async (req, res) => {
  try {
    const users = await User.find({ role: 0 });
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

// Route to fetch user profile
router.get('/api/profileview/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).select({ firstname: true, lastname: true, username: true });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Route to fetch movie list
router.get("/movielist", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching movies");
  }
});

router.get("/wishlistview", async (req, res) => {
  try {
    const wishlist = await Wishlist.find();
    res.send(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching wishlist");
  }
});
router.get('/genre-data', async (req, res) => {
  try {
    const genreData = await Movie.aggregate([
      {
        $group: {
          _id: '$genre',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $project: {
          genre: '$_id',
          count: 1,
          _id: 0
        }
      }
    ]).exec();

    res.status(200).json(genreData);
  } catch (error) {
    console.error('Error fetching genre data:', error);
    res.status(500).json({ error: 'Error fetching genre data' });
  }
});

module.exports = router;
// Route to fetch genres
router.get("/genres",async (req, res) => {
  try {
    const genres = [...new Set((await Movie.find()).map(movie => movie.genre))];
    res.send({ genres });
    // console.log("genenernenrnernern",genres)
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving genres");
  }
});

module.exports = router;