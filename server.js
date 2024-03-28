'use strict';


const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');

    console.log("Connected");
});

app.get("/", (req, res) => {
    fs.readFile('client-user.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });  // set status code and MIME type
        res.write(data);
        res.end();  // end the response
    });
})

server.listen(8080);