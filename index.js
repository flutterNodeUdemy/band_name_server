const express = require('express');
const path = require('path');
require('dotenv').config();


const port = process.env.PORT
const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io', { allowEIO3: true })(server);
require('./sockets/socket');




//path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo puerto... ${port}`);
})