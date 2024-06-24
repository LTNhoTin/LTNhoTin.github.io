document.querySelector('button').addEventListener('click', function() {
  var userInput = document.getElementById('user-input').value;
  if (userInput) {
    var userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.textContent = userInput;
    document.getElementById('output').appendChild(userMessageDiv);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Here you can add the bot response
    var botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'bot-message';
    botMessageDiv.textContent = 'This is a response from the bot.';
    document.getElementById('output').appendChild(botMessageDiv);

    // Scroll to the bottom of the chat window
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
  }
});
