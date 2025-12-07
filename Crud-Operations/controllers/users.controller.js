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

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({})
        return res.status(200).json({
            message: 'Fetched all users.', users: allUsers
        })

    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    try {
        if (!id && !newData) {
            return res.status(400).json({
                message: 'Internal server error'
            })
        }
        const updatedUser = await userModel.findByIdAndUpdate(id, newData, { new: true });
        return res.status(200).json({
            message: 'user Updated successfully',
            newUser: updatedUser
        })
    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }
}

const getSingleUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        if (!user_id) return res.status(400).json({ message: 'user not found' })
        const user = await userModel.findById(user_id)
        return res.status(200).json({message:'user found...🪪', user:user})
    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }

}
const deleteUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        if (!user_id) return res.status(400).json({ message: 'user not found' })
        const user = await userModel.findByIdAndDelete(user_id)
        return res.status(200).json({message:'user deleted successfully...🪪', user:user})
    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }

}

module.exports = { registerUsers, getAllUsers, updateUser,getSingleUser,deleteUser }