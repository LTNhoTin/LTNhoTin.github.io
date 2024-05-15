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

cat_bap_gallery:
{% for i in (1..24) %}
  - url: /assets/images/gallery/cat_bap/bap{{ i }}.jpeg
    image_path: /assets/images/gallery/cat_bap/bap{{ i }}.jpeg
    alt: "Cat Bắp {{ i }}"
    title: "Ảnh {{ i }} của Bắp"
{% endfor %}

cat_dua_gallery:
{% for i in (1..27) %}
  - url: /assets/images/gallery/cat_dua/dua{{ i }}.jpeg
    image_path: /assets/images/gallery/cat_dua/dua{{ i }}.jpeg
    alt: "Cat Dừa {{ i }}"
    title: "Ảnh {{ i }} của Dừa"
{% endfor %}

my_photos_gallery:
{% for i in (1..3) %}
  - url: /assets/images/gallery/my_photos/my{{ i }}.jpeg
    image_path: /assets/images/gallery/my_photos/my{{ i }}.jpeg
    alt: "My Photo {{ i }}"
    title: "Ảnh {{ i }} của tôi"
{% endfor %}

mylove_gallery:
{% for i in (1..4) %}
  - url: /assets/images/gallery/mylove/mylove{{ i }}.jpeg
    image_path: /assets/images/gallery/mylove/mylove{{ i }}.jpeg
    alt: "My Love {{ i }}"
    title: "Ảnh {{ i }} của mylove"
{% endfor %}
---

## Ảnh của Bắp

{% include gallery id="cat_bap_gallery" %}

## Ảnh của Dừa

{% include gallery id="cat_dua_gallery" %}

## Các ảnh của tôi

{% include gallery id="my_photos_gallery" %}

## Ảnh của My Love

{% include gallery id="mylove_gallery" %}
