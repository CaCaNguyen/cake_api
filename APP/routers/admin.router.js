module.exports = function(router){

    var adminController = require('../controllers/admin.controller');
//http://localhost:4444/admin/list
    router.get('/admin/list', adminController.getList);
//http://localhost:4444/admin/detail/4
    router.get('/admin/detail/', adminController.getDetail);
//http://localhost:4444/admin/add/?username=test&password=test
    router.post('/admin/add', adminController.createAdmin);
//http://localhost:4444/admin/delete/?username=7
    router.delete('/admin/delete/', adminController.deleteAdmin);
//http://localhost:4444/admin/update?username=test&password=123
     router.put('/admin/update', adminController.updateAdmin);
}