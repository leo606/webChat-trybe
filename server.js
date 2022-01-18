require('dotenv').config();
const express = require('express');

const app = express();
const http = require('http').createServer(app);

app.set('view engine', 'ejs');
app.set('views', './views');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(express.static(`${__dirname}/public`));

const sockets = require('./sockets');

sockets.chat(io);

app.get('/', (_req, res) => {
  res.status(200).render('chat');
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => console.log('listening', PORT));
