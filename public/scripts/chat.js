const socket = window.io();

const msgInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  socket.emit('message', { nickname: 'nicccck', chatMessage: msgInput.value });
});

socket.on('message', (msg) => console.log(msg));