const connection = require('../config/db');

const User = {
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM USUARIO WHERE email = ?';
        connection.query(sql, [email], callback);
    },
    create: (userData, callback) => {
        const sql = 'INSERT INTO USUARIO SET ?';
        connection.query(sql, userData, callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM USUARIO';
        connection.query(sql, callback);
    }
};

module.exports = User;
