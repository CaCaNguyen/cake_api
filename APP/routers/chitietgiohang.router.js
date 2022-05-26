module.exports = function(router){

    var chitietgiohangController = require('../controllers/chitietgiohang.controller');
//http://localhost:4444/chitietgiohang/list
    router.get('/chitietgiohang/list', chitietgiohangController.getList);
//http://localhost:4444/chitietgiohang/detail/3
    router.get('/chitietgiohang/detail/:id', chitietgiohangController.getDetail);
//http://localhost:4444/chitietgiohang/add/?id_sanpham=4&magiohang=1&soluongmua=10
    router.post('/chitietgiohang/add', chitietgiohangController.createChiTietGioHang);
//http://localhost:4444/chitietgiohang/delete/6
    router.delete('/chitietgiohang/delete/:id', chitietgiohangController.deleteChiTietGioHang);
//http://localhost:4444/chitietgiohang/update?id=4&id_sanpham=3&soluongmua=3
    router.put('/chitietgiohang/update', chitietgiohangController.updateChiTietGioHang);
}