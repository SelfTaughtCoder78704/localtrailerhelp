const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Review = require('./review');

const trailerSchema = new Schema({
    kind:{
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

const Trailer = mongoose.model('Trailer', trailerSchema)
module.exports = Trailer



