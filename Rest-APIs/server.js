const express = require('express');
const fs = require('fs');

const usersData = require('./MOCK_DATA.json')

const app = express();
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') { return res.end(); }
    const logEntry = `Request received at : ${new Date().toString()} for URL : ${req.url}\n`;
    fs.appendFile('server_log.txt', logEntry, (err,result) => {
        if (err) {
           return console.error('Error writing to log file', err);
        }
        console.log(result);
        
    });
    next();
});

app.get('/api/users',(req,res)=>{
    return res.json(usersData);
})



app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});