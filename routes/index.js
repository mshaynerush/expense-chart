const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    const fs = require('fs')
    let json = fs.readFileSync('./models/data.json')
    data = JSON.parse(json)
    res.render('index', { data: data })
})

router.get('/shop', (req, res) => {
    res.render('shop')
})

module.exports = router