'use strict';


const express = require('express')
const fs = require('fs');

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const chatlog = [];

app.get("/", (req, res) => {
    fs.readFile('client-user.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });  // set status code and MIME type
        res.write(data);
        res.end();  // end the response
    });

    console.log("Sent html page");
});

app.get("/chatlog", (req, res) => {
    res.json(chatlog);
    res.end();  // end the response

    console.log("Sent chatlog");
});

app.post("/sendMessage", (req, res) => {
    console.log("Got Message");
    console.log(req.body);

    const message = req.body.message;
    const email = req.body.email;

    chatlog.push({ email: email, message: message });
});

app.listen(5623, () => {
    console.log('Server running on port 5623');
});
