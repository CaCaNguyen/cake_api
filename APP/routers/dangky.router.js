module.exports = function(router){

    var dangkyController = require('../controllers/dangky.controller');
//http://localhost:4444/dangky/list
    router.get('/dangky/list', dangkyController.getList);
//http://localhost:4444/dangky/detail/?email=banhcuon16062000@gmail.com&matkhau=1111
    router.get('/dangky/detail', dangkyController.getDetail);
//
   http://localhost:4444/dangky/add/?tenkhachhang=abc&email=abc@gmail.com&sdt=123456789&matkhau=123456 
   router.post('/dangky/add', dangkyController.createDangKy);
//http://localhost:4444/dangky/delete/8
    router.delete('/dangky/delete/:id', dangkyController.deleteDangKy);
//http://localhost:4444/dangky/update?id=1&sdt=0377226657&matkhau=1111
    router.put('/dangky/update', dangkyController.updateDangKy);
}