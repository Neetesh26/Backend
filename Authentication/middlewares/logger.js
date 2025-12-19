const fs = require('fs')

const logger = (req,res,next) => {
    if (req.url === '/favicon.ico') { return res.end(); }
    const logEntry = `Request received at : ${new Date().toString()} for URL : ${req.originalUrl}\n`;
    fs.appendFile('logs.txt' , logEntry,(err)=>{
        if(err){
            console.log('Error writing to log file' , err);
        }
    } )
    next()
}





module.exports = logger;