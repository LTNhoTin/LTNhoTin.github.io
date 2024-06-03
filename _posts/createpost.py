import tkinter as tk
from tkinter import messagebox, ttk
from datetime import datetime, timedelta
import os
import subprocess

def create_blog_post(show_date_var):
    title = title_text.get("1.0", tk.END).strip()
    excerpt = excerpt_text.get("1.0", tk.END).strip()
    show_date = show_date_var.get()
    tags = [tag.strip() for tag in tags_text.get("1.0", tk.END).strip().split(',')] if tags_text.get("1.0", tk.END).strip() else []
    categories = [cat.strip() for cat in categories_text.get("1.0", tk.END).strip().split(',')] if categories_text.get("1.0", tk.END).strip() else []
    content = content_text.get("1.0", tk.END).strip()
    
    if not title or not excerpt or not content:
        messagebox.showwarning("Input Error", "Please fill in all fields except Tags and Categories.")
        return
    
    now = datetime.now()
    local_time = now + timedelta(hours=7)  # Adjusting time to GMT+7
    date_str = local_time.strftime('%Y-%m-%d')
    time_str = local_time.strftime('%Y-%m-%dT%H:%M:%S+07:00')
    
    current_hour = local_time.hour
    overlay_image = "/assets/images/day.jpg" if 6 <= current_hour < 17 else "/assets/images/night.jpg"
    
    file_name = f"{date_str}-{title.replace(' ', '-').lower()}.md"
    file_path = os.path.join("/Users/nhotin/Documents/GitHub/LTNhoTin.github.io/_posts", file_name)
    
    tags_str = '\n'.join([f"  - {tag}" for tag in tags])
    categories_str = '\n'.join([f"  - {cat}" for cat in categories])
    
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
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(file_content)
    
    try:
        subprocess.run(["git", "-C", "/Users/nhotin/Documents/GitHub/LTNhoTin.github.io", "add", file_path], check=True)
        subprocess.run(["git", "-C", "/Users/nhotin/Documents/GitHub/LTNhoTin.github.io", "commit", "-m", f"Add new post: {file_name}"], check=True)
        subprocess.run(["git", "-C", "/Users/nhotin/Documents/GitHub/LTNhoTin.github.io", "push"], check=True)
        messagebox.showinfo("Success", f"The blog post '{file_name}' has been created and pushed to GitHub successfully.")
    except subprocess.CalledProcessError as e:
        messagebox.showerror("Git Error", f"An error occurred while pushing the file to GitHub: {e}")
    
    title_text.delete("1.0", tk.END)
    excerpt_text.delete("1.0", tk.END)
    tags_text.delete("1.0", tk.END)
    categories_text.delete("1.0", tk.END)
    content_text.delete("1.0", tk.END)
    show_date_var.set(False)

root = tk.Tk()
root.title("Blog Post Creator")
root.configure(bg='#2e2e2e')

style = ttk.Style()
style.configure("TLabel", font=("Arial", 12), foreground="#ffffff", background='#2e2e2e')
style.configure("TButton", font=("Arial", 12), foreground="#ffffff", background="#007acc", padding=10)
style.configure("TEntry", font=("Arial", 12))
style.configure("TText", font=("Arial", 12))

# Create a frame for the form
form_frame = ttk.Frame(root, padding="20 20 20 20", style="TFrame")
form_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

# Function to create a common layout for labels and text widgets
def create_label_and_text(parent, label_text, row, height=2):
    ttk.Label(parent, text=label_text, style="TLabel").grid(row=row, column=0, sticky=tk.W, padx=5, pady=5)
    text_widget = tk.Text(parent, width=60, height=height, font=("Arial", 12), bg='#3e3e3e', fg='#ffffff', insertbackground='#ffffff')
    text_widget.grid(row=row, column=1, padx=5, pady=5)
    return text_widget

title_text = create_label_and_text(form_frame, "Title:", 0, height=2)
excerpt_text = create_label_and_text(form_frame, "Excerpt:", 1, height=2)
content_text = create_label_and_text(form_frame, "Content:", 2, height=20)
tags_text = create_label_and_text(form_frame, "Tags (comma-separated):", 3, height=2)
categories_text = create_label_and_text(form_frame, "Categories (comma-separated):", 4, height=2)

show_date_var = tk.BooleanVar(value=True)

submit_button = ttk.Button(form_frame, text="Submit", command=lambda: create_blog_post(show_date_var), style="TButton")
submit_button.grid(row=5, column=1, sticky=tk.E, padx=10, pady=10)

root.mainloop()
