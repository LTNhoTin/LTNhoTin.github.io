document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  async function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim(); // Loại bỏ khoảng trắng thừa
    if (userInput) {
      displayMessage(userInput, 'user-message');
  
      try {
        const response = await callGeminiAPI(userInput);
        displayMessage(response, 'bot-message');
      } catch (error) {
        displayMessage("Xin lỗi, hiện tại tôi không thể xử lý yêu cầu của bạn.", 'bot-message');
        console.error('Lỗi khi gọi API Gemini:', error);
      }
    }
  }
  
  function displayMessage(message, className) {
    const chatWindow = document.getElementById('output');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.className = className;
    chatWindow.appendChild(newMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Cuộn xuống tin nhắn mới nhất
    document.getElementById('user-input').value = ''; // Xóa nội dung input
  }
  
  async function callGeminiAPI(message) {
    const apiKey = 'YOUR_API_KEY'; 
    const apiUrl = 'YOUR_API_ENDPOINT'; 
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ query: message })
    });
  
    if (!response.ok) { // Kiểm tra xem response có thành công hay không
      throw new Error(`API request failed with status ${response.status}`);
    }
  
    const data = await response.json();
    return data.answer; // Trả về câu trả lời từ Gemini
  }
  