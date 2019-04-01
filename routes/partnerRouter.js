const express = require('express');
const app = express();
const partnerRouter = express.Router();
const Partner = require('../models/partner');

  
partnerRouter.route('/partner').post(function (req, res) {
    const DataPartner = new Partner(req.body);
    console.log(DataPartner);
    DataPartner.save()
    res.redirect('/home/partner');
});

partnerRouter.route('/partner-search').post(function (req, res) {
  var search = req.body.searchpartner;
  console.log(search);
  if(search == ""){
      res.redirect('/home/partner');
  }else{
    Partner.find({ID_partner:search},function (err, partner) {
      if(partner == "") {
        res.render('บันทึกข้อมูลคู่ค้า',{partner: partner, notfound: true }); 
      }else{
        res.render('บันทึกข้อมูลคู่ค้า',{partner: partner, notfound: false }); 
      }
    });
  }
});

partnerRouter.route('/partner').get(function (req, res) {
  Partner.find(function (err, partner) {
    res.render('บันทึกข้อมูลคู่ค้า',{partner: partner, notfound: false }); 
  });
});

partnerRouter.route('/').get(function(req, res) {
    res.render('หน้าหลัก');
});

module.exports = partnerRouter;