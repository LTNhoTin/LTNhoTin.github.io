---
layout: default
title: ChatBot
permalink: /chatbot/
---

<div class="bg-gradient-to-r from-blue-50 to-purple-100 h-[85vh]">
  <div class="hidden lg:block drawer-side absolute w-64 h-[20vh] left-3 mt-2 drop-shadow-md">
    <div class="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3 overflow-auto scroll-y-auto max-h-[80vh]">
      <ul class="menu text-sm">
        <h2 class="font-bold mb-2 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] ">Lịch sử trò chuyện</h2>
        <p class="text-sm text-gray-500">Hiện chưa có cuộc hội thoại nào</p>
      </ul>
    </div>
  </div>

  <div class="hidden lg:block drawer-side absolute w-64 h-[20vh] mt-2 right-3 drop-shadow-md">
    <div class="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3">
      <h2 class="font-bold text-sm mb-2 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] ">Nguồn tham khảo</h2>
      <ul class="menu">
        <li>
          <label class="label cursor-pointer">
            <span class="label-text font-medium">LegalbizAI gpt</span>
            <input type="radio" name="radio-10" class="radio checked:bg-blue-500" value="wiki">
          </label>
        </li>
        <li>
          <label class="label cursor-pointer">
            <span class="label-text font-medium">FPTU gpt</span>
            <input type="radio" name="radio-10" class="radio checked:bg-blue-500" value="nttu" checked>
          </label>
        </li>
      </ul>
    </div>

    <div class="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3 overflow-auto scroll-y-auto max-h-[43vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <ul class="menu text-sm">
        <h2 class="font-bold mb-2 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] ">Những câu hỏi phổ biến</h2>
        <li><p class="max-w-64"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="message" class="svg-inline--fa fa-message " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"></path></svg>Điều kiện nhận học bổng?</p></li>
        <!-- More FAQ items -->
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
          <span style="white-space: pre-line;">Xin chào! Đây là NTTU Chatbot, trợ lý đắc lực dành cho bạn! Bạn muốn tìm kiếm thông tin về những gì? Đừng quên chọn nguồn tham khảo phù hợp để mình có thể giúp bạn tìm kiếm thông tin chính xác nhất nha. 😄</span>
        </div>
      </div>
      <!-- Additional chat messages will appear here -->
    </div>
  </div>
</div>
