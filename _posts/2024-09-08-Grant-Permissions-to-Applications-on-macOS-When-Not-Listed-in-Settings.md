---
title: "How to Grant Permissions to Applications on macOS When Not Listed in Settings"
excerpt: "A detailed guide on how to use the tccplus tool to grant permissions to macOS applications that do not appear in System Preferences."
show_date: True
tags:
  - macOS
  - Permission Management
categories:
  - Tools
last_modified_at: 2024-09-08T10:00:00+07:00
author_profile: true
classes: wide 
toc: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/day.jpg
  caption: "Post created by NhoTin"
---
# How to Grant Permissions to Applications on macOS When Not Listed in Settings

## Introduction
On macOS, granting permissions to applications that access system resources like the **microphone**, **camera**, or **calendar** is typically done through the **System Preferences** interface. However, in some cases, certain applications may not appear in the permissions list, making it difficult to manually assign permissions. This guide explains how to use the **tccplus** tool to grant permissions to these applications quickly and effectively.

---

### Why Some Applications Don't Appear in System Preferences

Certain third-party applications, especially those installed manually or outside the App Store, may not register automatically in **System Preferences**. This can lead to situations where you need to grant permissions, but the application doesn't appear in the relevant settings panel. **tccplus** is a command-line tool that helps resolve this issue by allowing you to manually assign the necessary permissions.

---

## Detailed Instructions for Using tccplus

### Step 1: Download and Install **tccplus**

You can download the **tccplus** tool from GitHub via this link: [Download tccplus](https://github.com/jslegendre/tccplus). After downloading, extract the file and place it in a memorable location on your system, such as `~/Documents/permission`.

### Step 2: Prepare and Grant Execution Permissions to **tccplus**

Open Terminal and navigate to the folder where **tccplus** is stored by running the following command:

```bash
cd ~/Documents/permission
```

Next, grant execution permissions to the **tccplus** file:

```bash
chmod +x tccplus
```

### Step 3: Find the App ID of the Application

Each macOS application has a unique **App ID**. To grant permissions, you need to know the App ID of the application. Run the following command to find the App ID, replacing `"Application Name"` with the name of the application you want to grant permissions to (e.g., "NotchNook"):

```bash
osascript -e 'id of app "Application Name"'
```

The result will return the App ID, such as `lo.cafe.NotchNook`.

### Step 4: Grant Permissions to the Application

Once you have the App ID, you can grant permissions to the application. Here are some examples of how to grant permissions for different resources:

- **Grant Calendar Permission**:

```bash
./tccplus add Calendar lo.cafe.NotchNook
```

- **Grant Microphone Permission**:

```bash
./tccplus add Microphone lo.cafe.NotchNook
```

- **Grant Camera Permission**:

```bash
./tccplus add Camera lo.cafe.NotchNook
```

Simply replace `"lo.cafe.NotchNook"` with your application's App ID.

### Step 5: Check and Manage Permissions

After successfully granting permissions, you can check or remove permissions for the application using the following commands:

- **Check Application Permission**:

```bash
./tccplus check Calendar lo.cafe.NotchNook
```

- **Remove Application Permission**:

```bash
./tccplus remove Calendar lo.cafe.NotchNook
```

## Notes

1. **tccplus** requires administrator rights to grant permissions for applications.
2. Some permissions may require restarting the application to take effect after granting.