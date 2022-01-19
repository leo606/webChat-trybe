const userConn = require('./userConn');
const message = require('./message');
const changeNick = require('./changeNick');

let connectedUsers = [];

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('userConn', () => userConn(io, socket, connectedUsers));
    socket.on('message', (msg) => message(io, msg));
    socket.on('changeNick', (nickData) => changeNick(socket, nickData, connectedUsers));

    socket.on('disconnect', () => {
      connectedUsers = connectedUsers.filter((usr) => usr.sId === socket.id);
      io.emit('usersList', connectedUsers.map((usr) => usr.nick));
    });
  });
};
