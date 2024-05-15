---
title: My Image Gallery
layout: splash
permalink: /gallery/
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/gallery/my_photos/my3.jpeg
  actions:
excerpt: >
  <span style="color: cyan;">**Hello world!!**</span> <br/>
  **Site này để up mấy tấm ảnh cá nhân mà mình thích** <br />
  📷 🌏 🎶 💖 
  <br/>

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

cat_dua_gallery:
  - url: /assets/images/gallery/cat_dua/dua21.jpeg
    image_path: /assets/images/gallery/cat_dua/dua1.jpeg
    alt: "Cat Dừa"
    title: "Dừa"
  - url: /assets/images/gallery/cat_dua/dua20.jpeg
    image_path: /assets/images/gallery/cat_dua/dua2.jpeg
    alt: "Cat Dừa"
    title: "Dừa"
  - url: /assets/images/gallery/cat_dua/dua6.jpeg
    image_path: /assets/images/gallery/cat_dua/dua27.jpeg
    alt: "Cat Dừa"
    title: "Dừa"
    
cat_bap_gallery:
  # Use a list of dictionaries for better readability
  - url: /assets/images/gallery/cat_bap/bap1.jpeg
    image_path: /assets/images/gallery/cat_bap/bap6.jpeg
    alt: "Cat Bắp"  # Descriptive alternative text
    title: "Bắp"  # Concise title
  - url: /assets/images/gallery/cat_bap/bap2.jpeg
    image_path: /assets/images/gallery/cat_bap/bap11.jpeg
    alt: "Cat Bắp"
    title: "Bắp"
  - url: /assets/images/gallery/cat_bap/bap3.jpeg
    image_path: /assets/images/gallery/cat_bap/bap24.jpeg
    alt: "Cat Bắp"
    title: "Bắp"

---

## My Love  # Kept the original title

{% include gallery id="mylove_gallery" %}

## Image Sections  # Improved heading

{% include gallery id="cat_bap_gallery" %}

## Ảnh của Dừa  # Kept the original title

{% include gallery id="cat_dua_gallery" %}