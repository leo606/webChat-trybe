const genToken = require('../utils/genToken');

module.exports = (io, socket, connectedUsers) => {
    const nick = genToken(16);
    socket.emit('nick', nick);
    socket.emit('usersList', connectedUsers.map((user) => user.nick));

    connectedUsers.push({ nick, sId: socket.id });
    socket.broadcast.emit('usersList', connectedUsers.map((user) => user.nick));
};