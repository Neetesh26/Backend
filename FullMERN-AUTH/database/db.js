const mongoose = require('mongoose')


const connectDB = async()=>{
    try {
        await mongoose.connect(`mongodb://0.0.0.0/Mern-AuthBackend`)
        console.log('MongoDB connected successfully');
        
    } catch (error) {
        console.log('MongoDb connection error', error);
        
    }
}

module.exports = connectDB;