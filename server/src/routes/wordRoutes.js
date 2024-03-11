const express = require('express');
const { random, all } = require('../services/wordService');

const router = express.Router();

router.get('/', async (req, res) => {
    const words = await all();

    res.status(200).json({ success: true, data: words });
});

router.get('/:difficulty/random', async (req, res) => {
    const { difficulty } = req.params;
    const word = await random(difficulty);

    if (!difficulty) {
        return res.status(400).json({ success: false, message: 'Difficulty not found' });
    }

    if (!word) {
        return res.status(404).json({ success: false, message: 'Word not found' });
    }

    res.status(200).json({ success: true, data: word[0] });
});

module.exports = router;
