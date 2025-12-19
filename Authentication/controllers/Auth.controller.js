const bcrypt = require('bcrypt')
const AuthModel = require('../models/AuthModel')
const jwt  = require('jsonwebtoken')

const registerHandler = async (req, res) => {

    const { username, email, password, role } = req.body
    try {
        // console.log(req.body);
        if (!username || !email || !password || !role) {
            return res.status(400).json({
                message: ' Invalid Input data'
            })
        }
        //  exist only one admin
        if (role === 'admin') {
            const adminExist = await AuthModel.findOne({ role: 'admin' })
            if (adminExist) {
                return res.status(400).json({
                    message: 'Admin already exist'
                })
            }
        }
        const hashPassword = await bcrypt.hash(password, 10)
        // console.log('hash password', hashPassword);
        const savedData = await AuthModel.create({
            username,
            email,
            password: hashPassword,
            role
        })
        // const data = await savedData.save()
        // console.log(savedData);
        return res.status(201).json({
            message: `${role} registerd successfully`,
            savedData
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Something went wrong', error
        })
    }
}

const loginHandler = async (req, res) => {
    const {email , password} = req.body;
    console.log(req.body);
    
    try {
        if (!email || !password) {
            return res.status(400).json({
                message: ' Invalid Input data'
            })
        }
        const user = await AuthModel.findOne({ email })
        // console.log(user);
        const isMatch = await bcrypt.compare(password ,user.password )

        // console.log(isMatch);
        if (!user ||!isMatch) {
            return res.status(404).json({
                message: 'user not found'
            })
        }
        // await user.save()
        // token generate krn hai aage chalke
        const token =  jwt.sign({userId:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'})
        console.log("token is",token);

        return res.status(200).json({
            msg:'login successfully',user,token
        })

    } catch (error) {
        console.log(error);
        
        return res.status(400).json({
            message: 'Something went wrong', error
        })
    }
}

module.exports = { registerHandler, loginHandler }