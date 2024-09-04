const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    Product.getAllProducts((err, results) => {
        if (err) {
            console.error('Error en la consulta de productos:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
};

exports.getAllCategories = (req, res) => {
    Product.getAllCategories((err, results) => {
        if (err) {
            console.error('Error en la consulta de categorías:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
};

exports.getAllAggregates = (req, res) => {
    Product.getAllAggregates((err, results) => {
        if (err) {
            console.error('Error en la consulta de agregados:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
};
