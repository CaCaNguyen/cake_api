const { response } = require('express');

var Admin = require('../models/admin.model');

exports.getList = function (req, res){
    Admin.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    console.log('username:', req.query.username);
    console.log('password:', req.query.password);
    if (req.query.username == null || req.query.password  == null ){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        Admin.getTaiKhoanById(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.createAdmin = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.query);
    console.log('username:', req.query.username);
    console.log('password:', req.query.password);
    if (req.query.username == null || req.query.password== null ){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        Admin.addAdmin(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteAdmin = function (req, res){
    var username = req.query.username;
    Admin.removeAdmin(username, function(data){
        res.send({ results: data });
    });
}

exports.updateAdmin = function (req, res){
    console.log('request data:', req.query);
    console.log('username:', req.query.username);
    console.log('password:', req.query.password);

    if(req.query.username == null || req.query.password == null){
        res.send({'username': null, 'errorCode': res.errorCode });
        res.send({'password': null, 'errorCode': res.errorCode});
    }else{
        Admin.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}