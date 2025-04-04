import { Animal } from '../types/animal'

// Mock data for testing
export const animals: Animal[] = [
  {
    id: 'worthy',
    name: 'Worthy',
    type: 'horses',
    location: 'California',
    thumbnailUrl: '/src/assets/animalCard-Worthy/worth-small-img.jpg',
    heroImageUrl: '/src/assets/animalCard-Worthy/hero-worthy.jpg',
    secondaryImages: [
      '/src/assets/animalCard-Worthy/worthy-small-img.jpg'
    ],
    shortDescription: 'A gentle giant with a heart of gold',
    rescueStory: `Worthy was born with a deformed leg and was kept by someone who could not afford to feed her, let alone to give her the surgery she needed. She hobbled along for a year and by the time we found her she was grossly underweight, malnourished and in tremendous pain.

We transported Worthy and her mom Indie to the hospital for surgery. After a long surgery, six months of hospitalization, thousands of dollars in costly vet bills, two casts, a custom made leg brace, many titanium screws and plates, and lots of prayers from around the world, Worthy made it!

Her leg is now straight and she can walk, run, lay down and play like a normal horse. Worthy will spend the rest of her life at The Gentle Barn, giving hope and inspiration to thousands of children born with differences and struggles of their own.`,
    medicalHistory: 'Fully recovered from malnutrition, now healthy and strong.',
    personality: 'Kind, patient, and loves attention from visitors.',
    isSponsored: false,
    sponsorshipOptions: {
      monthly: 25,
      yearly: 250
    }
  },
  {
    id: 'zeus',
    name: 'Zeus',
    type: 'horses',
    location: 'Tennessee',
    thumbnailUrl: '/src/assets/animals/zeus/thumbnail.jpg',
    heroImageUrl: '/src/assets/animals/zeus/hero.jpg',
    secondaryImages: [
      '/src/assets/animals/zeus/1.jpg',
      '/src/assets/animals/zeus/2.jpg'
    ],
    shortDescription: 'A majestic stallion with a playful spirit',
    rescueStory: 'Zeus came to us from a closing ranch where he had been overworked.',
    medicalHistory: 'Recovered from joint issues, now thriving.',
    personality: 'Energetic, friendly, and loves to run in the fields.',
    isSponsored: false,
    sponsorshipOptions: {
      monthly: 25,
      yearly: 250
    }
  }
]

// Utility functions for filtering and finding animals
export const getAnimalsByType = (type: string): Animal[] => {
  return animals.filter(animal => animal.type === type)
}

export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id)
}

// Helper function to get animal count by type
export const getAnimalCountByType = (type: string): number => {
  return animals.filter(animal => animal.type === type).length
}

// Helper function to get animal count by location
export const getAnimalCountByLocation = (location: 'California' | 'Tennessee'): number => {
  return animals.filter(animal => animal.location === location).length
}