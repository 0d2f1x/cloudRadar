const WebSocket = require('ws');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();

const httpServer = http.createServer(app);
var port = process.env.PORT || 80;

require('./routes')(app);
app.set('views',path.join(__dirname,'/pages/'));
app.set("view engine","hbs");


app.get('*', function(req, res){
  res.render('maps');
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