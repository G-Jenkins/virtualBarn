import { memo } from 'react';
import { Animal } from '../../types/animal';

interface AnimalCardProps {
  animal: Animal;
  onSponsorClick: (animalId: string) => void;
  onCardClick: (animalId: string) => void;
}

const AnimalCard = memo(({ animal, onSponsorClick, onCardClick }: AnimalCardProps) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl"
      onClick={() => onCardClick(animal.id)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={animal.thumbnailUrl}
          alt={`${animal.name} - ${animal.type}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-gentle-green text-white text-xs rounded-full">
          {animal.location}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{animal.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {animal.shortDescription}
        </p>

        {/* Sponsor Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSponsorClick(animal.id);
          }}
          className="mt-auto bg-gentle-orange text-white py-2 px-4 rounded-md
                   transition-colors duration-200 hover:bg-gentle-orange-dark
                   focus:outline-none focus:ring-2 focus:ring-gentle-orange focus:ring-opacity-50"
          aria-label={`Sponsor ${animal.name}`}
        >
          Sponsor {animal.name}
        </button>
      </div>
    </div>
  );
});

AnimalCard.displayName = 'AnimalCard';
export default AnimalCard;