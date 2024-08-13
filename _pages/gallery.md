---
layout: splash
permalink: /gallery/
hidden: true
header:
  overlay_color: "#e29587"
  overlay_image: /assets/images/gallery/my_photos/my5.jpeg
excerpt: >
  <div class="overlay-box">
    <h1 class="splash-title">Nhật Ký Hình Ảnh Ấm Cúng ✨📸</h1>
    <span style="color: #ffffff; font-size: 1.3rem;">**🌸🍂 Chào mừng đến với góc nhỏ của những kỷ niệm!**</span> <br/>
    <span style="color: #ffe4e1;">**Đây là nơi mình giữ những khoảnh khắc ấm áp trong tim.** 🌟**</span> <br />
    ☕ ✨ 📖 🌼
    <br/>
  </div>

mylove_gallery:
  - url: /assets/images/gallery/mylove/mylove1.jpeg
    image_path: /assets/images/gallery/mylove/mylove1.jpeg
    alt: "Yêu Thương"
    title: "🌸 Yêu Thương 🌸"
  - url: /assets/images/gallery/mylove/mylove4.jpeg
    image_path: /assets/images/gallery/mylove/mylove4.jpeg
    alt: "Yêu Thương"
    title: "🌸 Yêu Thương 🌸"
  - url: /assets/images/gallery/mylove/mylove3.jpeg
    image_path: /assets/images/gallery/mylove/mylove3.jpeg
    alt: "Yêu Thương"
    title: "🌸 Yêu Thương 🌸"

cat_dua_gallery:
  - url: /assets/images/gallery/cat_dua/dua1.jpeg
    image_path: /assets/images/gallery/cat_dua/dua1.jpeg
    alt: "Dừa Đáng Yêu"
    title: "🍃 Dừa Đáng Yêu 🍃"
  - url: /assets/images/gallery/cat_dua/dua2.jpeg
    image_path: /assets/images/gallery/cat_dua/dua2.jpeg
    alt: "Dừa Đáng Yêu"
    title: "🍃 Dừa Đáng Yêu 🍃"
  - url: /assets/images/gallery/cat_dua/dua3.jpeg
    image_path: /assets/images/gallery/cat_dua/dua3.jpeg
    alt: "Dừa Đáng Yêu"
    title: "🍃 Dừa Đáng Yêu 🍃"

cat_bap_gallery:
  - url: /assets/images/gallery/cat_bap/bap1.jpeg
    image_path: /assets/images/gallery/cat_bap/bap1.jpeg
    alt: "Bắp Xinh Xắn"
    title: "🌽 Bắp Xinh Xắn 🌽"
  - url: /assets/images/gallery/cat_bap/bap2.jpeg
    image_path: /assets/images/gallery/cat_bap/bap2.jpeg
    alt: "Bắp Xinh Xắn"
    title: "🌽 Bắp Xinh Xắn 🌽"
  - url: /assets/images/gallery/cat_bap/bap3.jpeg
    image_path: /assets/images/gallery/cat_bap/bap3.jpeg
    alt: "Bắp Xinh Xắn"
    title: "🌽 Bắp Xinh Xắn 🌽"
---

## 🌸 Yêu Thương 🌸

{% include gallery id="mylove_gallery" %}

## 🍃 Ảnh của Dừa 🍃

{% include gallery id="cat_dua_gallery" %}

## 🌽 Ảnh của Bắp 🌽

{% include gallery id="cat_bap_gallery" %}

<style>
  /* Thêm nền gradient và khung viền */
  .splash-container {
    background: linear-gradient(135deg, #f5a3c7, #ffa07a);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Hộp nền màu đen mờ phía sau tiêu đề và đoạn trích */
  .overlay-box {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 8px;
    display: inline-block;
    text-align: center;
  }

  .splash-title {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  /* Ẩn tiêu đề chính của trang */
  .page-title {
    display: none;
  }

  /* Trang trí các phần gallery */
  h2 {
    color: #ff69b4;
    font-size: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .gallery {
    border: 2px solid #ffa07a;
    border-radius: 8px;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .gallery img {
    border-radius: 8px;
    transition: transform 0.3s;
  }

  .gallery img:hover {
    transform: scale(1.05);
  }

  /* Điều chỉnh các biểu tượng cảm xúc */
  .excerpt {
    font-size: 1.2rem;
  }

  .excerpt span {
    display: block;
    margin-bottom: 0.5rem;
  }
</style>
