import { Animal } from '../../types/animals'

export const worthy: Animal = {
  id: 'worthy',
  name: 'Worthy',
  type: 'horse',
  location: 'CA',
  shortDescription: 'Worthy was born with a deformed leg and was kept by someone who could not afford to feed her, let alone to give her the surgery she needed. She hobbled along for a year and by the time we found her she was grossly underweight, malnourished and in tremendous pain.',
  fullStory: 'We transported Worthy and her mom Indie to the hospital for surgery. After a long surgery, six months of hospitalization, thousands of dollars in costly vet bills, two casts, a custom made leg brace, many titanium screws and plates, and lots of prayers from around the world, Worthy made it! Her leg is now straight and she can walk, run, lay down and play like a normal horse. Worthy will spend the rest of her life at The Gentle Barn, giving hope and inspiration to thousands of children born with differences and struggles of their own.',
  images: {
    thumbnail: '/src/assets/animalCard-Worthy/worth-small-img.jpg',
    hero: '/src/assets/animalCard-Worthy/hero-worthy.jpg',
  },
  sponsorshipDetails: {
    monthlyGoal: 100,
    currentSponsors: 12
  }
}