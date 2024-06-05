document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        const chatWindow = document.getElementById('output');
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput;
        userMessage.className = 'user-message';
        chatWindow.appendChild(userMessage);

        // Fake response from chatbot for demonstration
        const botMessage = document.createElement('div');
        botMessage.textContent = 'This is a response from the chatbot.';
        botMessage.className = 'bot-message';
        chatWindow.appendChild(botMessage);

        // Clear the input field
        document.getElementById('user-input').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
