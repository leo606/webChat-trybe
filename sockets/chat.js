const userConn = require('./userConn');
const message = require('./message');
const changeNick = require('./changeNick');

const connectedUsers = [];

module.exports = (io) => {
  io.on('connection', (socket) => {
    // userConn(io, socket, connectedUsers);
    socket.on('userConn', () => userConn(socket, connectedUsers));

    socket.on('message', (msg) => message(io, msg));

    socket.on('changeNick', (nickData) => changeNick(socket, nickData, connectedUsers));
    // socket.on('message', ({ chatMessage, nickname }) => {
    //   const date = new Date();
    //   model.insert({ nickname, chatMessage, date });
    //   io.emit('message', `${getDateFormated(date)} - ${nickname} ${chatMessage}`);
    // });

    // socket.on('changeNick', ({ nickname, newNick }) => {
    //   connectedUsers = connectedUsers.map((user) => (user === nickname ? newNick : nick));
    //   model.updateMany({ nickname }, { nickname: newNick });

    //   socket.emit('nick', newNick);
    //   // socket.emit('usersList', [newNick, ...connectedUsers.filter((usr) => usr !== newNick)]);
    //   // io.broadcast.emit('usersList', )
    // });
  });
};
