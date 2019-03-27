let ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
    console.log('websocket is connected ...')
    ws.send('Hello');
}

ws.onmessage = (event) => {
    console.log(event);
    document.getElementById("receivedMessage").innerHTML = event.data;
}

function sendMessage() {
    ws.send('Message send on click')
}

function receiveMessage(){
    ws.onmessage = (event) => {
        console.log(event);
        document.getElementById("receivedMessage").innerHTML = event.data;
    }
    
}