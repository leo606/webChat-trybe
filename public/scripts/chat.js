const socket = window.io();

const nickSaveBtn = document.getElementById('nick-save-btn');
const sendMsgBtn = document.getElementById('send-btn');
let nickname = '';
socket.emit('userConn');

sendMsgBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const msgInput = document.getElementById('message-input');
  socket.emit('message', { nickname, chatMessage: msgInput.value });
  msgInput.value = null;
});

nickSaveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nickInput = document.getElementById('nick-input');
  socket.emit('changeNick', { nickname, newNick: nickInput.value });
});

socket.on('nick', (nick) => {
  const nickSpan = document.getElementById('user-nick-span');
  nickname = nick;
  nickSpan.innerHTML = nickname;
});

socket.on('message', (msg) => {
  const msgsUl = document.getElementById('chat-messages');
  const msgLi = document.createElement('li');
  msgLi.dataset.testid = 'message';
  msgLi.innerHTML = msg;
  msgsUl.appendChild(msgLi);
});

socket.on('usersList', (list) => {
  const usersUl = document.getElementById('users-list');
  console.log(list);
  usersUl.innerHTML = null;

  list.forEach((user) => {
    const userLi = document.createElement('li');
    userLi.innerHTML = user;
    userLi.dataset.testid = 'online-user';
    usersUl.appendChild(userLi);
  });
});