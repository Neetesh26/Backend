const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
     name: {
      type: String,
      // required: true,
    },
    photo:{
      type:String
    }
},
    {
        timestamps: true
    }
)

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;