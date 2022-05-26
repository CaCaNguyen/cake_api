//khai bao
const db = require('../common/connect');

const Admin = function (admin){
    this.id = admin.id;
    this.username = admin.username;
    this.password = admin.password;
}

Admin.getAllList = function (result){
    db.query("SELECT * FROM tbl_admin", function(err, admin){
        if (err) {
            result(null);
            return;
        }
        else {
            result(admin);
        }
    }); 
}

Admin.getTaiKhoanById = function (data, result){
    console.log(data);
    db.query("SELECT * FROM tbl_admin WHERE username = ? AND password = ?", [data.username, data.password], function(err, admin){
      console.log(admin);
        if (err || admin.length == 0) {
            result(err,null);
        }else{
            result(true);
        }
    });
}


Admin.addAdmin = function (data, result){
    console.log(data);
    db.query("INSERT INTO tbl_admin (username, password) VALUE (?,?)", [data.username, data.password], function(err, admin){
        if(err){
            result(err,null);
        }else{
            result(data);
        }
    });
}

Admin.removeAdmin = function (username, result){
    db.query("DELETE FROM tbl_admin WHERE username = ?", username , function (err, admin){
        if (err || admin.length == 0) {
            result(err,null);
        }else{
            result("Xoa thanh cong du lieu co username = "+username+ "!");
        }
    });
}

Admin.update = function (data, result){
    console.log(data);
    db.query("UPDATE tbl_admin SET password = ? WHERE username = ?", [data.password, data.username ] , function(err,admin){
        //console.log(err);
         if(err ){
             result(err, null);
         }else{
         // console.log("created: ", { id: res.insertId, ...data});
            result(data);
        }
    });
}
module.exports = Admin;