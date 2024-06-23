---
layout: chatbot
title: ChatBot
permalink: /chatbot/
---

<div class="bg-gradient-to-r from-blue-50 to-purple-100 flex justify-center py-8">
  <div class="hidden lg:block drawer-side absolute w-64 h-[20vh] left-3 mt-2 drop-shadow-md">
    <div class="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3 overflow-auto scroll-y-auto max-h-[80vh]">
      <ul class="menu text-sm">
        <h2 class="font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Lịch sử trò chuyện</h2>
        <p class="text-sm text-gray-500">Hiện chưa có cuộc hội thoại nào</p>
      </ul>
    </div>
  </div>

  <div class="hidden lg:block drawer-side absolute w-64 h-[20vh] mt-2 right-3 drop-shadow-md">
    <div class="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3">
      <h2 class="font-bold text-sm mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Nguồn tham khảo</h2>
      <ul class="menu">
        <li>
          <label class="label cursor-pointer">
            <span class="label-text font-medium">Bách khoa toàn thư Wikipedia</span>
            <input type="radio" name="radio-10" class="radio checked:bg-blue-500" value="wiki">
          </label>
        </li>
        <li>
          <label class="label cursor-pointer">
            <span class="label-text font-medium">Đại học Nguyễn Tất Thành</span>
            <input type="radio" name="radio-10" class="radio checked:bg-blue-500" value="nttu" checked>
          </label>
        </li>
      </ul>
    </div>

    <div class="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3 overflow-auto scroll-y-auto max-h-[43vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <ul class="menu text-sm">
        <h2 class="font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Những câu hỏi phổ biến</h2>
        <li><p class="max-w-64"><i class="far fa-message"></i> Điều kiện nhận học bổng?</p></li>
        <!-- Thêm các mục FAQ khác -->
      </ul>
    </div>
  </div>

  <div class="flex justify-center h-[80vh]">
    <div id="chat-area" class="mt-5 text-sm scrollbar-thin scrollbar-thumb-gray-300 bg-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-3xl border-2 md:w-[50%] md:p-3 p-1 w-full overflow-auto scroll-y-auto h-[80%]">
      <div class="chat chat-start drop-shadow-md">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full border-2 border-blue-500">
            <img class="scale-150" src="https://github.com/phatjkk/phatjkk.github.io/blob/master/nttu/assets/robot_image-1ca2ea4e.png?raw=true">
          </div>
        </div>
        <div class="chat-bubble chat-bubble-info break-words">
          <span style="white-space: pre-line;">Xin chào! Đây là Chatbot, trợ lý đắc lực dành cho bạn! Bạn muốn tìm kiếm thông tin về những gì? Đừng quên chọn nguồn tham khảo phù hợp để mình có thể giúp bạn tìm kiếm thông tin chính xác nhất nha. 😄</span>
        </div>
      </div>
      <!-- Additional chat messages will appear here -->
    </div>
  </div>
</div>
