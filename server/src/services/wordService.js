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

async function createWord(word, difficulty, time, clue) {
    await Word.create(word, difficulty, time, clue);
    await Word.deleteRepeats();
}

module.exports = {
    random,
    all,
    create,
    createWord
};
