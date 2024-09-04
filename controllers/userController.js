const User = require('../models/userModel');

// exports.getProfile = (req, res) => {
//     User.findByEmail(req.user.email, (err, results) => {
//         if (err) throw err;
//         res.json(results[0]);
//     });
// };
exports.getProfile = (req, res) => {
    User.findByEmail((err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
};
exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
};
