const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT_LOCAL ||8001
const connect = require('./config/db')
const router = require('./routers/Auth.route')
const userRouter = require('./routers/users.routes')
const logger = require('./middlewares/logger')

connect()


app.use(express.json())



app.use(logger)
app.use('/',router)
app.use('/users',userRouter)


app.listen(PORT , (req,res)=>{
    console.log(`server is started on port ${PORT}`);
    
})