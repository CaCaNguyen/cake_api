//khai bao
const db = require('../common/connect');

const SanPham = function (sanpham){
    this.id = sanpham.id;
    this.tensanpham = sanpham.tensanpham;
    this.masp = sanpham.masp;
    this.giasp = sanpham.giasp;
    this.soluong = sanpham.soluong;
    this.hinhanh = sanpham.hinhanh;
    this.noidung = sanpham.noidung;
    this.id_danhmuc = sanpham.id_danhmuc;
}

SanPham.getAllList = function (result){
    db.query("SELECT `id_sanpham`, `tensanpham`, `masp`, `soluong`, `hinhanh`, `noidung`, `tbl_danhmuc`.`tendanhmuc` FROM `tbl_sanpham` LEFT JOIN `tbl_danhmuc` ON `tbl_sanpham`.`id_danhmuc` = `tbl_danhmuc`.`id_danhmuc`"
    , function(err, sanpham){
        if (err) {
            result(errr,null);
            return;
        }
        else {
            result(sanpham);
        }
    }); 
}

SanPham.getAllListTen = function (result){
    db.query("SELECT `id_sanpham`, `tensanpham` FROM `tbl_sanpham`", function(err, sanpham){
        if (err) {
            result(errr,null);
            return;
        }
        else {
            result(sanpham);
        }
    }); 
}

SanPham.getSanPhamByIdDanhMuc = function (id_danhmuc, result){
    console.log(id_danhmuc);
    db.query("SELECT `id_sanpham`, `tensanpham`, `masp`, `soluong`, `hinhanh`, `noidung`, `tendanhmuc` FROM `tbl_sanpham` INNER JOIN `tbl_danhmuc` ON `tbl_sanpham`.`id_danhmuc` = `tbl_danhmuc`.`id_danhmuc` WHERE `tbl_sanpham`.`id_danhmuc` = ?", 
    id_danhmuc, function(err, sanpham){
      console.log(sanpham);
        if (err || sanpham.length == 0) {
            result(err,null);
        }else{
            result(sanpham);
        }
    });
}

SanPham.addSanpham = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_sanpham (tensanpham, masp, soluong, hinhanh, noidung, id_danhmuc) VALUE (?,?,?,?,?,?)", 
    [data.tensanpham, data.masp, data.soluong, data.hinhanh, data.noidung, data.id_danhmuc, data.id_sanpham], 
    function(err, sanpham){
        if(err){
            result(err,null);
        }else{
            result(data);
        }
    });
}

SanPham.removeSanPham = function (id, result){
    db.query("DELETE FROM tbl_sanpham WHERE id_sanpham = ?", id , function (err, sanpham){
        if (err || sanpham.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id = "+id+ "!");
        }
    });
}

SanPham.update = function (data, result){
    console.log(data);
    db.query("UPDATE `tbl_sanpham` SET `tensanpham`=?,`masp`=?,`soluong`=?,`hinhanh`=?,`noidung`=?,`id_danhmuc`= ? WHERE `id_sanpham` =  ?", [data.tensanpham, data.masp, data.soluong, data.hinhanh, data.noidung, data.id_danhmuc, data.id] , function(err,sanpham){
        console.log(err);
         if(err ){
             result(err, null );
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}

module.exports = SanPham;