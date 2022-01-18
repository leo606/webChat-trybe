const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '',
    methods: ['GET', 'POST'],
  },
});

const PORT = 3000;

http.listen(PORT, () => console.log('listening', PORT));
