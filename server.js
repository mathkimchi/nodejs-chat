'use strict';


const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ server: server });

const chatlog = [];

wss.on('connection', function connection(ws) {
    let useremail = "anon";
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        let data_json = JSON.parse(data);

        console.log('received: %s', data);
        console.log('received json: %s', data_json);

        if (data_json["sendtype"] == "emailchange") {
            useremail = data_json["newemail"]
        }

        if (data_json["sendtype"] == "message") {

            chatlog.push({
                "sender": useremail,
                "messagevalue": data_json["messagevalue"]
            });

            console.log(chatlog);

            ws.send(JSON.stringify({ "sendtype": "message", "messagevalue": "yooooo i just recvd ur msg!" }));
        }

        if (data_json["sendtype"] == "requestchatlog") {
            ws.send(JSON.stringify({ "sendtype": "chatlog", "chatlogvalue": chatlog }));
        }
    });

    ws.send(JSON.stringify({ "sendtype": "message", "messagevalue": "initial msg check!" }));

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