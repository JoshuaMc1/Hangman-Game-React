const db = require('../db');

class User {
    async findByUsername(username) {
        return await db.query('SELECT * FROM users WHERE username = ?', [username]);
    }

    async findById(id) {
        return await db.query('SELECT id, username, points FROM users WHERE id = ?', [id]);
    }

    async create(username, password) {
        return await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    }

    async getUsersPoints() {
        return await db.query('SELECT id, username, points FROM users ORDER BY points DESC');
    }

    async updatePoints(id, points) {
        return await db.query('UPDATE users SET points = ? WHERE id = ?', [points, id]);
    }

    async getPoint(id) {
        return await db.query('SELECT points FROM users WHERE id = ?', [id]);
    }
}

module.exports = new User();
