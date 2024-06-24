---
layout: default
title: ChatBot
permalink: /chatbot/
---

<div class="chatbot-page">
  <div class="chatbot-container">
    <div class="chatbot-sidebar">
      <div class="sidebar-section">
        <h2>User List</h2>
        <nav class="sidebar-nav" aria-label="User List">
          <!-- Example of user list items -->
          <div class="user-list-item">
            <a href="#">User 1</a>
          </div>
          <div class="user-list-item">
            <a href="#">User 2</a>
          </div>
          <!-- More user list items -->
        </nav>
      </div>
      <div class="sidebar-section">
        <h2>Features</h2>
        <nav class="sidebar-nav" aria-label="Features">
          <div class="feature-item">
            <a href="#">Feature 1</a>
          </div>
          <div class="feature-item">
            <a href="#">Feature 2</a>
          </div>
          <!-- More feature items -->
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
    <div class="sample-questions">
      <h2>Sample Questions</h2>
      <ul>
        <li><a href="#">How can I integrate AI in my business?</a></li>
        <li><a href="#">What are the latest trends in AI?</a></li>
        <li><a href="#">Can AI improve customer service?</a></li>
        <li><a href="#">How to start with machine learning?</a></li>
        <!-- More sample questions -->
      </ul>
    </div>
  </div>
</div>
