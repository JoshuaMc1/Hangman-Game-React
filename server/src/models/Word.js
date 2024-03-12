const db = require('../db');

class Word {
    async random(difficulty = 'easy') {
        return await db.query('SELECT UPPER(word) AS word, difficulty, id, time, clue FROM words WHERE difficulty = ? ORDER BY RAND() LIMIT 1', [difficulty]);
    }

    async all(limit = 100, offset = 0) {
        return await db.query('SELECT * FROM words LIMIT ? OFFSET ?', [limit, offset]);
    }

    async create(word, difficulty, time, clue) {
        let res = await db.query('INSERT INTO words (word, difficulty, time, clue) VALUES (?, ?, ?, ?)', [word, difficulty, time, clue]);

        await this.deleteRepeats();

        return res;
    }

    async deleteRepeats() {
        await db.query(`
            CREATE TEMPORARY TABLE temp_table AS
            SELECT MIN(id) as min_id
            FROM words
            GROUP BY word, clue, difficulty, time
        `);

        await db.query('DELETE FROM words WHERE id NOT IN (SELECT min_id FROM temp_table)');
        await db.query('DROP TABLE temp_table');
    }
}

module.exports = new Word();
