---
title: My Image Gallery
layout: splash
permalink: /gallery/

header:
  overlay_color: "#5e616c"  # Adjust the overlay color as needed
  overlay_image: /assets/images/gallery/day.jpg  # Path to your overlay image
  caption:  # Optional caption text

actions:  # Optional action buttons
  - label: "My journey"

excerpt: >  # Descriptive text for the gallery
  **Welcome to my image gallery!**  # Replace with your desired text
  This site is under development, but feel free to browse my photos.
# Image Galleries  # Clearer heading


feature_row:
  - image_path: /assets/images/gallery/t2.jpg
    alt: "journeys"
    title: "Những chuyến đi"
    excerpt: "Chuyến đi xa tự túc đầu tiên đến Đà Lạt"
    url: "/gallery/"
    btn_class: "btn--primary"
    btn_label: "Xem thêm"
  - image_path: /assets/images/gallery/thachthuc2020.jpg
    alt: "contests"
    title: "Những cuộc thi"
    excerpt: "Thách Thức, cuộc thi nhiều kỉ niệm nhất"
    url: ""
    btn_class: "btn--primary"
    btn_label: "Xem thêm"
  - image_path: /assets/images/gallery/t3.jpg
    alt: "friends"
    title: "Những người bạn"
    excerpt: "3 giờ sáng dậy đi săn mây trong cơn lạnh giá"
    url: ""
    btn_class: "btn--primary"
    btn_label: "Xem thêm"  

cat_bap_gallery:
  # Sử dụng một danh sách các từ điển cho sự dễ đọc tốt hơn
  {% for i in (1..24) %}
  - url: /assets/images/gallery/cat_bap/bap{{ i }}.jpeg
    image_path: /assets/images/gallery/cat_bap/bap{{ i }}.jpeg
    alt: "Cat Bắp {{ i }}"  # Văn bản thay thế mô tả
    title: "Bắp {{ i }}"  # Tiêu đề ngắn gọn
  {% endfor %}

cat_dua_gallery:
  {% for i in (1..27) %}
  - url: /assets/images/gallery/cat_dua/dua{{ i }}.jpeg
    image_path: /assets/images/gallery/cat_dua/dua{{ i }}.jpeg
    alt: "Cat Dừa {{ i }}"
    title: "Dừa {{ i }}"
  {% endfor %}


my_photos_gallery:
  - url: /assets/images/gallery/my_photos/my1.jpeg
    image_path: /assets/images/gallery/my_photos/my1.jpeg
    alt: "My Photo"
    title: "Me"  # Short and clear title
  - url: /assets/images/gallery/my_photos/my2.jpeg
    image_path: /assets/images/gallery/my_photos/my2.jpeg
    alt: "My Photo"
    title: "Me"
  - url: /assets/images/gallery/my_photos/my3.jpeg
    image_path: /assets/images/gallery/my_photos/my3.jpeg
    alt: "My Photo"
    title: "Me"

mylove_gallery:
  - url: /assets/images/gallery/mylove/mylove1.jpeg
    image_path: /assets/images/gallery/mylove/mylove1.jpeg
    alt: "My Love"
    title: "My Love"
  - url: /assets/images/gallery/mylove/mylove2.jpeg
    image_path: /assets/images/gallery/mylove/mylove2.jpeg
    alt: "My Love"
    title: "My Love"
  - url: /assets/images/gallery/mylove/mylove3.jpeg
    image_path: /assets/images/gallery/mylove/mylove3.jpeg
    alt: "My Love"
    title: "My Love"
  - url: /assets/images/gallery/mylove/mylove4.jpeg
    image_path: /assets/images/gallery/mylove/mylove4.jpeg
    alt: "My Love"
    title: "My Love"

---
{% include feature_row %}
