export type AnimalType = 'horse' | 'cow' | 'pig' | 'dog' | 'emu' | 'llama' | 'chicken' | 'bird' | 'goat' | 'turkey' | 'sheep'
export type Location = 'CA' | 'TN'

export interface Animal {
  id: string
  name: string
  type: AnimalType
  location: Location
  shortDescription: string
  fullStory: string
  images: {
    thumbnail: string
    hero: string
    gallery?: string[]
  }
  sponsorshipDetails?: {
    monthlyGoal: number
    currentSponsors: number
  }
}