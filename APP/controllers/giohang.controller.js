const { response } = require('express');

var GioHang = require('../models/giohang.model');

exports.getList = function (req, res){
    GioHang.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    GioHang.getGioHangByIdKhachHang(req.params.id, function (data){
        res.send({ results: data});
    });
}

exports.createGioHang = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.bodyParser);
    console.log('id_khachhang:', req.query.id_khachhang);
    console.log('trangthai:' , req.query.trangthai);
    console.log('ngaylap:', req.query.ngaylap);
    
    if (req.query.id_khachhang == null || req.query.ngaylap == null){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        GioHang.addGioHang(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteGioHang = function (req, res){
    var id = req.params.id;
    GioHang.removeGioHang(id, function(data){
        res.send({ results: data });
    });
}

exports.updateGioHang = function (req, res){
    console.log('request data:', req.query);
    console.log('id_giohang:', req.query.id);
    console.log('trangthai:' , req.query.trangthai);

    if(req.query.id == null || req.query.trangthai == null){
         res.send({'id': null, 'errorCode': res.errorCode });
         res.send({'trangthai': null, 'errorCode': res.errorCode});
        //res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        GioHang.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}