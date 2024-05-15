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

## Image Sections  # Improved heading

{% include gallery id="cat_bap_gallery" %}

## Ảnh của Dừa  # Kept the original title

{% include gallery id="cat_dua_gallery" %}

## My Photos  # Consistent section title

{% include gallery id="my_photos_gallery" %}

## My Love  # Kept the original title

{% include gallery id="mylove_gallery" %}
