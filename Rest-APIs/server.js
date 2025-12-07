const express = require('express');
const fs = require('fs');

const usersData = require('./MOCK_DATA.json')

const app = express();
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') { return res.end(); }
    const logEntry = `Request received at : ${new Date().toString()} for URL : ${req.url}\n`;
    fs.appendFile('server_log.txt', logEntry, (err,result) => {
        if(err){
            console.log('Error writing to log file' , err);
        }

    });
    next();
});

app.get('/api/users',(req,res)=>{
    return res.json(usersData);
})

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const data = usersData.find((user) => user.id ===id)
        return res.json(data)
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});