const userModel = require('../models/users.Schema')


const registerUsers = async (req, res) => {
    const { name, email, mobile, password } = req.body

    console.log(req.body);

    try {

        if (!name || !password || !email || !mobile) {
            return res.status(400).json({
                message: ' Invalid Input data'
            })
        }
        const savedUser = await userModel.create(
            {
                name, email, mobile, password
            })

        return res.status(200).json({ message: "User successfully registerd", user: savedUser })

    } catch (error) {
        return res.status(400).json({ message: 'Invalid input data', error: error })
    }
}

const getAllUsers = async (req,res) =>{
    try {
        const allUsers = await userModel.find({})
        return res.status(200).json({
            message:'Fetched all users.',users : allUsers
        })

    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }
}

module.exports = {registerUsers , getAllUsers}