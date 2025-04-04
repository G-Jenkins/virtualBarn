// animalsAPI.js

const API_BASE_URL = 'https://api.example.com/animals';

export const getAnimals = async () => {
  const response = await fetch(`${API_BASE_URL}/animals`);
  const data = await response.json();
  return data;
};

export const getAnimalById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/animals/${id}`);
  const data = await response.json();
  return data;
};