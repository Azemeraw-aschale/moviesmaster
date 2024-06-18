const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const addWishlist=new Schema({
    movieId:{
        type:Schema.Types.ObjectId,
        ref:'Movie'
    },
    title:String,
    director:String,
    genre:String,
    image:String,
});

const Wishlist=mongoose.model('Wishlist',addWishlist);

module.exports=Wishlist;