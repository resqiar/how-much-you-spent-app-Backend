const express = require('express');
const { model } = require('mongoose');
const router = express.Router()


/**
 * TODO: Import and use model
 */
const User = require('../../model/UserModel/User.js')


router.get('/', (req, res) => {
    res.send({
        "message": "Hello World"
    })
})

module.exports = router