const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addProduct, updateProductById, deleteById } = require("../controllers/product.controller")

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteById);

module.exports = router;