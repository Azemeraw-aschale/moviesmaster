const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  
    items: [{
        movieId: {
            type: Schema.Types.ObjectId,
            ref: 'Movie',
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
          },
        title: {
            type: String,
            required: true
        },
        director: String,
        genre: String,
        image: String,
        status: {
            type: Number,
            default: 1
        }
    }]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
