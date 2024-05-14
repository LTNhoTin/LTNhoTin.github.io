import tkinter as tk
from tkinter import messagebox
from datetime import datetime
import os
import subprocess

def create_blog_post(show_date_var):
    title = title_entry.get()
    excerpt = excerpt_entry.get()
    show_date = show_date_var.get()
    tags = [tag.strip() for tag in tags_entry.get().split(',')]
    categories = [cat.strip() for cat in categories_entry.get().split(',')]
    content = content_text.get("1.0", tk.END).strip()
    
    if not title or not excerpt or not tags or not categories or not content:
        messagebox.showwarning("Input Error", "Please fill in all fields.")
        return
    
    now = datetime.now()
    date_str = now.strftime('%Y-%m-%d')
    time_str = now.strftime('%Y-%m-%dT%H:%M:%S%z')
    
    # Xác định ảnh nền dựa trên thời gian hiện tại
    current_hour = now.hour
    if 6 <= current_hour < 17:
        overlay_image = "/assets/images/day.jpg"
    else:
        overlay_image = "/assets/images/night.jpg"
    
    file_name = f"{date_str}-{title.replace(' ', '-').lower()}.md"
    file_path = os.path.join("/Users/nhotin/Documents/GitHub/LTNhoTin.github.io/_posts", file_name)

    # Tạo chuỗi tags và categories theo định dạng YAML
    tags_str = '\n'.join([f"  - {tag}" for tag in tags])
    categories_str = '\n'.join([f"  - {cat}" for cat in categories])

    # Nội dung của bài viết
    file_content = f"""---
title: "{title}"
excerpt: "{excerpt}"
show_date: {show_date}
tags:
{tags_str}
categories:
{categories_str}
last_modified_at: {time_str}
author_profile: true
classes: wide 
toc: true
header:
  overlay_color: "#5e616c"
  overlay_image: {overlay_image}
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
        messagebox.showinfo("Success", f"The blog post '{file_name}' has been created and pushed to GitHub successfully.")
    except subprocess.CalledProcessError as e:
        messagebox.showerror("Git Error", f"An error occurred while pushing the file to GitHub: {e}")
    
    title_entry.delete(0, tk.END)
    excerpt_entry.delete(0, tk.END)
    tags_entry.delete(0, tk.END)
    categories_entry.delete(0, tk.END)
    content_text.delete("1.0", tk.END)
    show_date_var.set(False)

# Tạo giao diện người dùng với Tkinter
root = tk.Tk()
root.title("Blog Post Creator")

tk.Label(root, text="Title:").grid(row=0, column=0, sticky=tk.W)
title_entry = tk.Entry(root, width=50)
title_entry.grid(row=0, column=1, padx=10, pady=5)

tk.Label(root, text="Excerpt:").grid(row=1, column=0, sticky=tk.W)
excerpt_entry = tk.Entry(root, width=50)
excerpt_entry.grid(row=1, column=1, padx=10, pady=5)

tk.Label(root, text="Tags (comma-separated):").grid(row=2, column=0, sticky=tk.W)
tags_entry = tk.Entry(root, width=50)
tags_entry.grid(row=2, column=1, padx=10, pady=5)

tk.Label(root, text="Categories (comma-separated):").grid(row=3, column=0, sticky=tk.W)
categories_entry = tk.Entry(root, width=50)
categories_entry.grid(row=3, column=1, padx=10, pady=5)

tk.Label(root, text="Content:").grid(row=4, column=0, sticky=tk.NW)
content_text = tk.Text(root, width=60, height=20)
content_text.grid(row=4, column=1, padx=10, pady=5)

show_date_var = tk.BooleanVar(value=True)  # Set to True by default

submit_button = tk.Button(root, text="Submit", command=lambda: create_blog_post(show_date_var))
submit_button.grid(row=5, column=1, sticky=tk.E, padx=10, pady=10)

root.mainloop()
