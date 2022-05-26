//khoi tao cho express
var express = require('express');
var app = express();

//cau hinh bodyParser
var bodyParser = require('body-parser');

//.URL
app.use(bodyParser.urlencoded({extended: true}));
//.JSON
app.use(bodyParser.json());

//app.use(_AuthMiddleWare.isAuth);

//goi duong dan can truy cap
require('./APP/routers/danhmuc.router')(app);
require('./APP/routers/sanpham.router')(app);
require('./APP/routers/kichthuoc.router')(app);
require('./APP/routers/mota.router')(app);
require('./APP/routers/giohang.router')(app);
require('./APP/routers/chitietgiohang.router')(app);
require('./APP/routers/admin.router')(app);
require('./APP/routers/dangky.router')(app);


app.listen(4444, function(){
    console.log('server listening on http://localhost:4444');
})