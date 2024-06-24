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
        <nav class="sidebar-nav" aria-label="Chat History">
          <!-- Example of chat history items -->
          <div class="chat-history-item">
            <a href="#">Tokenize Difference: Vietnamese vs. English</a>
          </div>
          <div class="chat-history-item">
            <a href="#">Create Web Page Tutorial</a>
          </div>
          <!-- More chat history items -->
        </nav>
      </div>
    </div>
    <div class="chatbot-main">
      <div class="chatbot-header">
        <h2>LegalBizAI</h2>
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
          <div class="bot-message">Hello! I'm Friday.</div>
        </div>
      </div>
      <div id="input-container">
        <input type="text" id="user-input" placeholder="Type your message here...">
        <button id="send-button"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  </div>
</div>
