const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Ruta para obtener el perfil del usuario
router.get('/all', userController.getAllUsers);
router.get('/profile', userController.getProfile);

module.exports = router;
// authMiddleware.verifyToken