const express = require('express')
const app = express()
const port = 8001

require('dotenv').config()
const dbconnected = require('./config/db')
const router = require('./routes/urls.routes')
dbconnected()

app.use(express.json())
app.use('/url',router)


app.listen(port , (req,res)=>{
    console.log(`your server is listen on port ${port}`);
    
})