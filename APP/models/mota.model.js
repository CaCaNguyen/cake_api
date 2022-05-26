//khai bao
const db = require('../common/connect');

const MoTa = function (mota){
    this.id_sanpham = mota.id_sanpham;
    this.id_size = mota.id_size;
}

MoTa.getAllList = function (result){
    db.query("SELECT `tbl_mota`.`id_mota`, `tbl_sanpham`.`tensanpham`,`tbl_kichthuoc`.`size` ,`tbl_mota`.`gia_sp` FROM `tbl_mota` INNER JOIN `tbl_sanpham` ON `tbl_mota`.`id_sanpham` = `tbl_sanpham`.`id_sanpham` JOIN `tbl_kichthuoc` ON `tbl_mota`.`id_size` = `tbl_kichthuoc`.`id_size`", 
    function(err, mota){
        if (err) {
            result(null);
            return;
        }
        else {
            result(mota);
        }
    }); 
}

//lay ten size tu id sanpham
MoTa.getMoTaByIdSanPham = function (id, result){
    console.log(id);
    db.query("SELECT size, gia_sp FROM tbl_mota INNER JOIN tbl_kichthuoc ON tbl_mota.id_size = tbl_kichthuoc.id_size WHERE id_sanpham = ?", 
    id, function(err, mota){
      console.log(mota);
        if (err || mota.length == 0) {
            result(err,null);
        }else{
            result(mota);
        }
    });
}

MoTa.getGiaById = function (data, result){
    console.log(id);
    db.query("SELECT gia_sp FROM tbl_mota WHERE id_sanpham = ? AND id_size = ?", [data.id_sanpham, data.id_size], function(err, mota){
      console.log(mota);
        if (err || mota.length == 0) {
            result(err,null);
        }else{
            result(mota);
        }
    });
}

MoTa.addMoTa = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_mota (id_sanpham, id_size, gia_sp) VALUE (?,?,?)", 
    [data.id_sanpham, data.id_size, data.gia_sp], function(err, mota){
        if(err){
            result(err,null);
        }else{
            result(data);
        }
    });
}


MoTa.removeMoTa = function (id, result){
    db.query("DELETE FROM `tbl_mota` WHERE `id_mota`=?", id , function (err, mota){
        if (err || mota.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id_mota = "+ id);
        }
    });
}

MoTa.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_mota SET id_sanpham = ?, id_size = ?, gia_sp= ?  WHERE id_mota=?",
    [ data.id_sanpham, data.id_size , data.gia_sp, data.id] , function(err,mota){
        //console.log(err);
         if(err ){
             result(err, null);
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}
module.exports = MoTa;

// SELECT * FROM `tbl_sanpham` 
// INNER JOIN `tbl_mota` 
// INNER JOIN `tbl_kichthuoc` 
// ON `tbl_sanpham`.`id_sanpham` = `tbl_mota`.`id_sanpham` 
// AND `tbl_mota`.`id_size`=`tbl_kichthuoc`.`id_size` 
// WHERE tbl_sanpham.id_sanpham=1;

// SELECT `tbl_sanpham`.`tensanpham`,`tbl_kichthuoc`.`size` ,`tbl_mota`.`gia_sp` 
// FROM `tbl_mota` INNER JOIN `tbl_sanpham` ON `tbl_mota`.`id_sanpham` = `tbl_sanpham`.`id_sanpham` JOIN `tbl_kichthuoc` ON `tbl_mota`.`id_size` = `tbl_kichthuoc`.`id_size`