module.exports = function(router){

    var giohangController = require('../controllers/giohang.controller');
//http://localhost:4444/giohang/list
    router.get('/giohang/list', giohangController.getList);
//http://localhost:4444/giohang/detail/5
     router.get('/giohang/detail/:id', giohangController.getDetail);
//http://localhost:4444/giohang/add/?id_khachhang=1&trangthai=0&ngaylap=2022-04-8
    router.post('/giohang/add', giohangController.createGioHang);
//http://localhost:4444/giohang/delete/7
     router.delete('/giohang/delete/:id', giohangController.deleteGioHang);
//http://localhost:4444/giohang/update?id=5&trangthai=1
    router.put('/giohang/update', giohangController.updateGioHang);
}