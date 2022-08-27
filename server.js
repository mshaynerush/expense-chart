if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expLayout = require('express-ejs-layouts')
const person = { id: '2345', name: 'Shayne', car: "Escape Hybrid" }
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expLayout)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DBCONNECT, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.get('/shop', (req, res) => {
    res.render('shop.ejs')
})

app.listen(process.env.PORT || 3000)