const express = require('express');
const { random, all, createWord } = require('../services/wordService');

const router = express.Router();

router.get('/', async (req, res) => {
    const words = await all();

    res.status(200).json({ success: true, data: words });
});

router.get('/:difficulty/random', async (req, res) => {
    const { difficulty } = req.params;
    const word = await random(difficulty);

    if (!difficulty) {
        return res.status(400).json({ success: false, message: 'La dificultad no existe' });
    }

    if (!word) {
        return res.status(404).json({ success: false, message: 'Palabra no encontrada' });
    }

    res.status(200).json({ success: true, data: word[0] });
});

router.post('/create', async (req, res) => {
    const { word, difficulty, time, clue } = req.body;

    if (!word) {
        return res.status(400).json({ success: false, message: 'Palabra no encontrada' });
    }

    if (!difficulty) {
        return res.status(400).json({ success: false, message: 'Dificultad no encontrada' });
    }

    if (!time) {
        return res.status(400).json({ success: false, message: 'Tiempo no encontrado' });
    }

    if (!clue) {
        return res.status(400).json({ success: false, message: 'Pista no encontrada' });
    }

    const newWord = await createWord(word, difficulty, time, clue);

    res.status(201).json({ success: true, message: 'Palabra creada correctamente.', data: newWord });
})

module.exports = router;
