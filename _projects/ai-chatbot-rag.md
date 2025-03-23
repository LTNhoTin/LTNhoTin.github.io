---
layout: project
title: "AI Chatbot với RAG"
excerpt: "Một chatbot có khả năng trả lời dựa trên tài liệu PDF tải lên bởi người dùng, sử dụng LangChain và FAISS để tìm kiếm ngữ nghĩa."
date: 2024-03-23
image: /assets/images/projects/ai-chatbot-rag.jpg
technologies:
  - Python
  - LangChain
  - FAISS
  - FastAPI
  - React
github: https://github.com/yourusername/ai-chatbot-rag
demo: https://ai-chatbot-rag-demo.com
features:
  - Tải lên và xử lý tài liệu PDF
  - Tìm kiếm ngữ nghĩa với FAISS
  - Giao diện người dùng thân thiện
  - API RESTful với FastAPI
---

## Mục tiêu của dự án

Xây dựng một chatbot thông minh có khả năng trả lời câu hỏi dựa trên tài liệu PDF được tải lên. Chatbot sử dụng kỹ thuật RAG (Retrieval Augmented Generation) để tìm kiếm thông tin liên quan từ tài liệu và tạo câu trả lời phù hợp.

## Cách thực hiện

1. **Xử lý tài liệu**:
   - Sử dụng PyPDF2 để đọc và trích xuất văn bản từ PDF
   - Chia văn bản thành các đoạn nhỏ để dễ dàng tìm kiếm
   - Lưu trữ các đoạn văn bản trong vector database (FAISS)

2. **Tìm kiếm ngữ nghĩa**:
   - Sử dụng LangChain để tạo embeddings cho văn bản
   - FAISS để tìm kiếm các đoạn văn bản liên quan
   - Kết hợp kết quả tìm kiếm với prompt để tạo câu trả lời

3. **Backend API**:
   - FastAPI để xây dựng RESTful API
   - Xử lý file upload và lưu trữ
   - Quản lý phiên chat và lịch sử

4. **Frontend**:
   - React với TypeScript
   - Giao diện chat thân thiện
   - Hiển thị tài liệu và kết quả tìm kiếm

## Những gì học được

- Cách sử dụng LangChain để xây dựng ứng dụng AI
- Kỹ thuật RAG và vector search với FAISS
- Xây dựng API với FastAPI
- Quản lý state và xử lý file trong React
- Deploy ứng dụng AI lên cloud 