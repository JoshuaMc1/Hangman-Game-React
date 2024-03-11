const db = require('../db');

class Word {
    async random(difficulty = 'easy') {
        return await db.query('SELECT * FROM words WHERE difficulty = ? ORDER BY RAND() LIMIT 1', [difficulty]);
    }

    async all() {
        return await db.query('SELECT * FROM words');
    }
}

module.exports = new Word();
