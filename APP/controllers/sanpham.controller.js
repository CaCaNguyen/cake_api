const { response } = require('express');

var SanPham = require('../models/sanpham.model');

exports.getList = function (req, res){
    SanPham.getAllList(function (data){
        res.send({ results: data });
    });
}

exports.getTen = function (req, res){
    SanPham.getAllListTen(function (data){
        res.send({ results: data });
    });
}

exports.getDetail = function (req, res){
    SanPham.getSanPhamByIdDanhMuc(req.params.id, function (data){
        res.send({ results: data});
    });
}

exports.createSanPham = function (req, res){
    // var data = req.body;
    //     DanhMuc.addDanhMuc(data, function (response){
    //         res.send({ results: response});
    //     });
    console.log('request data: ', req.query);
    console.log('tensanpham:', req.query.tensanpham);
    console.log('masp:' , req.query.masp);
    console.log('soluong:', req.query.soluong);
    console.log('hinhanh:', req.query.hinhanh);
    console.log('noidung:', req.query.noidung);
    console.log('id_danhmuc:', req.query.id_danhmuc);

    if (req.query.tensanpham == null || req.query.id_danhmuc == null){
        res.send({ 'data': null, 'errorCode': res.errorCode });
    }else{
        SanPham.addSanpham(req.query, function(response){
            res.send({ result: response });
        });
    }
}

exports.deleteSanPham = function (req, res){
    var id = req.params.id;
    SanPham.removeSanPham(id, function(data){
        res.send({ results: data });
    });
}

exports.updateSanPham = function (req, res){
    console.log('request data:', req.query);
    console.log('id_sanpham:', req.query.id);
    console.log('tensanpham:', req.query.tensanpham);
    console.log('masp:' , req.query.masp);
    console.log('soluong:', req.query.soluong);
    console.log('hinhanh:', req.query.hinhanh);
    console.log('noidung:', req.query.noidung);
    console.log('id_danhmuc:', req.query.id_danhmuc);
    
    
    if(req.query.id == null || req.query.tensanpham == null || req.query.id_danhmuc == null){
        // res.send({'id': null, 'errorCode': res.errorCode });
        // res.send({'tensanpham': null, 'errorCode': res.errorCode});
        res.send({'id_sanpham': null, 'errorCode': res.errorCode });
        res.send({'tensanpham': null, 'errorCode': res.errorCode});
        res.send({'masp': null, 'errorCode': res.errorCode});
    }else{
        SanPham.update(req.query, function(response){
            res.send({ result: response });
        });
    }
}