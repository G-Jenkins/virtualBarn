import { memo } from 'react';
import { Animal } from '../types/animal';

interface AnimalDetailPageProps {
  animal: Animal;
  relatedAnimals: Animal[];
  onSponsorClick: (animalId: string) => void;
}

const AnimalDetailPage = memo(({
  animal,
  relatedAnimals,
  onSponsorClick
}: AnimalDetailPageProps) => {
  return (
    <article className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] rounded-xl overflow-hidden mb-8">
        <img
          src={animal.heroImageUrl}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h1 className="text-4xl font-bold text-white mb-2">{animal.name}</h1>
          <p className="text-white/90">{animal.shortDescription}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Rescue Story */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Rescue Story</h2>
            <p className="text-gray-700">{animal.rescueStory}</p>
          </section>

          {/* Medical History */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Medical History</h2>
            <p className="text-gray-700">{animal.medicalHistory}</p>
          </section>

          {/* Personality */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Personality</h2>
            <p className="text-gray-700">{animal.personality}</p>
          </section>

          {/* Image Gallery */}
          <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {animal.secondaryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${animal.name} - Photo ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover"
                loading="lazy"
              />
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Sponsorship Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
            <h3 className="text-xl font-bold mb-4">Sponsor {animal.name}</h3>
            <div className="space-y-4">
              <button
                onClick={() => onSponsorClick(animal.id)}
                className="w-full bg-gentle-orange text-white py-3 px-6 rounded-lg
                         text-lg font-semibold transition-colors duration-200
                         hover:bg-gentle-orange-dark"
              >
                Sponsor Monthly - ${animal.sponsorshipOptions.monthly}
              </button>
              <button
                onClick={() => onSponsorClick(animal.id)}
                className="w-full bg-gentle-green text-white py-3 px-6 rounded-lg
                         text-lg font-semibold transition-colors duration-200
                         hover:bg-gentle-green-dark"
              >
                Sponsor Yearly - ${animal.sponsorshipOptions.yearly}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Animals */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Meet More Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedAnimals.slice(0, 4).map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onSponsorClick={onSponsorClick}
              onCardClick={(id) => console.log('Navigate to:', id)}
            />
          ))}
        </div>
      </section>
    </article>
  );
});

AnimalDetailPage.displayName = 'AnimalDetailPage';
export default AnimalDetailPage;