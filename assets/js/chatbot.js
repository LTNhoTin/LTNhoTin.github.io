document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const userInput = document.getElementById('user-input');
  const output = document.getElementById('output');
  const chatWindow = document.getElementById('chat-window');
  const modelSelect = document.getElementById('model-select');
  const chatHistory = document.getElementById('chat-history');
  const newChatButton = document.getElementById('new-chat-button');
  const clearChatButton = document.getElementById('clear-chat-button');

  const appendMessage = (message, className) => {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = message;
    output.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Thêm tin nhắn vào lịch sử đoạn chat
    const historyItem = document.createElement('div');
    historyItem.className = 'chat-history-item';
    historyItem.textContent = message;
    chatHistory.appendChild(historyItem);
  };

  sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
      appendMessage(message, 'user-message');
      userInput.value = '';

      // Simulate bot response (you can replace this with your chatbot logic)
      setTimeout(() => {
        appendMessage('This is a response from the bot.', 'bot-message');
      }, 1000);
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });

  // Handle model change
  modelSelect.addEventListener('change', (e) => {
    const selectedModel = e.target.value;
    appendMessage(`Model changed to: ${selectedModel}`, 'bot-message');
  });

  // Handle new chat
  newChatButton.addEventListener('click', () => {
    const currentChat = output.innerHTML;
    if (currentChat) {
      const chatId = Date.now();
      const historyItem = document.createElement('div');
      historyItem.className = 'chat-history-item';
      historyItem.innerHTML = `<a href="#" data-chat-id="${chatId}">Chat on ${new Date(chatId).toLocaleString()}</a>`;
      chatHistory.appendChild(historyItem);
      historyItem.addEventListener('click', (e) => {
        e.preventDefault();
        output.innerHTML = currentChat;
      });
    }
    output.innerHTML = '';
  });

  // Handle clear chat
  clearChatButton.addEventListener('click', () => {
    output.innerHTML = '';
    chatHistory.innerHTML = '';
  });
});
