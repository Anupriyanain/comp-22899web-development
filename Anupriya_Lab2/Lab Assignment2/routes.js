// routes/product.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

// Implement other CRUD routes (getById, update, delete)

module.exports = router;
