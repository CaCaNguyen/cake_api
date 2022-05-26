//khai bao
const db = require('../common/connect');

const DangKy = function (dangky){
    this.id = dangky.id;
    this.tenkhachhang = dangky.tenkhachhang;
    this.email = dangky.email;
    this.sdt = dangky.sdt;
    this.matkhau = dangky.matkhau;
}

DangKy.getAllList = function (result){
    db.query("SELECT * FROM tbl_dangky", function(err, dangky){
        if (err) {
            result(null);
            return;
        }
        else {
            result(dangky);
        }
    }); 
}

DangKy.getTaiKhoanById = function (data, result){
    console.log(data);
    db.query("SELECT * FROM tbl_dangky WHERE email = ? AND matkhau = ?", [data.email, data.matkhau], function(err, dangky){
      console.log(dangky[0]);
        if (err || dangky.length == 0) {
            result(err,null);
        }else{ 
            var string=JSON.stringify(dangky);
            console.log('>> string: ', string );
            var json =  JSON.parse(string);
            console.log('>> json: ', json);

            result(json[0]);
        }
    });
}

DangKy.addDangKy = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_dangky (tenkhachhang, email, sdt, matkhau) VALUE (?,?,?,?)", [data.tenkhachhang, data.email, data.sdt, data.matkhau], function(err, dangky){
        if(err){
            result(err,null);
        }else{
            result(true);
        }
    });
}

DangKy.removeDangKy = function (id, result){
    db.query("DELETE FROM tbl_dangky WHERE id_dangky = ?", id , function (err, dangky){
        if (err || dangky.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co id = "+id+ "!");
        }
    });
}

DangKy.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_dangky SET sdt = ?, matkhau = ? WHERE id_dangky = ?", [data.sdt,data.matkhau,data.id] , function(err,dangky){
        //console.log(err);
         if(err ){
             result(err, null);
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}
module.exports = DangKy;