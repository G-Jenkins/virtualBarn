import { Animal } from '../../types/animals'

export const worthy: Animal = {
  id: 'worthy',
  name: 'Worthy',
  type: 'horse',
  location: 'CA',
  shortDescription: 'A Belgian draft horse who pulled carriages and carts his whole life.',
  fullStory: 'When Worthy first arrived at The Gentle Barn, he was severely undernourished and frightened of human contact. Through patience, dedication, and lots of love, he has transformed into a gentle giant who loves giving kisses and helping with our healing programs.',
  images: {
    thumbnail: '/src/assets/animalCard-Worthy/worth-small-img.jpg',
    hero: '/src/assets/animalCard-Worthy/hero-worthy.jpg',
  },
  sponsorshipDetails: {
    monthlyGoal: 100,
    currentSponsors: 12
  }
}