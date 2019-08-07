const WebSocket = require('ws');
const express = require('express');
const app = express();

var portHttp = process.env.PORT || 80;
var portWs = 1337;


app.get('/js/drawer.js', function(req, res){
  res.sendFile(__dirname + '/js/drawer.js');
});

app.get('/js/client.js', function(req, res){
  res.sendFile(__dirname + '/js/client.js');
});

app.get('/styles.css', function(req, res){
  res.sendFile(__dirname + '/styles.css');
});

app.get('/background.png', function(req, res){
  res.sendFile(__dirname + '/background.png');
});

app.get('/images/default_dance.png', function(req, res){
  res.sendFile(__dirname + '/images/default_dance.png');
});

app.get('/maps/de_dust2_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_dust2_radar.png');
});

app.get('/images/hideo.jpg', function(req, res){
  res.sendFile(__dirname + '/images/hideo.jpg');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(portHttp);


const server = new WebSocket.Server({ port:portWs });

server.on("connection", ws => {
  ws.on("message", message => {
    server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send(message);
    });
  });
});