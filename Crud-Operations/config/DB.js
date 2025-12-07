const mongoose = require('mongoose')

const dbConnection = async (req , res)=>{
    try {
    const connection = mongoose.connect(process.env.MONGODB_CONNECTION)

    if (connection) {
        console.log('mongodb Connected Successfully👍');
        
    }
    } catch (error) {
        console.log('Connection problem in Database' , error);
        
    }
}

module.exports = dbConnection