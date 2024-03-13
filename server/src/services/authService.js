const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

const JWT_SECRET = config.secret;

async function register(username, password) {
    const existingUser = await User.findByUsername(username);

    if (existingUser.length > 0) {
        throw new Error('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create(username, hashedPassword);
}

async function login(username, password) {
    const [user] = await User.findByUsername(username);

    if (!user) {
        throw new Error('El usuario no existe');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error('La contraseña es incorrecta');
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);

    return token;
}

module.exports = { register, login };
