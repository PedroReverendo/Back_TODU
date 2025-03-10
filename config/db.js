const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Asegúrate de que dotenv cargue las variables de entorno

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.message);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

module.exports = connection;
