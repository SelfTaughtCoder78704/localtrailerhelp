const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const passport = require('passport')
const localStrategy  = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index-routes')
const trailerRouter = require('./routes/trailer-routes')
const seed = require('./seeds')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('express-session')({
    secret: "thisishowwedoit",
    resave: false,
    saveUninitialized: false
}))



app.use(express.static('public'))


app.set('view engine', 'ejs')

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/', indexRouter)
app.use('/trailers', trailerRouter)
mongoose.connect('mongodb://localhost:27017/trailer_app',{useNewUrlParser: true},() => {
    console.log('Connected to MONGO')
});
mongoose.set('useCreateIndex', true);
seed()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})