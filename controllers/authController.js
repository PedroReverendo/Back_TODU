const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
    const { nombre, email, contrasena } = req.body;
    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).send('Error en el servidor');

        if (results.length > 0) return res.status(400).send('Usuario ya registrado');

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(contrasena, salt);

        const newUser = {
            nombre,
            email,
            contrasena: hashedPassword
        };

        User.create(newUser, (err, result) => {
            if (err) return res.status(500).send('Error al registrar el usuario');
            res.status(201).send('Usuario registrado');
        });
    });
};

exports.login = (req, res) => {
    const { email, contrasena } = req.body;

    if (!email || !contrasena) {
        return res.status(400).send('Email y contraseña son requeridos');
    }

    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).send('Error en el servidor');

        if (results.length === 0) return res.status(404).send('Usuario no encontrado');

        const user = results[0];
        const isMatch = bcrypt.compareSync(contrasena, user.contrasena);
        if (!isMatch) return res.status(400).send('Contraseña incorrecta');

        const token = jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    });
};
