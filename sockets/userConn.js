const genToken = require('../utils/genToken');

module.exports = (io, socket, connectedUsers) => {
    const nick = genToken(16);
    socket.emit('nick', nick);

    connectedUsers.push({ nick, sId: socket.id });
    io.emit('usersList', connectedUsers.map((user) => user.nick));
};