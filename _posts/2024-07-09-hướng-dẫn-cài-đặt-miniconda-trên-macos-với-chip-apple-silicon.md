---
title: "Hướng dẫn cài đặt Miniconda trên macOS với chip Apple Silicon"
excerpt: "Hướng dẫn chi tiết cách cài đặt Miniconda trên máy Mac với chip Apple Silicon và cách tạo, quản lý môi trường ảo với conda."
show_date: True
tags:
  - Miniconda
categories:
  - Hướng dẫn
last_modified_at: 2024-07-09T20:34:12+07:00
author_profile: true
classes: wide 
toc: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/night.jpg
  caption: "Post created by NhoTin"
---

# Hướng dẫn cài đặt Miniconda trên macOS với chip Apple Silicon

## Bước 1: Tải xuống trình cài đặt Miniconda

Mở Terminal và chạy lệnh sau để tải xuống trình cài đặt Miniconda cho macOS (Apple Silicon):

```sh
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
```

## Bước 2: Chạy trình cài đặt Miniconda

Chạy lệnh sau để bắt đầu quá trình cài đặt Miniconda:

```sh
bash Miniconda3-latest-MacOSX-arm64.sh
```

Làm theo các hướng dẫn trên màn hình để hoàn tất cài đặt. Khi được hỏi về việc thêm Miniconda vào PATH, chọn \`yes\`.

## Bước 3: Thêm Miniconda vào PATH (nếu cần thiết)

Nếu sau khi cài đặt, \`conda\` không được nhận diện trong Terminal, bạn cần thêm Miniconda vào PATH thủ công.

Mở tệp cấu hình zsh .zshrc:

```sh
nano ~/.zshrc
```

Thêm dòng sau vào cuối tệp:

```sh
export PATH="$HOME/miniconda3/bin:$PATH"
```

Lưu và đóng tệp, sau đó tải lại cấu hình zsh:

```sh
source ~/.zshrc
```

## Bước 4: Kiểm tra cài đặt

Kiểm tra xem \`conda\` đã được cài đặt và thêm vào PATH chưa:

```sh
conda --version
```

Lệnh trên sẽ hiển thị phiên bản của \`conda\` nếu bạn đã cài đặt thành công.

## Bước 5: Tạo và kích hoạt môi trường ảo

### Tạo môi trường ảo

Để tạo một môi trường ảo mới, sử dụng lệnh sau:

```sh
conda create -n myenv python=3.10
```

Thay \`myenv\` bằng tên môi trường bạn muốn tạo và \`python=3.10\` bằng phiên bản Python bạn cần.

### Kích hoạt môi trường ảo

Kích hoạt môi trường ảo vừa tạo bằng lệnh sau:

```sh
conda activate myenv
```

### Hủy kích hoạt môi trường ảo

Để hủy kích hoạt môi trường ảo, sử dụng lệnh:

```sh
conda deactivate
```

## Bước 6: Cài đặt các gói phụ thuộc trong môi trường ảo

Sau khi kích hoạt môi trường ảo, bạn có thể cài đặt các gói cần thiết bằng \`pip\` hoặc \`conda\`. Ví dụ, để cài đặt các gói từ tệp \`requirements.txt\`:

```sh
pip install -r requirements.txt
```

Hoặc để cài đặt một gói cụ thể:

```sh
pip install <package-name>
```

Hoặc sử dụng conda để cài đặt gói:

```sh
conda install <package-name>
```

## Kết luận

Bạn đã hoàn thành cài đặt Miniconda trên macOS với chip Apple Silicon và biết cách tạo và quản lý môi trường ảo.
