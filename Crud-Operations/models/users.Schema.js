const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
     name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
},
    {
        timestamps: true
    }
)

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;