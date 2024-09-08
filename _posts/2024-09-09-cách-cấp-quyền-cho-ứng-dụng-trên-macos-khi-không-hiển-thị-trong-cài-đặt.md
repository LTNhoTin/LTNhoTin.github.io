---
title: "Cách cấp quyền cho ứng dụng trên macOS khi không hiển thị trong cài đặt"
excerpt: "Hướng dẫn chi tiết về cách sử dụng công cụ tccplus để cấp quyền cho ứng dụng trên macOS mà không hiển thị trong System Preferences."
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
  overlay_image: /assets/images/permission_banner.jpg
  caption: "Post created by NhoTin"
---

# Cách cấp quyền cho ứng dụng trên macOS khi không hiển thị trong cài đặt

## Giới thiệu
Trong hệ điều hành macOS, việc cấp quyền cho các ứng dụng sử dụng tài nguyên hệ thống như **microphone**, **camera**, **calendar**, v.v. thường được thực hiện qua phần **System Preferences**. Tuy nhiên, với một số ứng dụng hoặc trường hợp, việc cấp quyền thủ công qua giao diện người dùng có thể không đủ linh hoạt. Công cụ **tccplus** ra đời để giúp người dùng cấp quyền nhanh chóng và dễ dàng thông qua dòng lệnh trong terminal.

## Tại sao nên sử dụng tccplus?
- **Tiện lợi**: Không cần phải vào từng phần của cài đặt hệ thống để cấp quyền.
- **Linh hoạt**: Có thể quản lý nhiều loại quyền khác nhau như: Microphone, Camera, Calendar, Location...
- **Nhanh chóng**: Chỉ cần một vài dòng lệnh để hoàn thành.

## Thông tin về tccplus

tccplus là công cụ mở rộng từ **tccutil**, cho phép bạn cấp hoặc gỡ quyền truy cập các tính năng như Accessibility cho bất kỳ ứng dụng nào.

**Lưu ý**: Tôi không khuyến khích việc tự chỉnh sửa cơ sở dữ liệu hệ thống vì nếu xảy ra lỗi, bạn có thể gặp phải tình trạng boot-loop. Công cụ này sử dụng **TCC.framework** (chưa được công bố chính thức) để thực hiện các thay đổi giống như cách macOS thực hiện nội bộ.

Công cụ này yêu cầu **SIP** và **AMFI** phải bị vô hiệu hóa.

Hiện tại chỉ có thể thêm một dịch vụ hoặc tất cả (không được khuyến nghị) cùng một lúc. Tuy nhiên, sử dụng lệnh `reset All` là an toàn.

### Cú pháp sử dụng:

```bash
tccplus [add/reset] SERVICE [BUNDLE_ID]
```

### Các dịch vụ hỗ trợ:

- All
- Accessibility
- AddressBook
- AppleEvents
- Calendar
- Camera
- ContactsFull
- ContactsLimited
- DeveloperTool
- Facebook
- LinkedIn
- ListenEvent
- Liverpool
- Location
- MediaLibrary
- Microphone
- Motion
- Photos
- PhotosAdd
- PostEvent
- Reminders
- ScreenCapture
- ShareKit
- SinaWeibo
- Siri
- SpeechRecognition
- SystemPolicyAllFiles
- SystemPolicyDesktopFolder
- SystemPolicyDeveloperFiles
- SystemPolicyDocumentsFolder
- SystemPolicyDownloadsFolder
- SystemPolicyNetworkVolumes
- SystemPolicyRemovableVolumes
- SystemPolicySysAdminFiles
- TencentWeibo
- Twitter
- Ubiquity
- Willow

### Ví dụ sử dụng:

1. Tìm Bundle ID của ứng dụng:

```bash
grep 'BundleIdent' -A 1 /Applications/<APPLICATION NAME>/Contents/Info.plist
```

2. Sử dụng kết quả Bundle ID với lệnh tccplus:

```bash
user@iMac ~ % grep 'BundleIdent' -A 1 /Applications/Discord.app/Contents/Info.plist
<key>CFBundleIdentifier</key>
<string>com.hnc.Discord</string>

user@iMacc ~ % grep 'BundleIdent' -A 1 /Applications/zoom.us.app/Contents/Info.plist
<key>CFBundleIdentifier</key>
<string>us.zoom.xos</string>

user@iMac ~ % ./tccplus add Microphone com.hnc.Discord
Successfully added Microphone approval status for com.hnc.Discord
```

## Hướng dẫn chi tiết sử dụng

### Bước 1: Tải và cài đặt **tccplus**

Bạn có thể tải công cụ **tccplus** từ GitHub thông qua liên kết này: [Link tải tccplus](https://github.com/jslegendre/tccplus). Sau khi tải về, hãy giải nén và đặt nó vào một thư mục dễ nhớ trên máy, chẳng hạn như `~/Documents/permission`.

### Bước 2: Chuẩn bị và cấp quyền thực thi cho **tccplus**

Mở Terminal và chuyển đến thư mục chứa file **tccplus** bằng cách chạy lệnh sau:

```bash
cd ~/Documents/permission
```

Tiếp theo, cấp quyền thực thi cho file **tccplus**:

```bash
chmod +x tccplus
```

### Bước 3: Tìm ID của ứng dụng cần cấp quyền

Mỗi ứng dụng trên macOS đều có một **App ID** duy nhất. Để cấp quyền, bạn cần biết App ID của ứng dụng đó. Chạy lệnh sau để tìm App ID, thay thế `"Tên Ứng Dụng"` bằng tên của ứng dụng bạn muốn cấp quyền (ví dụ: "NotchNook"):

```bash
osascript -e 'id of app "Tên Ứng Dụng"'
```

Kết quả sẽ trả về ID của ứng dụng, ví dụ: `lo.cafe.NotchNook`.

### Bước 4: Cấp quyền cho ứng dụng

Sau khi có được App ID, bạn có thể cấp quyền cho ứng dụng. Dưới đây là một vài ví dụ về việc cấp quyền cho các tài nguyên khác nhau:

- **Cấp quyền lịch (Calendar)**:

```bash
./tccplus add Calendar lo.cafe.NotchNook
```

- **Cấp quyền microphone**:

```bash
./tccplus add Microphone lo.cafe.NotchNook
```

- **Cấp quyền camera**:

```bash
./tccplus add Camera lo.cafe.NotchNook
```

Bạn chỉ cần thay đổi `"lo.cafe.NotchNook"` bằng ID của ứng dụng của bạn.

### Bước 5: Kiểm tra và quản lý quyền

Sau khi cấp quyền thành công, bạn có thể kiểm tra hoặc xóa quyền đã cấp cho ứng dụng bằng các lệnh sau:

- **Kiểm tra quyền của một ứng dụng**:

```bash
./tccplus check Calendar lo.cafe.NotchNook
```

- **Xóa quyền của ứng dụng**:

```bash
./tccplus remove Calendar lo.cafe.NotchNook
```

## Lưu ý

1. **tccplus** yêu cầu quyền quản trị (administrator) để có thể cấp quyền cho các ứng dụng.
2. Một số quyền yêu cầu khởi động lại ứng dụng để có hiệu lực sau khi cấp quyền.

## Kết luận

**tccplus** là một công cụ mạnh mẽ và linh hoạt giúp người dùng macOS dễ dàng quản lý quyền truy cập của các ứng dụng thông qua terminal. Việc sử dụng tccplus giúp tiết kiệm thời gian và tăng cường tính chủ động trong việc cấp quyền cho các ứng dụng. Hãy thử trải nghiệm và tối ưu quy trình cấp quyền của bạn bằng công cụ này.
---
Hy vọng bài viết này sẽ giúp bạn hiểu rõ hơn về cách sử dụng **tccplus**. Nếu có bất kỳ thắc mắc nào, hãy để lại bình luận bên dưới!
