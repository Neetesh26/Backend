import mongoose from "mongoose";

const 
connectDB = async()=>{
    try {
        // await mongoose.connect(`${process.env.MONGO_URI}/Mern-AuthBackend`)
        await mongoose.connect(`mongodb://0.0.0.0/Mern-AuthBackend`)
        console.log('MongoDB connected successfully');
        
    } catch (error) {
        console.log('MongoDb connection error', error);
        
    }
}

export default connectDB;