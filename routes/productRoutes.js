const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para obtener todos los productos
router.get('/products', productController.getAllProducts);

// Ruta para obtener todas las categorías
router.get('/categories', productController.getAllCategories);

// Ruta para obtener todos los agregados
router.get('/aggregates', productController.getAllAggregates);

module.exports = router;
