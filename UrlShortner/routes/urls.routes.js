const express = require('express')
const router = express.Router()
const createUrl = require('../controllers/urls.controllers')

router.post('/',createUrl)

module.exports= router