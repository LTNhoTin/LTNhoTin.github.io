---
layout: default
title: ChatBot
permalink: /chatbot/
---

<div class="chatbot-page">
  <div class="chatbot-header">
    <h2>Nho's Journey</h2>
    <p>Welcome to the ChatBot</p>
  </div>
  <div class="chatbot-container">
    <div class="chatbot-sidebar">
      <h3>Chat History</h3>
      <div class="chat-history">
        <!-- Lịch sử đoạn chat sẽ được thêm vào đây -->
      </div>
    </div>
    <div class="chatbot-main">
      <div class="model-selection">
        <label for="model-select">Choose a model:</label>
        <select id="model-select">
          <option value="LegalbizAi">LegalbizAi</option>
          <option value="LegalbizAi_gpt">LegalbizAi_gpt</option>
        </select>
      </div>
      <div id="chat-window">
        <div id="output">
          <div class="bot-message">Hello! This is Chatbot.</div>
        </div>
      </div>
      <div id="input-container">
        <input type="text" id="user-input" placeholder="Type your message here...">
        <button id="send-button"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  </div>
</div>
