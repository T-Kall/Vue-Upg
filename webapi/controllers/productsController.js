const route = require('express').Router()
const productModel = require('../models/product/productModel')

route.post('/import', productModel.addProducts)
//http://localhost:9998/api/products/import


route.get('/', productModel.getProducts)
route.get('/:id', productModel.getProductById)

module.exports = route



