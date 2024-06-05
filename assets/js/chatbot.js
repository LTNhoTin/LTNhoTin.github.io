document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        const chatWindow = document.getElementById('chat-window');
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput;
        userMessage.className = 'user-message';
        chatWindow.appendChild(userMessage);

        // Here you would send the message to your chatbot back-end
        // For now, we'll just display a mock response
        const botMessage = document.createElement('div');
        botMessage.textContent = 'This is a mock response from the chatbot.';
        botMessage.className = 'bot-message';
        chatWindow.appendChild(botMessage);

        // Clear the input field
        document.getElementById('user-input').value = '';
    }
}
