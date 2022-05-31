//khai bao
const db = require('../common/connect');

const ChiTietGioHang = function (chitietgiohang) {
    this.id = chitietgiohang.id;
    this.id_sanpham = chitietgiohang.id_sanpham;
    this.magiohang = chitietgiohang.magiohang;
    this.soluongmua = chitietgiohang.soluongmua;
}

ChiTietGioHang.getAllList = function (result){
    db.query("SELECT * FROM tbl_chitietgiohang", function(err, chitietgiohang){
        if (err) {
            result(errr,null);
            return;
        }
        else {
            result(chitietgiohang);
        }
    }); 
}

ChiTietGioHang.getChiTietGioHangByIdGioHang = function (magiohang, result){
    console.log(magiohang);
    db.query("SELECT `id_chitietgiohang`, `magiohang`,`tbl_sanpham`.`tensanpham` ,`soluongmua`,`size` FROM tbl_chitietgiohang INNER JOIN tbl_sanpham ON tbl_chitietgiohang.id_sanpham = tbl_sanpham.id_sanpham WHERE magiohang = ?", magiohang, function(err, chitietgiohang){
      console.log(chitietgiohang);
        if (err || chitietgiohang.length == 0) {
            result(err,null);
        }else{
            result(chitietgiohang);
        }
    });
}

ChiTietGioHang.addChiTietGioHang = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_chitietgiohang (id_sanpham, magiohang, soluongmua) VALUE (?,?,?)", 
    [data.id_sanpham, data.magiohang, data.soluongmua], 
    function(err, chitietgiohang){
        if(err){
            result(err,null);
        }else{
            result(data);
        }
    });
}

ChiTietGioHang.removeChiTietGioHang = function (id, result){
    db.query("DELETE FROM tbl_chitietgiohang WHERE id_chitietgiohang = ?", id , function (err, chitietgiohang){
        if (err || chitietgiohang.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id = "+id+ "!");
        }
    });
}

ChiTietGioHang.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_chitietgiohang SET id_sanpham = ?, soluongmua = ? WHERE id_chitietgiohang = ? ", [data.id_sanpham, data.soluongmua, data.id] , function(err, chitietgiohang){
        console.log(err);
         if(err ){
             result(err, null );
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}

module.exports = ChiTietGioHang;