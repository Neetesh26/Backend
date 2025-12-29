const express = require('express'); 
const app = express();
const fs = require("fs")
const zlib = require("zlib")
 

const port = 9000

 fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")))


app.get("/",(req,res)=>{
    const stream = fs.createReadStream("./sample.txt","utf-8")
    stream.on("data",(chunk)=> res.write(chunk))
    stream.on("end",()=> res.end())
    // fs.readFile("./sample.txt",(err,data)=>{

    //     return res.end(data)
    // })
})

app.listen(port, (req, res) => {
    console.log(`server is started on port: ${port}`);
})