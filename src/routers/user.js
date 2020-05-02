const express = require('express')
const User = require('../models/user')


const router = new express.Router()
router.get('/test', (req, res) => {
    res.send('From new file')
})

module.exports = router