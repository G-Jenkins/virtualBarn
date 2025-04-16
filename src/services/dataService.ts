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
  }
};