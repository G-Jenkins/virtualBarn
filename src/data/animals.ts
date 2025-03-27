import { Animal, Location } from '../types/animals'

// This will be our main animals array when we have more data
export const animals: Animal[] = []

// Utility functions for filtering and finding animals
export const getAnimalsByType = (type: string): Animal[] => {
  return animals.filter(animal => animal.type === type)
}

export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id)
}

export const getAnimalsByLocation = (location: Location): Animal[] => {
  return animals.filter(animal => animal.location === location)
}

// Helper function to get unique animal types
export const getUniqueAnimalTypes = (): string[] => {
  return Array.from(new Set(animals.map(animal => animal.type)))
}

// Helper function to get animal count by type
export const getAnimalCountByType = (type: string): number => {
  return animals.filter(animal => animal.type === type).length
}

// Helper function to get animal count by location
export const getAnimalCountByLocation = (location: Location): number => {
  return animals.filter(animal => animal.location === location).length
}