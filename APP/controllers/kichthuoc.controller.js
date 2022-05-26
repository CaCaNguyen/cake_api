const { response } = require('express');

var KichThuoc = require('../models/kichthuoc.model');

exports.getList = function (req, res){
    KichThuoc.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    KichThuoc.getSizeByTenSize(req.params.size, function (data){
        res.send({ results: data});
    });
}

exports.createSize = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.query);
    console.log('size:', req.query.size);
    if (req.query.size == null){
        res.send({ 'size': null, 'errorCode': res.errorCode });
    }else{
        KichThuoc.addSize(req.query.size, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteSize = function (req, res){
    var id = req.params.id;
    KichThuoc.removeSize(id, function(data){
        res.send({ results: data });
    });
}

exports.updateSize = function (req, res){
    console.log('request data:', req.query);
    console.log('id_size:', req.query.id);
    console.log('size:', req.query.size);
    
    if(req.query.id == null || req.query.size == null){
        res.send({'id_size': null, 'errorCode': res.errorCode });
        res.send({'size': null, 'errorCode': res.errorCode});
    }else{
        KichThuoc.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}