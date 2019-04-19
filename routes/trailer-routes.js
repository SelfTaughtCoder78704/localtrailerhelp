const express = require('express')
const router = express.Router()


let trailers = [
    {kind: '16ft Dump Trailer', img: 'https://betterdumptrailers.com/wp-content/uploads/2018/02/cropped-DumpTrailer_Gallery4-2.png'},
    {kind: 'Tow Trailer', img: 'https://www.uhaul.com/Locations/GetPhoto.ashx?id=675471&size=5'},
    {kind: 'Flatbed Trailer', img: 'http://www.kaufmantrailers.com/wp-content/uploads/2013/04/standard-flatbed-trailer.png'}
]
//get all trailers
router.get('/', (req, res) => {
    
    res.render('trailers', {trailers: trailers, title: 'All Trailers'})
})
// post new trailer
router.post('/', (req, res) => {
    let newTrailer = {
        kind: req.body.kind,
        img: req.body.img
    }
    trailers.push(newTrailer)
    res.redirect('/trailers')
})
// trailer form to submit 
router.get('/new', (req, res) => {
    res.render('add-trailer', {title: 'LTH | Add Trailer'})
})

module.exports = router