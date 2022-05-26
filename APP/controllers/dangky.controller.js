const { response } = require('express');

var DangKy = require('../models/dangky.model');

exports.getList = function (req, res){
    DangKy.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    console.log('email:', req.query.email);
    console.log('matkhau:', req.query.matkhau);
    if (req.query.email == null || req.query.matkhau  == null ){
        res.send({ result: null, errorCode: 403 });
    }
    else{
        DangKy.getTaiKhoanById(req.query, function(response){
            if(response === undefined)
                    res.send({ result: null, errorCode: 403 });
             else res.send({ result: response ,errorCode: 0 });
        });
    }
}

exports.createDangKy = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.query);
    console.log('tenkhachhang:', req.query.tenkhachhang);
    console.log('email:', req.query.email);
    console.log('sdt:', req.query.sdt);
    console.log('matkhau:', req.query.matkhau);
    if (req.query.tenkhachhang == "" || req.query.matkhau  == "" || req.query.email == "" || req.query.sdt == ""){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        DangKy.addDangKy(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteDangKy = function (req, res){
    var id = req.params.id;
    DangKy.removeDangKy(id, function(data){
        res.send({ results: data });
    });
}

exports.updateDangKy = function (req, res){
    console.log('request data:', req.query);
    console.log('id_dangky:', req.query.id);
    console.log('tenkhachhang:', req.query.tenkhachhang);
    
    if(req.query.id == null || req.query.sdt == null || req.query.matkhau== null){
        res.send({'id': null, 'errorCode': res.errorCode });
        res.send({'tendanhmuc': null, 'errorCode': res.errorCode});
    }else{
        DangKy.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}