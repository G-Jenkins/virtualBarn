export interface AnimalType {
  id: string
  name: string
  imageUrl: string
  count: number
  description: string
}

export const animalTypes: AnimalType[] = [
  {
    id: 'horses',
    name: 'Horses',
    imageUrl: '/src/assets/animalGrid/horse.jpg',
    count: 12,
    description: 'Meet our gentle giants who have found sanctuary and peace'
  },
  {
    id: 'cows',
    name: 'Cows',
    imageUrl: '/src/assets/animalGrid/cow.jpg',
    count: 8,
    description: 'Our loving cow family, each with their own unique personality'
  },
  {
    id: 'pigs',
    name: 'Pigs',
    imageUrl: '/src/assets/animalGrid/pig.jpg',
    count: 6,
    description: 'Intelligent and playful, our pig residents love belly rubs'
  },
  {
    id: 'chickens',
    name: 'Chickens',
    imageUrl: '/src/assets/animalGrid/chicken.jpg',
    count: 15,
    description: 'Free to roam and be themselves, our feathered friends thrive'
  },
  {
    id: 'sheep',
    name: 'Sheep',
    imageUrl: '/src/assets/animalGrid/sheep.jpg',
    count: 10,
    description: 'Our friendly sheep, known for their soft wool and gentle nature'
  }
]