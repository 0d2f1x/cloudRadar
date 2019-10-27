const WebSocket = require('ws');
const express = require('express');
const http = require('http')

const app = express();
const httpServer = http.createServer(app);

var port = process.env.PORT || 80;

{
app.get('/js/drawer.js', function(req, res){
  res.sendFile(__dirname + '/js/drawer.js');
});

app.get('/js/client.js', function(req, res){
  res.sendFile(__dirname + '/js/client.js');
});

app.get('/styles.css', function(req, res){
  res.sendFile(__dirname + '/styles.css');
});

app.get('/images/background.png', function(req, res){
  res.sendFile(__dirname + '/images/background.png');
});

app.get('/images/default_dance.png', function(req, res){
  res.sendFile(__dirname + '/images/default_dance.png');
});

app.get('/maps/de_dust2_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_dust2_radar.png');
});

app.get('/maps/de_mirage_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_mirage_radar.png');
});

app.get('/maps/de_inferno_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_inferno_radar.png');
});

app.get('/maps/de_cache_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_cache_radar.png');
});

app.get('/maps/de_overpass_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_overpass_radar.png');
});

app.get('/maps/de_train_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/de_train_radar.png');
});

app.get('/maps/dz_blacksite_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/dz_blacksite_radar.png');
});

app.get('/maps/dz_sirocco_radar.png', function(req, res){
  res.sendFile(__dirname + '/maps/dz_sirocco_radar.png');
});

app.get('/images/hideo.jpg', function(req, res){
  res.sendFile(__dirname + '/images/hideo.jpg');
});

app.get('/images/favicons/X.png', function(req, res){
  res.sendFile(__dirname + '/images/favicons/X.png');
});
}

app.get('*', function(req, res){
  res.sendFile(__dirname + '/pages/maps.html');
});

const server = new WebSocket.Server({
  'server': httpServer
});

server.on("connection", ws => {
  ws.on("message", message => {
    server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send(message);
    });
  });
});
httpServer.listen(port);