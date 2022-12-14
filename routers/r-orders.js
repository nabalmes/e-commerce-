const {Orders} = require('../models/orders');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res)=>{
    const ordersList = await Orders.find();
 
    if(!ordersList){
     res.status(500).json({
         success: false
     })
    }
    res.send(ordersList)
 })
 
//  router.post(`/`, (req, res)=> {
//      const product = new Product({
//          name: req.body.name,
//          image: req.body.image,
//          countInStock: req.body.countInStock
//      })
 
//      product.save().then((createdProduct=> {
//          res.status(201).json(createdProduct)
//      })).catch((err)=>{
//          res.status(500).json({
//              error: err,
//              success: false
//          })
//      })
//  })

 module.exports =router;