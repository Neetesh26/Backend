const express = require('express');
const connect = require('./config/DB')
require('dotenv').config()
const app = express();
const router = require('./routes/user.routes')
const logger = require('./middlewares/logs')

const port = 3000
connect()


app.use(express.json())
app.use(logger)
app.use('/api/users' , router)

app.listen(port, (req, res) => {
    console.log(`server is started on port: ${port}`);
})
