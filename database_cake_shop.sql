-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th5 26, 2022 lúc 04:46 PM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `database_cake_shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id_admin` int(11) NOT NULL,
  `username` char(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_admin`
--

INSERT INTO `tbl_admin` (`id_admin`, `username`, `password`) VALUES
(1, 'admin', '123'),
(3, 'abc', '123'),
(5, 'test', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_chitietgiohang`
--

CREATE TABLE `tbl_chitietgiohang` (
  `id_chitietgiohang` int(11) NOT NULL,
  `id_sanpham` int(11) NOT NULL,
  `magiohang` int(11) NOT NULL,
  `soluongmua` int(11) UNSIGNED NOT NULL,
  `size` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_chitietgiohang`
--

INSERT INTO `tbl_chitietgiohang` (`id_chitietgiohang`, `id_sanpham`, `magiohang`, `soluongmua`, `size`) VALUES
(7, 15, 11, 2, 'oval'),
(8, 18, 10, 1, '20cm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_dangky`
--

CREATE TABLE `tbl_dangky` (
  `id_dangky` int(11) NOT NULL,
  `tenkhachhang` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sdt` varchar(11) NOT NULL,
  `matkhau` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_dangky`
--

INSERT INTO `tbl_dangky` (`id_dangky`, `tenkhachhang`, `email`, `sdt`, `matkhau`) VALUES
(1, 'Nguyen Anh Thu', 'banhcuon16062000@gmail.com', '0377226657', '1111'),
(5, 's', 'tesst', 's', 's'),
(7, 'abc', 'abc@gmail.com', '123456789', '123456'),
(8, 'afeew', 'dssds@gmail.com', '94545', 'dffs'),
(9, ' thu', 'thu@gmail.com', '098776', 'thuddgg'),
(23, 'd,', 'eed', '33', 'ee'),
(24, 'dd', 'gg', '44', 'gg'),
(25, 'eee', 'dde', '4444', 'er'),
(26, 'frr', 'rr', '33377', 'eere'),
(27, 'ee', 'dsd', '733', 'fff'),
(28, 'dwdw', 'dwdwd', '3939', 'ddd');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_danhmuc`
--

CREATE TABLE `tbl_danhmuc` (
  `id_danhmuc` int(11) NOT NULL,
  `tendanhmuc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_danhmuc`
--

INSERT INTO `tbl_danhmuc` (`id_danhmuc`, `tendanhmuc`) VALUES
(1, 'Bánh Kem Bơ'),
(2, 'Bánh Kem Sữa Tươi'),
(3, 'Bánh Cheese Mouse'),
(4, 'Bánh Đặc Biệt'),
(5, 'Bánh Khuôn Oval'),
(6, 'Bánh Sinh Nhật Phong Đăng'),
(17, 'Bánh mặn');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_giohang`
--

CREATE TABLE `tbl_giohang` (
  `id_giohang` int(11) NOT NULL,
  `id_khachhang` int(11) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `ngaylap` date NOT NULL DEFAULT current_timestamp(),
  `ngaynhanhang` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_giohang`
--

INSERT INTO `tbl_giohang` (`id_giohang`, `id_khachhang`, `trangthai`, `ngaylap`, `ngaynhanhang`) VALUES
(10, 1, 0, '2022-05-22', '2022-05-24'),
(11, 7, 0, '2022-05-23', '2022-05-25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_kichthuoc`
--

CREATE TABLE `tbl_kichthuoc` (
  `id_size` int(11) NOT NULL,
  `size` char(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_kichthuoc`
--

INSERT INTO `tbl_kichthuoc` (`id_size`, `size`) VALUES
(1, '12cm'),
(2, '16cm'),
(3, '18cm'),
(4, '20cm'),
(5, 'oval'),
(6, 'cai');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_mota`
--

CREATE TABLE `tbl_mota` (
  `id_mota` int(10) UNSIGNED NOT NULL,
  `id_sanpham` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `gia_sp` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_mota`
--

INSERT INTO `tbl_mota` (`id_mota`, `id_sanpham`, `id_size`, `gia_sp`) VALUES
(1, 1, 1, 150000),
(2, 1, 2, 250000),
(3, 1, 3, 300000),
(4, 1, 4, 350000),
(6, 2, 1, 150000),
(7, 2, 2, 250000),
(8, 2, 3, 300000),
(9, 2, 4, 350000),
(10, 3, 1, 150000),
(11, 3, 2, 250000),
(12, 3, 3, 300000),
(13, 3, 4, 350000),
(14, 4, 3, 550000),
(15, 4, 4, 650000),
(16, 5, 1, 150000),
(17, 5, 2, 250000),
(18, 5, 3, 300000),
(19, 5, 4, 350000),
(20, 6, 2, 270000),
(21, 6, 4, 370000),
(22, 7, 2, 270000),
(23, 7, 4, 370000),
(24, 8, 2, 270000),
(25, 8, 4, 370000),
(27, 9, 2, 270000),
(28, 9, 4, 370000),
(29, 10, 2, 270000),
(30, 10, 4, 370000),
(31, 11, 2, 300000),
(32, 11, 4, 450000),
(33, 12, 4, 350000),
(34, 12, 5, 90000),
(35, 13, 2, 300000),
(36, 13, 4, 450000),
(37, 14, 5, 85000),
(38, 18, 3, 650000),
(39, 18, 4, 750000),
(40, 19, 3, 650000),
(41, 19, 4, 750000),
(47, 19, 4, 4444);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_sanpham`
--

CREATE TABLE `tbl_sanpham` (
  `id_sanpham` int(11) NOT NULL,
  `tensanpham` varchar(100) NOT NULL,
  `masp` varchar(5) NOT NULL,
  `soluong` int(11) UNSIGNED NOT NULL,
  `hinhanh` varchar(100) DEFAULT NULL,
  `noidung` text NOT NULL,
  `id_danhmuc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_sanpham`
--

INSERT INTO `tbl_sanpham` (`id_sanpham`, `tensanpham`, `masp`, `soluong`, `hinhanh`, `noidung`, `id_danhmuc`) VALUES
(1, 'Bánh hoa kem bơ', 'KB1', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/kb1.jpg', 'Nhận đặt theo yêu cầu.', 1),
(2, 'Bánh kem bơ Pháp', 'KB2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/kb2.png', 'Nhận đặt theo yêu cầu.', 1),
(3, 'Bánh kem bơ Hàn Quốc', 'KB3', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/kb3.jpg', 'Nhận đặt theo yêu cầu.', 1),
(4, 'Bánh kem sữa tươi tầng', 'BK2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/bk2.jpg', 'Bánh sử dụng cho tiệc cưới, liên hoan,... Nhận đặt theo yêu cầu. Giá inbox theo mẫu.', 2),
(5, 'Bánh kem sữa tươi', 'BK2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/bk1.png', 'Nhận đặt theo yêu cầu. Giá inbox theo mẫu.', 2),
(6, 'Tiramisu', 'CM1', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/cm1.jpg', 'Dòng bánh này có thể để tủ đông, xả đông khi dùng đến. Để ngăn mát ăn ngon từ 3 đến 4 ngày.', 3),
(7, 'Chanh Dây', 'CM2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/cm2.jpg', 'Dòng bánh này có thể để tủ đông, xả đông khi dùng đến. Để ngăn mát ăn ngon từ 3 đến 4 ngày.', 3),
(8, 'Chocolate', 'CM3', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/cm3.jpg', 'Dòng bánh này có thể để tủ đông, xả đông khi dùng đến. Để ngăn mát ăn ngon từ 3 đến 4 ngày.', 3),
(9, 'Matcha', 'CM4', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/cm4.jpg', 'Dòng bánh này có thể để tủ đông, xả đông khi dùng đến. Để ngăn mát ăn ngon từ 3 đến 4 ngày.', 3),
(10, 'Dâu', 'CM5', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/cm5.jpg', 'Dòng bánh này có thể để tủ đông, xả đông khi dùng đến. Để ngăn mát ăn ngon từ 3 đến 4 ngày.', 3),
(11, 'Reb VelVet', 'DB1', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/db1.jpg', 'Cream Cheese, Cacao & Coffee. Bánh này ko để đông lạnh chỉ để ngăn mát, để được 3 đến 5 ngày.', 4),
(12, 'Gato Flan', 'DB2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/db3.jpg', 'Gato Flan kiểu Sinh Nhật. \r\nBánh này ko để đông lạnh \r\nchỉ để ngăn mát,\r\nđể được 3 đến 5 ngày.', 4),
(13, 'Fraiser', 'DB3', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/db2-scaled.jpg', 'Dâu tươi & Vanilla Cream Pastissier. Bánh này ko để đông lạnh chỉ để ngăn mát. Để được 3 đến 5 ngày.', 4),
(14, 'Banana Bread Cake', 'OV1', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/ov2.jpg', 'Dùng ngay hoặc để ngăn mát 3-4 ngày.', 5),
(15, 'Brioche', 'OV2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/ov1.png', 'Dùng ngay hoặc để ngăn mát 3-4 ngày.', 5),
(16, 'JP Cotton Cheese Cake', 'OV3', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/ov3.jpg', 'Dùng ngay hoặc để ngăn mát 3-4 ngày.', 5),
(17, 'Gato Flan', 'OV4', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/ov4.jpg', 'Dùng ngay hoặc để ngăn mát 3-4 ngày.', 5),
(18, 'Bánh bé trai', 'PD1', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/pd1.jpg', 'Bánh này ko để đông lạnh chỉ để ngăn mát. Để được 3 đến 5 ngày.', 6),
(19, 'Bánh bé gái', 'PD2', 1, 'https://nhadepvuonxanh.com/wp-content/uploads/2022/01/pd2.jpg', 'Bánh này ko để đông lạnh chỉ để ngăn mát. Để được 3 đến 5 ngày.', 6);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Chỉ mục cho bảng `tbl_chitietgiohang`
--
ALTER TABLE `tbl_chitietgiohang`
  ADD PRIMARY KEY (`id_chitietgiohang`),
  ADD KEY `id_giohang` (`magiohang`),
  ADD KEY `id_sanpham` (`id_sanpham`);

--
-- Chỉ mục cho bảng `tbl_dangky`
--
ALTER TABLE `tbl_dangky`
  ADD PRIMARY KEY (`id_dangky`);

--
-- Chỉ mục cho bảng `tbl_danhmuc`
--
ALTER TABLE `tbl_danhmuc`
  ADD PRIMARY KEY (`id_danhmuc`);

--
-- Chỉ mục cho bảng `tbl_giohang`
--
ALTER TABLE `tbl_giohang`
  ADD PRIMARY KEY (`id_giohang`),
  ADD KEY `id_khachhang` (`id_khachhang`);

--
-- Chỉ mục cho bảng `tbl_kichthuoc`
--
ALTER TABLE `tbl_kichthuoc`
  ADD PRIMARY KEY (`id_size`);

--
-- Chỉ mục cho bảng `tbl_mota`
--
ALTER TABLE `tbl_mota`
  ADD PRIMARY KEY (`id_mota`),
  ADD KEY `id_size` (`id_size`),
  ADD KEY `id_sanpham` (`id_sanpham`);

--
-- Chỉ mục cho bảng `tbl_sanpham`
--
ALTER TABLE `tbl_sanpham`
  ADD PRIMARY KEY (`id_sanpham`),
  ADD KEY `id_danhmuc` (`id_danhmuc`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tbl_chitietgiohang`
--
ALTER TABLE `tbl_chitietgiohang`
  MODIFY `id_chitietgiohang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `tbl_dangky`
--
ALTER TABLE `tbl_dangky`
  MODIFY `id_dangky` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `tbl_danhmuc`
--
ALTER TABLE `tbl_danhmuc`
  MODIFY `id_danhmuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `tbl_giohang`
--
ALTER TABLE `tbl_giohang`
  MODIFY `id_giohang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `tbl_kichthuoc`
--
ALTER TABLE `tbl_kichthuoc`
  MODIFY `id_size` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `tbl_mota`
--
ALTER TABLE `tbl_mota`
  MODIFY `id_mota` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT cho bảng `tbl_sanpham`
--
ALTER TABLE `tbl_sanpham`
  MODIFY `id_sanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_chitietgiohang`
--
ALTER TABLE `tbl_chitietgiohang`
  ADD CONSTRAINT `id_giohang` FOREIGN KEY (`magiohang`) REFERENCES `tbl_giohang` (`id_giohang`),
  ADD CONSTRAINT `id_sanpham` FOREIGN KEY (`id_sanpham`) REFERENCES `tbl_sanpham` (`id_sanpham`);

--
-- Các ràng buộc cho bảng `tbl_giohang`
--
ALTER TABLE `tbl_giohang`
  ADD CONSTRAINT `id_khachhang` FOREIGN KEY (`id_khachhang`) REFERENCES `tbl_dangky` (`id_dangky`);

--
-- Các ràng buộc cho bảng `tbl_mota`
--
ALTER TABLE `tbl_mota`
  ADD CONSTRAINT `tbl_mota_ibfk_1` FOREIGN KEY (`id_sanpham`) REFERENCES `tbl_sanpham` (`id_sanpham`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_mota_ibfk_2` FOREIGN KEY (`id_size`) REFERENCES `tbl_kichthuoc` (`id_size`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tbl_sanpham`
--
ALTER TABLE `tbl_sanpham`
  ADD CONSTRAINT `id_danhmuc` FOREIGN KEY (`id_danhmuc`) REFERENCES `tbl_danhmuc` (`id_danhmuc`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
