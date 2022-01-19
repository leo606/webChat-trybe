const model = require('../models/messages');

module.exports = (socket, { nickname, newNick }, connectedUsers) => {
  const user = connectedUsers.find((usr) => usr.nick === nickname);
  user.nick = newNick;
  model.updateMany({ nickname }, { nickname: newNick });

  socket.emit('nick', newNick);
  socket.emit('usersList', [
    newNick,
    ...connectedUsers.filter((usr) => usr.nick !== newNick && user.nick).map((u) => u.nick),
  ]);
  socket.broadcast.emit('usersList', connectedUsers.map((usr) => usr.nick));
};
