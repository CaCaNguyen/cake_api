module.exports = function(router){

    var motaController = require('../controllers/mota.controller');
//http://localhost:4444/mota/list
    router.get('/mota/list', motaController.getList);
//http://localhost:4444/mota/detail/1
    router.get('/mota/detail/:id', motaController.getDetail);
//http://localhost:4444/mota/detail/1
    router.get('/mota/giasp/:id_sanpham/:id_size', motaController.getGiaSanPham);
//http://localhost:4444/mota/add/?id_sanpham=8&id_size=2&gia_sp=44444
    router.post('/mota/add', motaController.createMoTa);
//http://localhost:4444/mota/delete/3
    router.delete('/mota/delete/:id', motaController.deleteMoTa);
//http://localhost:4444/mota/update?id_sanpham=18&id_size_old=3&id_size_new=4
     router.put('/mota/update', motaController.updateMoTa);
}