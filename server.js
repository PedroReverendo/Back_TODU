const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db'); // Usa la conexión desde config/db.js

dotenv.config();

const app = express();

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes); // Asegúrate de usar el prefijo correcto para las rutas de autenticación

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Prefijo para las rutas de usuario

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes); // Ruta para los productos

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
