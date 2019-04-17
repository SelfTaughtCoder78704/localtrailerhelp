const express = require('express')

const bodyParser = require('body-parser')
const indexRouter = require('./routes/index-routes')
const trailerRouter = require('./routes/trailer-routes')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static('public'))


app.set('view engine', 'ejs')


app.use('/', indexRouter)
app.use('/trailers', trailerRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})