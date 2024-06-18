const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongoose').Types; // Import ObjectId from mongoose
const User = require('../models/User');
const Movie = require('../models/Movie');



// Route to delete a movie by ID
router.delete("/moviedelete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Invalid movie ID");
    }

    await Movie.findByIdAndDelete(id);
    res.send("Movie deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting movie");
  }
});

// Route to delete a user by ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Invalid user ID");
    }

    await User.findByIdAndDelete(id);
    res.send("User deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting user");
  }
});

module.exports = router;
