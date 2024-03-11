const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'hangman_db',
    multipleStatements: true,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }

    if (connection) {
        connection.on('error', (err) => {
            console.error('Database connection error:', err);
        });
    }

    console.log('Connected to database as ID:', connection.threadId);

    connection.release();
});

pool.query = promisify(pool.query);

module.exports = pool;
