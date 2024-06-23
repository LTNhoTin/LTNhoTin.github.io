document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const userInput = document.getElementById('user-input');
  const chatWindow = document.getElementById('output');

  sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
      const userMessageElement = document.createElement('div');
      userMessageElement.className = 'user-message';
      userMessageElement.textContent = message;
      chatWindow.appendChild(userMessageElement);
      userInput.value = '';

      // Simulate bot response
      setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'bot-message';
        botMessageElement.textContent = 'Đây là phản hồi của bot';
        chatWindow.appendChild(botMessageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 1000);
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });
});
