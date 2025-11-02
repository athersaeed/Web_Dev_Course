const express = require('express')
const router = express.Router()

// /shop
router.get('/', (req, res) => {
    res.send('shop home page')
})

// /shop/prod1
router.get('/prod1', (req, res) => {
    res.send('shop product 1 page')
})

// /shop/prod2
router.get('/prod2', (req, res) => {
    res.send('shop product 2 page')
})

module.exports = router