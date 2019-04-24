const express = require('express')
const router = express.Router()
const Trailer = require('../models/trailer-model')


//get all trailers
router.get('/', (req, res) => {
    Trailer.find({}, (err, trailers) =>{
        if(err){
            console.log(err)
        }
        res.render('trailers', {trailers: trailers, title: 'All Trailers'})
    })
    
})
// post new trailer
router.post('/', (req, res) => {
    let newTrailer = new Trailer({
        kind: req.body.kind,
        img: req.body.img
    })
    newTrailer.save(function(err, trailer){
        if(err) throw new err
        console.log(trailer)
        res.redirect('/trailers')
    })
    
    
})
// trailer form to submit 
router.get('/new', (req, res) => {
    res.render('add-trailer', {title: 'LTH | Add Trailer'})
})

module.exports = router