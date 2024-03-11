const Word = require('../models/Word');

async function random(difficulty) {
    return await Word.random(difficulty);
}

async function all() {
    return await Word.all();
}

module.exports = {
    random,
    all
};
