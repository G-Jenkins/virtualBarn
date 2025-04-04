export interface Animal {
  id: string;
  name: string;
  type: 'horses' | 'donkeys' | 'cows' | 'pigs' | 'dog' | 'emu' | 'alpacas' | 'chickens' | 'bird' | 'goats' | 'turkey' | 'sheep';
  location: 'California' | 'Tennessee';
  thumbnailUrl: string;
  heroImageUrl: string;
  secondaryImages: string[];
  shortDescription: string;
  rescueStory: string;
  medicalHistory: string;
  personality: string;
  isSponsored: boolean;
  sponsorshipOptions: {
    monthly: number;
    yearly: number;
  };
}

export type AnimalType =
  | 'horse'
  | 'cow'
  | 'donkey'
  | 'pig'
  | 'dog'
  | 'emu'
  | 'llama'
  | 'chicken'
  | 'bird'
  | 'goat'
  | 'turkey'
  | 'sheep';