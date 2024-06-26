// models/NewData.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreEnum = [
  'Romance', 'Action', 'Horror', 'Comedy', 'Drama', 'SciFi', 'Documentary',
  'Animation', 'Adventure', 'Thriller', 'Fantasy', 'Crime', 'War', 'History',
  'Music', 'Mystery', 'Family', 'Biography', 'Sport', 'Western'
];

const newDataSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'Movie'
  },
  title: String,
  director: String,
  genre: {
    type: String,
    enum: genreEnum
  }
}, { timestamps: true }); // Optional: Add timestamps for createdAt and updatedAt fields

const NewData = mongoose.model('NewData', newDataSchema);

module.exports = NewData;
