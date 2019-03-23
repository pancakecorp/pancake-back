const WebSocket = require('ws');
const express = require('express')

const app = express();

const server = new WebSocket.Server({ server: app.listen(8080) })

const socket = new WebSocket('ws://localhost:8080');

server.on('connection', socket => {
    socket.on('message', message => {
        server.clients.forEach(client => {
            client.send(message);
        })
    })
    
})
setInterval(function() {
    socket.emit('message', "You will listen to me");
}, 5000)

socket.addEventListener('open', () => {
    socket.send('Hello');
});

socket.addEventListener('message', event => {
    console.log("message from server: " + event.data);
});
