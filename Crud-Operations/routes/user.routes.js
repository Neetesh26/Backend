const express = require('express')

const router = express.Router()
const {registerUsers, getAllUsers} = require('../controllers/users.controller')

router.post('/register' ,registerUsers)
router.get('/' ,getAllUsers)


module.exports = router