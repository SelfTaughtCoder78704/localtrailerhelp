const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passport  = require('passport')
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const Trailer = require('./trailer-model');

const userSchema = new Schema({
    // firstName: String,
    // lastName: String,
    username: String,
    // email: String,
    // phone: String,
    password: String,
    trailers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trailer"
        }
    ]
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User