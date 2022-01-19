const genToken = require('../utils/genToken');

module.exports = (io, socket, connectedUsers) => {
    const nick = genToken(16);
    socket.emit('nick', nick);
    console.log(connectedUsers);

    connectedUsers.push({ nick, sId: socket.id });
    io.emit('usersList', connectedUsers.map((user) => user.nick));
};