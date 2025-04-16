export const dataService = {
  getCategories: async () => {
    try {
      const response = await fetch('/src/data/categories.json');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      return data.categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  getAnimalById: async (id: string) => {
    try {
      const response = await fetch('/src/data/animals.json');
      if (!response.ok) {
        throw new Error('Failed to fetch animals');
      }
      const data = await response.json();
      const animal = data.animals.find((a: any) => a.id === id);

      if (!animal) {
        throw new Error(`Animal with id ${id} not found`);
      }

      return animal;
    } catch (error) {
      console.error('Error fetching animal:', error);
      throw error;
    }
  }
};