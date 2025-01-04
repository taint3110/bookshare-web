BookShare
Ứng dụng cho thuê sách trực tuyến

1. Công nghệ sử dụng

- Công cụ: Visual Studio Code, GitHub Desktop, Docker, Digital Ocean, Terraform, MongoDB
- Ngôn ngữ lập trình: JavaScript, TypeScript
- Thư viện và Framework: React.js, Chakra-UI, Loopback 4, SCSS

2. Hướng dẫn cài đặt

2.1 Frontend
2.1.1. Clone repository:
git clone https://github.com/taint3110/bookshare-website.git
cd bookshare-website

2.1.2. Cài đặt dependencies:
npm install

2.1.3. Cấu hình môi trường:
Tạo file .env trong thư mục gốc và thêm:
REACT_APP_API_URL=http://localhost:3000

2.1.4. Chạy ứng dụng:
npm start
Ứng dụng sẽ chạy tại: http://localhost:3000

2.2Backend
2.2.1. Clone repository:
git clone https://github.com/taint3110/bookshare.git
cd bookshare

2.2.2. Cài đặt dependencies:
npm install

2.2.3. Cấu hình môi trường:
Tạo file .env trong thư mục gốc và thêm:
MONGO_URI=<Your MongoDB URI>
PORT=3000
JWT_SECRET=<Your Secret Key>

2.2.4. Khởi chạy server:
npm start
Server API sẽ chạy tại: http://localhost:3000

2.2.5. API Explorer:
Để truy cập tài liệu API, mở: http://localhost:3000/explorer

3. Tác giả
   STT | MSSV | Họ và tên | Lớp
   1 | 21521397 | Nguyễn Thành Tài | SE347.P12

- Sinh viên trường Đại học Công nghệ Thông tin, Đại học Quốc gia thành phố Hồ Chí Minh.

4. Giảng viên hướng dẫn

- Thầy Nguyễn Tấn Toàn, giảng viên Khoa Công Nghệ Phần Mềm, trường Đại học Công Nghệ Thông Tin, Đại học Quốc gia Thành phố Hồ Chí Minh.
