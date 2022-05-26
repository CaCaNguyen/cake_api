const { response } = require('express');

var DanhMuc = require('../models/danhmuc.model');

exports.getList = function (req, res){
    DanhMuc.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    DanhMuc.getDanhMucById(req.params.id, function (data){
        res.send({ results: data});
    });
}

exports.createDanhMuc = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.query);
    console.log('tendanhmuc:', req.query.tendanhmuc);
    if (req.query.tendanhmuc == ''){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        DanhMuc.addDanhMuc(req.query.tendanhmuc, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteDanhMuc = function (req, res){
    var id = req.params.id;
    DanhMuc.removeDanhMuc(id, function(data){
        res.send({ results: data });
    });
}

exports.updateDanhMuc = function (req, res){
    console.log('request data:', req.query);
    console.log('id_danhmuc:', req.query.id);
    console.log('tendanhmuc:', req.query.tendanhmuc);
    
    if(req.query.id == null || req.query.tendanhmuc == ''){
        res.send({'id': null, 'errorCode': res.errorCode });
        res.send({'tendanhmuc': null, 'errorCode': res.errorCode});
    }else{
        DanhMuc.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}