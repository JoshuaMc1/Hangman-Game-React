const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

export const getRandom = async (difficulty = 'easy') => {
    const response = await fetch(`${BASE_URL}/word/${difficulty}/random`);

    const data = await response.json();

    return data;
}

export const getAll = async () => {
    const response = await fetch(`${BASE_URL}/words`);
    const data = await response.json();

    return data;
}
