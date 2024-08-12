# Sử dụng hình ảnh Ruby với Jekyll đã được cài sẵn
FROM --platform=linux/arm64 jekyll/jekyll:4

# Đặt thư mục làm việc
WORKDIR /srv/jekyll

# Thiết lập thư mục an toàn trong Git
RUN git config --global --add safe.directory /srv/jekyll

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Cài đặt các dependencies cần thiết
RUN bundle install

# Command mặc định để chạy server Jekyll
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
