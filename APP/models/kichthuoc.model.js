//khai bao
const db = require('../common/connect');

const KichThuoc = function (kichthuoc) {
    this.id = kichthuoc.id;
    this.size = kichthuoc.size;
}

KichThuoc.getAllList = function (result) {
    db.query("SELECT * FROM tbl_kichthuoc", function (err, kichthuoc) {
        if (err) {
            result(null);
            return;
        }
        else {
            result(kichthuoc);
        }
    });
}

KichThuoc.getSizeByTenSize = function (size, result) {
    console.log(size);
    db.query("SELECT * FROM tbl_kichthuoc WHERE size = ?", size, function (err, kichthuoc) {
        console.log(size);
        if (err || kichthuoc.length == 0) {
            result(err, null);
        } else {
            result(kichthuoc[0]);
        }
    });
}

KichThuoc.addSize = function (size, result){
    console.log(size);
    db.query("INSERT INTO tbl_kichthuoc (size) VALUE (?)", size, function(err, kichthuoc){
        if(err){
            result(err,null);
        }else{
            result(size);
        }
    });
}

KichThuoc.removeSize = function (id, result){
    db.query("DELETE FROM tbl_kichthuoc WHERE id_size = ?", id , function (err, size){
        if (err || size.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id = "+id+ "!");
        }
    });
}

KichThuoc.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_kichthuoc SET size = ? WHERE id_size = ?", [data.size, data.id] , function(err,kichthuoc){
        //console.log(err);
         if(err){
             result(err, null);
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}
module.exports = KichThuoc;