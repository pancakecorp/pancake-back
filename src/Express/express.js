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

socket.addEventListener('open', () => {
    socket.send('hello world');
});

socket.addEventListener('message', event => {
    console.log("message from server: " + event.data);
});

function sendMessage(socket, userName, content){
    socket.send(
        JSON.stringify({
            userName,
            content
        })
    );
}

function receiveMessage(message){
    console.log(userName + " is saying: "+ message.content);
}