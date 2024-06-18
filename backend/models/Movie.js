// models/Movie.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreEnum = [
  'Romance', 'Action', 'Horror', 'Comedy', 'Drama', 'SciFi', 'Documentary',
  'Animation', 'Adventure', 'Thriller', 'Fantasy', 'Crime', 'War', 'History',
  'Music', 'Mystery', 'Family', 'Biography', 'Sport', 'Western'
];

const movieSchema = new Schema({
  title: String,
  director: String,
  releaseYear: Number,
  runtime: Number,
  genre: {
    type: String,
    enum: genreEnum
  },
  image: String,
  rating: Number,
  plotSummary: String,
  cast: [String] // Assuming cast is an array of strings
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
