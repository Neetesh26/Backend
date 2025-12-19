const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role:{
        type:String,
        enum:['admin' , 'manager', 'user'],
        require:true
    }
},{timestamps:true})

const AuthModel = mongoose.model('Auth' , AuthSchema)

module.exports = AuthModel;