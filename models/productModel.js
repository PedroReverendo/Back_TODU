const connection = require('../config/db');

const Product = {
    getAllProducts: (callback) => {
        const sql = 'SELECT * FROM productos';
        connection.query(sql, callback);
    },
    getAllCategories: (callback) => {
        const sql = 'SELECT * FROM categoria_de_productos';
        connection.query(sql, callback);
    },
    getAllAggregates: (callback) => {
        const sql = 'SELECT * FROM agregado';
        connection.query(sql, callback);
    }
};

module.exports = Product;
