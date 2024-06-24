---
layout: chatbot
title: ChatBot
permalink: /chatbot/
---

<div class="chatbot-container">
  <div class="drawer-left">
    <div class="menu">
      <ul class="menu-list">
        <h2 class="menu-header">Lịch sử trò chuyện</h2>
        <p class="menu-subtext">Hiện chưa có cuộc hội thoại nào</p>
      </ul>
    </div>
  </div>

  <div class="drawer-right">
    <div class="menu">
      <h2 class="menu-header">Nguồn tham khảo</h2>
      <ul class="menu-list">
        <li>
          <label class="label">
            <span class="label-text">Bách khoa toàn thư Wikipedia</span>
            <input type="radio" name="radio-10" class="radio" value="wiki">
          </label>
        </li>
        <li>
          <label class="label">
            <span class="label-text">Đại học Nguyễn Tất Thành</span>
            <input type="radio" name="radio-10" class="radio" value="nttu" checked>
          </label>
        </li>
      </ul>
    </div>

    <div class="menu faq">
      <h2 class="menu-header">Những câu hỏi phổ biến</h2>
      <ul class="menu-list">
        <li><p class="menu-item">Điều kiện nhận học bổng?</p></li>
        <!-- Thêm các mục FAQ khác -->
      </ul>
    </div>
  </div>

  <div class="chat-area">
    <div id="output" class="chat-output">
      <div class="chat-message bot-message">Xin chào! Đây là Chatbot.</div>
    </div>
    <div class="input-area">
      <input type="text" id="user-input" placeholder="Nhập tin nhắn của bạn...">
      <button id="send-button">Gửi</button>
    </div>
  </div>
</div>
