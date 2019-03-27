const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

setInterval(() => broadcast("Listen to me"),1000);

function broadcast(message) {
    server.clients.forEach(client => {
        client.send(message);
})}

server.on('connection', socket => {
    socket.on('message', message => {
        broadcast(message);
    })
})