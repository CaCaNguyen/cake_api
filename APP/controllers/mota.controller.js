const { response } = require('express');

var MoTa = require('../models/mota.model');

exports.getList = function (req, res){
    MoTa.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    MoTa.getMoTaByIdSanPham(req.params.id, function (data){
        res.send({ results: data});
    });
}

exports.getGiaSanPham = function (req, res){
    console.log('id_sanpham:', req.query.id_sanpham);
    console.log('id_size:', req.query.id_size);
    MoTa.getGiaById(req.query, function (data){
        res.send({ results: data});
    });
}

exports.createMoTa = function (req, res){
    console.log('request data: ', req.query);
    console.log('id_sanpham:', req.query.id_sanpham);
    console.log('id_size:', req.query.id_size);
    console.log('gia_sp:', req.query.gia_sp);
    if (req.query.id_sanpham == null || req.query.id_size == null || req.query.gia_sp == null){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        MoTa.addMoTa(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteMoTa = function (req, res){
    var id = req.params.id;
    MoTa.removeMoTa(id, function(data){
        res.send({ results: data });
    });
}


exports.updateMoTa = function (req, res){
    console.log('request data:', req.query);
    console.log('id_mota:', req.query.id);
    console.log('id_sanpham:', req.query.id_sanpham);
    console.log('id_size:', req.query.id_size);
    console.log('gia_sp:', req.query.gia_sp);
    
    
    if(req.query.id == null || req.query.id_sanpham == null || req.query.id_size == null){
        // res.send({'id': null, 'errorCode': res.errorCode });
        // res.send({'tensanpham': null, 'errorCode': res.errorCode});
        res.send({'id_mota': null, 'errorCode': res.errorCode });
        res.send({'id_sanpham': null, 'errorCode': res.errorCode});
        res.send({'id_size': null, 'errorCode': res.errorCode});
        res.send({'gia_sp': null, 'errorCode': res.errorCode});
    }else{
        MoTa.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}