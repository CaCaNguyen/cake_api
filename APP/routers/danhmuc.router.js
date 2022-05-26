module.exports = function(router){

    var danhmucController = require('../controllers/danhmuc.controller');
//http://localhost:4444/danhmuc/list
    router.get('/danhmuc/list', danhmucController.getList);
//http://localhost:4444/danhmuc/detail/4
    router.get('/danhmuc/detail/:id', danhmucController.getDetail);
//http://localhost:4444/danhmuc/add/?tendanhmuc=abc
    router.post('/danhmuc/add', danhmucController.createDanhMuc);
//http://localhost:4444/danhmuc/delete/9
    router.delete('/danhmuc/delete/:id', danhmucController.deleteDanhMuc);
//http://localhost:4444/danhmuc/update?id=8&tendanhmuc=abcd
    router.put('/danhmuc/update', danhmucController.updateDanhMuc);
}