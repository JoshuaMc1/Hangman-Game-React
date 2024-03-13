const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

const JWT_SECRET = config.secret;

async function getUserByUsername(username) {
    return await User.findByUsername(username);
}

async function getUserById(id) {
    return await User.findById(id);
}

async function user(jsonwebtoken) {
    const decoded = jwt.verify(jsonwebtoken, JWT_SECRET);

    if (!decoded) {
        throw new Error('Invalid token');
    }

    return await getUserById(decoded.id);
}

async function getUsersPoints() {
    return await User.getUsersPoints();
}

async function updateUserPoints(id, points) {
    const currentPoints = await User.getPoint(id);

    if (currentPoints) {
        points = currentPoints[0].points + points;
    }

    return await User.updatePoints(id, points);
}

module.exports = {
    getUserByUsername,
    getUserById,
    user,
    getUsersPoints,
    updateUserPoints
};
