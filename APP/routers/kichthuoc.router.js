module.exports = function(router){

    var kichthuocController = require('../controllers/kichthuoc.controller');
//http://localhost:4444/kichthuoc/list
    router.get('/kichthuoc/list', kichthuocController.getList);
//hhttp://localhost:4444/kichthuoc/detail/18cm
    router.get('/kichthuoc/detail/:size', kichthuocController.getDetail);
//http://localhost:4444/kichthuoc/add/?size=30cm
    router.post('/kichthuoc/add', kichthuocController.createSize);
//http://localhost:4444/kichthuoc/delete/10
    router.delete('/kichthuoc/delete/:id', kichthuocController.deleteSize);
//http://localhost:4444/kichthuoc/update?id=3&size=26cm
     router.put('/kichthuoc/update', kichthuocController.updateSize);
}