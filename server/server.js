const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');


const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "/../public");
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
    console.log(`New user connected`);
    socket.on('disconnect',()=>{
       console.log(`User was disconnected`);
    });
});



app.use(express.static(publicPath));


server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});


