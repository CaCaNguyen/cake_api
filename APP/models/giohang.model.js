//khai bao
const db = require('../common/connect');

const GioHang = function (giohang) {
    this.id = giohang.id;
    this.id_khachhang = giohang.id_khachhang;
    this.trangthai = giohang.trangthai;
    this.ngaylap = giohang.ngaylap;
}

GioHang.getAllList = function (result){
    db.query("SELECT `id_giohang`, `tenkhachhang`,`trangthai`, `ngaylap`, `ngaynhanhang` FROM `tbl_giohang` INNER JOIN `tbl_dangky` ON `tbl_giohang`.`id_khachhang`=`tbl_dangky`.`id_dangky`", function(err, giohang){
        if (err) {
            result(errr,null);
            return;
        }
        else {
            result(giohang);
        }
    }); 
}

GioHang.getGioHangByIdKhachHang = function (id_khachhang, result){
    console.log(id_khachhang);
    db.query("SELECT `id_giohang`, `trangthai`, `ngaylap`,`id_sanpham`,`soluongmua` FROM `tbl_giohang` INNER JOIN `tbl_chitietgiohang` ON `tbl_giohang`.`id_giohang`= `tbl_chitietgiohang`.`magiohang` WHERE `id_khachhang`=?", 
    id_khachhang, function(err, giohang){
      console.log(giohang);
        if (err || giohang.length == 0) {
            result(err,null);
        }else{
            result(giohang);
        }
    });
}

GioHang.addGioHang = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_giohang (id_khachhang, trangthai, ngaynhanhang) VALUE (?,?,?)", 
    [data.id_khachhang, data.trangthai, data.ngaylap], 
    function(err, giohang){
        if(err){
            result(err,null);
        }else{
            result(data);
        }
    });
}

GioHang.removeGioHang = function (id, result){
    db.query("DELETE FROM tbl_giohang WHERE id_giohang = ?", id , function (err, giohang){
        if (err || giohang.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id = "+id+ "!");
        }
    });
}

GioHang.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_giohang SET trangthai = ? WHERE id_giohang = ? ", [data.trangthai, data.id] , function(err,giohang){
        console.log(err);
         if(err ){
             result(err, null );
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}

module.exports = GioHang;