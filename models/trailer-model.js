const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const trailerSchema = new Schema({
    kind: String,
    img: String
});

const Trailer = mongoose.model('Trailer', trailerSchema)
module.exports = Trailer


