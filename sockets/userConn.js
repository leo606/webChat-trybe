const genToken = require('../utils/genToken');

module.exports = (socket, connectedUsers) => {
    const nick = genToken(16);
    console.log('userConn');
    socket.emit('usersList', [nick, ...connectedUsers.map((user) => user.nick)]);
    socket.emit('nick', nick);
  
    connectedUsers.push({ nick, sId: socket.id });
    socket.broadcast.emit('usersList', connectedUsers.map((user) => user.nick));
};