const express = require('express');
const { user, getUsersPoints, updateUserPoints } = require('../services/userService');

const router = express.Router();

router.get('/me', async (req, res) => {
    try {
        const userData = await user(req.headers.authorization);

        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: userData[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get('/points', async (req, res) => {
    try {
        const points = await getUsersPoints();

        res.status(200).json({ success: true, data: points });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post('/points/update', async (req, res) => {
    console.log(req.body);

    const { points } = req.body;

    const userData = await user(req.headers.authorization);

    const id = userData[0].id;

    if (!userData) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (!points) {
        return res.status(400).json({ success: false, message: 'Points not found' });
    }

    await updateUserPoints(id, points);

    res.status(200).json({ success: true, message: 'Points updated' });
});

module.exports = router;
