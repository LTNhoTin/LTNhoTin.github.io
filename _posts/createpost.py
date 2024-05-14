import tkinter as tk
from tkinter import messagebox
from datetime import datetime
import os
import subprocess

def create_blog_post():
    title = title_entry.get()
    content = content_text.get("1.0", tk.END)
    
    if not title or not content.strip():
        messagebox.showwarning("Input Error", "Please enter both title and content.")
        return
    
    # Lấy ngày giờ hiện tại
    now = datetime.now()
    date_str = now.strftime('%Y-%m-%d')
    time_str = now.strftime('%Y-%m-%dT%H:%M:%S%z')
    
    # Tạo tên tệp
    file_name = f"{date_str}-{title.replace(' ', '-').lower()}.md"
    file_path = os.path.join("/Users/nhotin/Documents/GitHub/LTNhoTin.github.io/_posts", file_name)
    
    # Nội dung của bài viết
    file_content = f"""---
title: "{title}"
last_modified_at: {time_str}
author_profile: true
classes: wide 
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/treeland.jpg
  caption: "Post created by NhoTin"
---

{content}
"""
    
    # Lưu nội dung vào tệp
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(file_content)
    
    # Git commands to add, commit, and push the file
    try:
        subprocess.run(["git", "-C", "/Users/nhotin/Documents/GitHub/LTNhoTin.github.io", "add", file_path], check=True)
        subprocess.run(["git", "-C", "/Users/nhotin/Documents/GitHub/LTNhoTin.github.io", "commit", "-m", f"Add new post: {file_name}"], check=True)
        subprocess.run(["git", "-C", "/Users/nhotin/Documents/GitHub/LTNhoTin.github.io", "push"], check=True)
        messagebox.showinfo("Success", f"Tệp bài viết '{file_name}' đã được tạo và đẩy lên GitHub thành công.")
    except subprocess.CalledProcessError as e:
        messagebox.showerror("Git Error", f"Đã xảy ra lỗi khi đẩy tệp lên GitHub: {e}")
    
    title_entry.delete(0, tk.END)
    content_text.delete("1.0", tk.END)

# Tạo giao diện người dùng với Tkinter
root = tk.Tk()
root.title("Blog Post Creator")

tk.Label(root, text="Title:").grid(row=0, column=0, sticky=tk.W)
title_entry = tk.Entry(root, width=50)
title_entry.grid(row=0, column=1, padx=10, pady=5)

tk.Label(root, text="Content:").grid(row=1, column=0, sticky=tk.NW)
content_text = tk.Text(root, width=60, height=20)
content_text.grid(row=1, column=1, padx=10, pady=5)

submit_button = tk.Button(root, text="Submit", command=create_blog_post)
submit_button.grid(row=2, column=1, sticky=tk.E, padx=10, pady=10)

root.mainloop()
