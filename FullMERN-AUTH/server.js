const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const connectDB = require('./database/db');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use('/user', userRoute)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is listening at port ${PORT}`);  
})