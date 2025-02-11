---
title: "Guide to File Sharing Between Two Laptops Using Python HTTP Server"
excerpt: "Learn how to quickly share files between two laptops on the same local network using a simple Python HTTP Server."
show_date: True
tags:
  - Python
  - File Sharing
  - Networking
  - HTTP Server
  - Local Network
  - Command Line
categories:
  - Tech Guides
  - Networking
  - Python Tutorials
last_modified_at: 2025-02-11T10:00:00+07:00
author_profile: true
classes: wide
toc: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/file-sharing.jpg
  caption: "Post created by NhoTin"
---

When you need to share files between two laptops on the same local network (LAN or WiFi), many people think of using USB drives, email, or cloud services like Google Drive. However, there is a quick and efficient way to do this without third-party software: using Python to create an HTTP Server. This guide will show you how to do it easily.


## 1. Prerequisites
This method applies when:
- Both laptops are connected to the same network (LAN or WiFi).
- The sender laptop has Python installed (most modern operating systems have Python pre-installed, especially Linux and macOS).
- The receiver can access a web browser or use `wget`/`curl` to download files.

## 2. Find the IP Address of the Sender Laptop
On **Laptop A** (the sender), check its local IP address by running the following command based on your operating system:
- **Windows** (run in Command Prompt or PowerShell):
  ```powershell
  ipconfig
  ```
- **Linux/macOS**:
  ```bash
  ip a
  ```
You will see the IP address in the range **192.168.x.x** or **10.x.x.x**. For example, suppose the IP address of Laptop A is **192.168.1.100**.

## 3. Start Python HTTP Server on Laptop A
Navigate to the folder containing the files you want to share and run the command:
```bash
cd /path/to/directory
python3 -m http.server 8000 --bind 0.0.0.0
```
Explanation:
- `8000`: The port on which the server will run (you can change this).
- `--bind 0.0.0.0`: Allows all devices in the network to connect.

Once executed, Python will create a simple HTTP server, and files in the directory will be accessible from other devices.

## 4. Access the Server from Laptop B
On **Laptop B**, open a web browser and enter:
```
http://192.168.1.100:8000
```
To download a file from the terminal, use `wget` or `curl`:
```bash
wget http://192.168.1.100:8000/filename
```
or:
```bash
curl -O http://192.168.1.100:8000/filename
```

## 5. Troubleshooting Connection Issues
If Laptop B cannot connect to the server, check the following:
- **Is the firewall on Laptop A blocking connections?** On Windows, open Command Prompt (admin) and run:
  ```powershell
  netsh advfirewall firewall add rule name="Python HTTP" dir=in action=allow protocol=TCP localport=8000
  ```
  On Linux/macOS:
  ```bash
  sudo ufw allow 8000
  sudo ufw enable
  ```
- **Are Laptop A and Laptop B on the same subnet?** Run `ping 192.168.1.100` from Laptop B to check network connectivity.
- **Is the router blocking communication between LAN and WiFi?** Some routers isolate WiFi and LAN devices. If so, you need to disable this setting in the router configuration.

## 6. When the Laptops Are Not on the Same Network
If the two laptops are not on the same network (e.g., one is using WiFi, the other is on mobile data), you can:
- **Use a public IP address**: If you have a static IP, you can access the server by opening ports on the router.
- **Use services like ngrok or ZeroTier**: These provide solutions for exposing an HTTP server over the internet.

## 7. Conclusion
Sharing files between two devices on the same network has never been easier with Python HTTP Server. This method is fast, requires no additional software, and is very useful for temporary file sharing. Try it today and leverage the power of the terminal to work more efficiently!
