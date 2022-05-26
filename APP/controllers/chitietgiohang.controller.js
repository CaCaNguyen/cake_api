const { response } = require('express');

var ChiTietGioHang = require('../models/chitietgiohang.model');

exports.getList = function (req, res){
    ChiTietGioHang.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    ChiTietGioHang .getChiTietGioHangByIdGioHang(req.params.id, function (data){
        res.send({ results: data});
    });
}

exports.createChiTietGioHang = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.query);
    console.log('id_sanpham:', req.query.id_sanpham);
    console.log('magiohang:', req.query.magiohang);
    console.log('soluongmua', req.query.soluongmua);
    if (req.query.id_sanpham == null || req.query.magiohang == null|| req.query.soluongmua == null){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        ChiTietGioHang.addChiTietGioHang(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteChiTietGioHang = function (req, res){
    var id = req.params.id;
    ChiTietGioHang.removeChiTietGioHang(id, function(data){
        res.send({ results: data });
    });
}

exports.updateChiTietGioHang = function (req, res){
    console.log('request data:', req.query);
    console.log('id_chitietgiohang:', req.query.id);
    console.log('id_sanpham:', req.query.id_sanpham);
    console.log('soluongmua:', req.query.soluongmua);
    
    if(req.query.id == null || req.query.id_sanpham == null || req.query.soluongmua == null){
        res.send({'idchitietgiohang': null, 'errorCode': res.errorCode });
        res.send({'id_sanpham': null, 'errorCode': res.errorCode});
        res.send({'soluongmua': null, 'errorCode': res.errorCode});
    }else{
        ChiTietGioHang.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}