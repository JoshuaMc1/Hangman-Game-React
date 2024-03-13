const db = require('../db');

class User {
    async findByUsername(username) {
        const query = 'SELECT * FROM users WHERE username = ?';
        return await db.query(query, [username]);
    }

    async findById(id) {
        const query = 'SELECT id, username, points FROM users WHERE id = ?';
        return await db.query(query, [id]);
    }

    async create(username, password) {
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        return await db.query(query, [username, password]);
    }

    async getUsersPoints() {
        const query = 'SELECT id, username, points FROM users ORDER BY points DESC';
        return await db.query(query);
    }

    async updatePoints(id, points) {
        const query = 'UPDATE users SET points = ? WHERE id = ?';
        return await db.query(query, [points, id]);
    }

    async getPoint(id) {
        const query = 'SELECT points FROM users WHERE id = ?';
        return await db.query(query, [id]);
    }
}

module.exports = new User();
