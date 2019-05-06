const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    stars: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    }
})


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review