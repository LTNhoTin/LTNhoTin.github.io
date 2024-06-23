document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const userInput = document.getElementById('user-input');
  const chatArea = document.getElementById('chat-area');

  sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
      const userMessageElement = document.createElement('div');
      userMessageElement.className = 'chat chat-end drop-shadow-md';
      userMessageElement.innerHTML = `
        <div class="chat-image avatar">
          <div class="w-10 rounded-full border-2 border-blue-500"></div>
        </div>
        <div class="chat-bubble chat-bubble-user break-words">
          <span style="white-space: pre-line;">${message}</span>
        </div>
      `;
      chatArea.appendChild(userMessageElement);
      userInput.value = '';

      // Simulate bot response
      setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat chat-start drop-shadow-md';
        botMessageElement.innerHTML = `
          <div class="chat-image avatar">
            <div class="w-10 rounded-full border-2 border-blue-500">
              <img class="scale-150" src="https://github.com/phatjkk/phatjkk.github.io/blob/master/nttu/assets/robot_image-1ca2ea4e.png?raw=true">
            </div>
          </div>
          <div class="chat-bubble chat-bubble-info break-words">
            <span style="white-space: pre-line;">Đây là phản hồi của bot</span>
          </div>
        `;
        chatArea.appendChild(botMessageElement);
        chatArea.scrollTop = chatArea.scrollHeight;
      }, 1000);
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });
});
