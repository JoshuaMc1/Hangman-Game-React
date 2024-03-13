const db = require('../db');

class Word {
    async random(difficulty = 'easy') {
        const query = `
            SELECT UPPER(word) AS word, difficulty, id, time, clue
            FROM words
            WHERE difficulty = ?
            ORDER BY RAND()
            LIMIT 1
        `;
        return await db.query(query, [difficulty]);
    }

    async all(limit = 100, offset = 0) {
        const query = `
            SELECT *
            FROM words
            LIMIT ? OFFSET ?
        `;
        return await db.query(query, [limit, offset]);
    }

    async create(word, difficulty, time, clue) {
        const query = `
            INSERT INTO words (word, difficulty, time, clue)
            VALUES (?, ?, ?, ?)
        `;
        const res = await db.query(query, [word, difficulty, time, clue]);
        return res;
    }

    async deleteRepeats() {
        await db.query(`
            CREATE TEMPORARY TABLE temp_table AS
            SELECT MIN(id) AS min_id
            FROM words
            GROUP BY word, clue, difficulty, time
        `);

        await db.query('DELETE FROM words WHERE id NOT IN (SELECT min_id FROM temp_table)');
        await db.query('DROP TABLE temp_table');
    }
}

module.exports = new Word();
