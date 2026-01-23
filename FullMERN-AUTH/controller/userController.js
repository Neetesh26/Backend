const User = require("../models/usersSchema.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

 const registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "10m" })
        verifyMail(token, email)
        newUser.token = token
        await newUser.save()
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}


module.exports = {
    registerUser
}
