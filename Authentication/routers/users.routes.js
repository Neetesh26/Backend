const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/usersVerify')
const RoleBaseHandler = require('../middlewares/protected')



router.get('/admin',verifyToken ,RoleBaseHandler("admin"), (req,res)=>{
    return res.status(200).json({msg:"welcome admin"})
})
router.get('/manager',verifyToken,RoleBaseHandler("admin" , "manager"),(req,res)=>{
    return res.status(200).json({msg:"welcome manager"})

})
router.get('/user',verifyToken ,RoleBaseHandler("admin","manager" , "user"), (req,res)=>{
    return res.status(200).json({msg:"welcome user"})
})

module.exports = router