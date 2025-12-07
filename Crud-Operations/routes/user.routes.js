const express = require('express')

const router = express.Router()
const {registerUsers, getAllUsers,updateUser,getSingleUser,deleteUser} = require('../controllers/users.controller')

router.post('/register' ,registerUsers)
router.get('/' ,getAllUsers)
router.patch('/userUpdated/:id' ,updateUser)
router.get('/:id' ,getSingleUser)
router.delete('/:id' ,deleteUser)


module.exports = router