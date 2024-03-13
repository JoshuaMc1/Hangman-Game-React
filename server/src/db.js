const mysql = require('mysql');
const { promisify } = require('util');
const config = require('./config');

const pool = mysql.createPool({
    connectionLimit: 10,
    port: config.mysql.port,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
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
