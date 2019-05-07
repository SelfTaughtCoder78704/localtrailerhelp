const express = require('express')
const router = express.Router()
const Trailer = require('../models/trailer-model')
const Review = require('../models/review')

//get all trailers (AKA INDEX ROUTE)
router.get('/', (req, res) => {
    Trailer.find({}, (err, trailers) =>{
        if(err){
            console.log(err)
        }
        res.render('trailers', {trailers: trailers, title: 'All Trailers'})
    })
    
})
// post new trailer (AKA CREATE ROUTE)
router.post('/', (req, res) => {
    let newTrailer = new Trailer({
        kind: req.body.kind,
        img: req.body.img,
        description: req.body.desc
    })
    newTrailer.save(function(err, trailer){
        if(err) throw new err
        console.log(trailer)
        res.redirect('/trailers')
    })
    
    
})
// trailer form to submit (AKA NEW ROUTE)
router.get('/new', (req, res) => {
    res.render('add-trailer', {title: 'LTH | Add Trailer'})
})


// individual trailer (AKA SHOW ROUTE)
router.get('/:id', (req, res) => {
    
    Trailer.findById(req.params.id).populate('reviews').exec((err, foundTrailer)=> {
        if(err){
            console.log(err)
        }else{
            res.render('details', {title: 'Trailer Details', trailers: foundTrailer})
        }
       
       
    })
})

router.get('/:id/reviews/new', (req, res) => {
    Trailer.findById(req.params.id, (err, trailer) => {
        if(err){
            console.log(err)
        }else{
            res.render('new-review', {title: 'Reviews', trailer: trailer})
        }
    })
    
})

router.post('/:id/reviews', (req, res) => {
    Trailer.findById(req.params.id, (err, trailer) => {
        if(err){
            console.log(err)
        }else{
             Review.create(req.body.reviews, (err, review) =>{
                 if(err) {
                     console.log(err)
                 }else{
                     trailer.reviews.push(review)
                     trailer.save()
                     res.redirect('/trailers/' + trailer._id)
                 }
             })
        }
    })
})


module.exports = router