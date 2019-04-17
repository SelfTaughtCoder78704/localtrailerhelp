const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let trailers = [
        {kind: '16ft Dump Trailer', img: 'https://betterdumptrailers.com/wp-content/uploads/2018/02/cropped-DumpTrailer_Gallery4-2.png'},
        {kind: 'Tow Trailer', img: 'https://www.uhaul.com/Locations/GetPhoto.ashx?id=675471&size=5'},
        {kind: 'Flatbed Trailer', img: 'http://www.kaufmantrailers.com/wp-content/uploads/2013/04/standard-flatbed-trailer.png'}
    ]
    res.render('trailers', {trailers: trailers, title: 'All Trailers'})
})

module.exports = router