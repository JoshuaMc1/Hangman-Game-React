const Word = require('../models/Word');

async function random(difficulty) {
    return await Word.random(difficulty);
}

async function all() {
    return await Word.all();
}

async function create(word, difficulty, time, clue) {
    return await Word.create(word, difficulty, time, clue);
}

module.exports = {
    random,
    all,
    create
};
