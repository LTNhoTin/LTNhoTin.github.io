document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const userInput = document.getElementById('user-input');
  const chatOutput = document.getElementById('output');

  sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
      const userMessageElement = document.createElement('div');
      userMessageElement.className = 'chat-message user-message';
      userMessageElement.textContent = message;
      chatOutput.appendChild(userMessageElement);
      userInput.value = '';

      // Simulate bot response
      setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat-message bot-message';
        botMessageElement.textContent = 'Đây là phản hồi của bot';
        chatOutput.appendChild(botMessageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
      }, 1000);
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });
});
