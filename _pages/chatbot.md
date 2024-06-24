---
layout: default
title: ChatBot
permalink: /chatbot/
---

<div class="chatbot-page">
  <div class="chatbot-container">
    <div class="chatbot-sidebar">
      <div class="sidebar-header">
        <h2>Chat History</h2>
        <button id="new-chat-button">New Chat</button>
        <button id="clear-chat-button">Clear All Chats</button>
        <nav class="sidebar-nav" aria-label="Chat History">
          <!-- Lịch sử đoạn chat sẽ được thêm vào đây -->
          <div id="chat-history"></div>
        </nav>
      </div>
    </div>
    <div class="chatbot-main">
      <div class="chatbot-header">
        <h2>Nho's Journey</h2>
        <p>Welcome to the ChatBot</p>
      </div>
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
