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

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Call the Gemini API
        callGeminiAPI(userInput).then(response => {
            const botMessage = document.createElement('div');
            botMessage.textContent = response;
            botMessage.className = 'bot-message';
            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}

async function callGeminiAPI(message) {
    const apiKey = 'AIzaSyBkOdlXM6HN9so1P7rA-Wr_bpwA6oEgZGA';  // Replace with your actual API key
    const apiUrl = 'https://api.gemini.com/v1/your-endpoint';  // Replace with your actual API endpoint

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ query: message })
    });

    const data = await response.json();
    return data.answer;  // Adjust according to the actual response structure
}
