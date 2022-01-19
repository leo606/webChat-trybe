module.exports = (socket, connectedUsers) => {
  const user = connectedUsers.filter((usr) => usr.sId === socket.id);
};