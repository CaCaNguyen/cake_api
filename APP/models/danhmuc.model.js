//khai bao
const db = require('../common/connect');

const DanhMuc = function (danhmuc){
    this.id = danhmuc.id;
    this.tendanhmuc = danhmuc.tendanhmuc;
}

DanhMuc.getAllList = function (result){
    db.query("SELECT * FROM tbl_danhmuc", function(err, danhmuc){
        if (err) {
            result(null);
            return;
        }
        else {
            result(danhmuc);
        }
    }); 
}

DanhMuc.getDanhMucById = function (id, result){
    console.log(id);
    db.query("SELECT * FROM tbl_danhmuc WHERE id_danhmuc = ?", id, function(err, danhmuc){
      console.log(danhmuc);
        if (err || danhmuc.length == 0) {
            result(err,null);
        }else{
            result(danhmuc[0]);
        }
    });
}

DanhMuc.addDanhMuc = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_danhmuc (tendanhmuc) VALUE (?)", data, function(err, danhmuc){
        if(err){
            result(err,null);
        }else{
            result(data);
        }
    });
}

DanhMuc.removeDanhMuc = function (id, result){
    db.query("DELETE FROM tbl_danhmuc WHERE id_danhmuc = ?", id , function (err, danhmuc){
        if (err || danhmuc.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id = "+id+ "!");
        }
    });
}

DanhMuc.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_danhmuc SET tendanhmuc = ? WHERE id_danhmuc = ?", [data.tendanhmuc,data.id] , function(err,danhmuc){
        //console.log(err);
         if(err ){
             result(err, null);
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}
module.exports = DanhMuc;