const express = require('express');
const { register, login } = require('../services/authService');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        await register(username, password);

        res.status(201).json({ success: true, message: 'El usuario ha sido creado con éxito.' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await login(username, password);

        res.status(200).json({ success: true, token, message: 'El usuario ha iniciado sesión con éxito.' });
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
});

module.exports = router;
