module.exports = function(router){

    var sanphamController = require('../controllers/sanpham.controller');
//http://localhost:4444/sanpham/list
    router.get('/sanpham/list', sanphamController.getList);
    //http://localhost:4444/sanpham/listten
    router.get('/sanpham/ten', sanphamController.getTen);
//http://localhost:4444/sanpham/detail/4
    router.get('/sanpham/detail/:id', sanphamController.getDetail);
//http://localhost:4444/sanpham/add/?tensanpham=abc&masp=a&giasp=333&soluong=3&hinhanh=fffaf&noidung=afafaf&id_danhmuc=5
    router.post('/sanpham/add', sanphamController.createSanPham);
//http://localhost:4444/sanpham/delete/22
    router.delete('/sanpham/delete/:id', sanphamController.deleteSanPham);
//http://localhost:4444/sanpham/update?id=21&tensanpham=test&masp=aa&soluong=3&hinhanh=a&noidung=sdddj&id_danhmuc=4
    router.put('/sanpham/update', sanphamController.updateSanPham);
}