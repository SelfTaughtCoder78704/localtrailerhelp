const express = require('express')
const User = require('../models/user')
const passport = require('passport')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {title: 'LTH | Home'})
})

router.get('/register', (req, res) => {
    res.render('register', {title: "Register"})
})

router.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err) {
            console.log(err)
            return res.render('register', {title: "Register"})
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/')
        })
    })
})

router.get('/login', (req, res) => {
    res.render('login', {title: "Log-In"})
})

router.post('/login', (req, res) => {
    res.send(req.body)
})

module.exports = router