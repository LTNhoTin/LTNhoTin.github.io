---
title: My Image Gallery
layout: splash
permalink: /gallery/
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/gallery/dalat.jpg
  caption: "[**Đà Lạt, Việt Nam**]"
  actions:
    - label: "My journey"
excerpt: >
  <span style="color: cyan;">**Hello world!!**</span> <br/>
  **Site này để up mấy tấm ảnh cá nhân mà mình thích** <br />
  📷 🌏 🎶 💖 
  <br/>

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
  - url: /assets/images/gallery/mylove/mylove3.jpeg
    image_path: /assets/images/gallery/mylove/mylove3.jpeg
    alt: "My Love"
    title: "My Love"
  - url: /assets/images/gallery/mylove/mylove4.jpeg
    image_path: /assets/images/gallery/mylove/mylove4.jpeg
    alt: "My Love"
    title: "My Love"

cat_bap_gallery:
  # Use a list of dictionaries for better readability
  - url: /assets/images/gallery/cat_bap/bap1.jpeg
    image_path: /assets/images/gallery/cat_bap/bap1.jpeg
    alt: "Cat Bắp"  # Descriptive alternative text
    title: "Bắp"  # Concise title
  - url: /assets/images/gallery/cat_bap/bap2.jpeg
    image_path: /assets/images/gallery/cat_bap/bap2.jpeg
    alt: "Cat Bắp"
    title: "Bắp"
  - url: /assets/images/gallery/cat_bap/bap3.jpeg
    image_path: /assets/images/gallery/cat_bap/bap3.jpeg
    alt: "Cat Bắp"
    title: "Bắp"

---


## My Photos  # Consistent section title

{% include gallery id="my_photos_gallery" %}

## My Love  # Kept the original title

{% include gallery id="mylove_gallery" %}

## Image Sections  # Improved heading

{% include gallery id="cat_bap_gallery" %}
