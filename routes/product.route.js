const express = require("express");
const Product = require('../models/product.model');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct,} = require('../controllers/product.controller');

router.get('/', getProducts); // Show all Products
router.get('/:id', getProduct); // Show product with this id

router.post('/', createProduct); // Create a new Product

router.put('/:id', updateProduct); // Update a Product

router.delete('/:id', deleteProduct) // Delete a Product

module.exports = router;