const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const wordRoutes = require('./routes/wordRoutes');
const morgan = require('morgan');
const config = require('./config');

const app = express();

app.use(morgan(config.app.env));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

        return res.status(200).json({});
    }

    next();
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/word', wordRoutes);

app.listen(config.app.port, () => {
    console.log(`Server running on port http://localhost:${config.app.port}`);
});
