document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
      const userMessageElement = document.createElement('div');
      userMessageElement.className = 'user-message';
      userMessageElement.textContent = message;
      document.getElementById('output').appendChild(userMessageElement);
      userInput.value = '';
      // Xử lý logic chatbot để thêm bot message vào đây
      const botMessageElement = document.createElement('div');
      botMessageElement.className = 'bot-message';
      botMessageElement.textContent = 'Đây là phản hồi của bot';
      document.getElementById('output').appendChild(botMessageElement);
      // Cuộn xuống cuối
      document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
    }
  });
});
