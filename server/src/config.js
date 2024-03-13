require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
        env: process.env.APP_ENV || 'dev'
    },
    mysql: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || ''
    },
    secret: process.env.JWT_SECRET || 'mysecretkey'
}
