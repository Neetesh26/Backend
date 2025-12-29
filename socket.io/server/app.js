const express = require('express');
const http = require('http')
const { Server } = require('socket.io')
const path = require("path")
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve("./public")))

io.on("connection", (socket) => {
    console.log("✅ A user connected:", socket.id);
    socket.on('message',(msg)=>{
        io.emit('msg',msg)
        // console.log("server side",msg);
        
    })



    socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });

  
})


app.get("/", (req, res) => {
    return res.sendFile("./public/index.html")

})
server.listen(3000, () => console.log("🚀 Server at http://localhost:3000"));
