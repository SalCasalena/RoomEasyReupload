var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

io.on('connection', socket=> {
    socket.emit('chat-message', 'Hello World')
});