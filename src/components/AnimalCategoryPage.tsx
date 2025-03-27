import { useState, useMemo } from 'react';
import AnimalCard from './AnimalCard';
import { Animal, AnimalType } from '../types/animal';

interface AnimalCategoryPageProps {
  animals: Animal[];
  selectedType?: AnimalType;
  selectedLocation?: 'California' | 'Tennessee';
}

const AnimalCategoryPage = ({
  animals,
  selectedType,
  selectedLocation
}: AnimalCategoryPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnimals = useMemo(() => {
    return animals
      .filter(animal =>
        (!selectedType || animal.type === selectedType) &&
        (!selectedLocation || animal.location === selectedLocation) &&
        (!searchTerm ||
          animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          animal.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .sort(() => Math.random() - 0.5); // Randomize order
  }, [animals, selectedType, selectedLocation, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-gentle-green text-white px-4 py-2 rounded font-semibold">
          California
        </button>
        <button className="bg-gentle-teal text-white px-4 py-2 rounded font-semibold">
          Tennessee
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search animals..."
          className="flex-grow md:flex-none border border-gray-300 px-3 py-2 rounded w-full sm:w-60"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAnimals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onSponsorClick={(id) => console.log('Sponsor:', id)}
            onCardClick={(id) => console.log('Navigate to:', id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalCategoryPage;