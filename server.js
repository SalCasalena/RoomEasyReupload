import express from "express";
import { Server } from "socket.io"

const PORT = 3005;
const app = express();
const options = {
    cors: true,
    origin: ['https://localhost:3005']
}



const server = app.listen(3005, () =>{
    console.log('server islistenig')
})

const io = new Server(server, options)


app.use(express.static('./dist'))


app.get('/', (req, res) =>{
    res.sendFile("index.html")
})
// when the user connect this will run
io.on("connection", socket => {
    socket.emit('welcome', "welcome to the server", socket.id)

    // creating a global room
    socket.join('room1');
    socket.on('message', message => {
        io.to("room1").emit('receiveMessage', {
            userID: socket.id,
            message: message
        })
    })

})