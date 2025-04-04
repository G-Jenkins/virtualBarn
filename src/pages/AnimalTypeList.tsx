import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useAnimal } from '../context/AnimalContext'
import { getAnimalsByType } from '../data/animals'

const AnimalTypeList = () => {
  const { type } = useParams<{ type: string }>()
  const navigate = useNavigate()

  // Get animals of the current type
  const animals = type ? getAnimalsByType(type) : []

  return (
    <div className="space-y-6 bg-gray-50">
      {/* Back Button */}
      <button
        onClick={() => navigate('/animals')}
        className="group flex items-center gap-2 border-2 border-gentle-green
          px-4 py-2 rounded-lg font-medium
          hover:bg-gentle-green hover:text-white
          transition-all duration-300"
      >
        <ArrowLeft size={20} />
        <span>Back to All Animals</span>
      </button>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Our {type?.charAt(0).toUpperCase()}{type?.slice(1)}s
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-gentle-green text-white px-4 py-2 rounded font-semibold">California</button>
        <button className="bg-gentle-teal text-white px-4 py-2 rounded font-semibold">Tennessee</button>
      </div>

      {/* Animal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animals.map((animal) => (
          <Link
            key={animal.id}
            to={`/animals/${type}/${animal.id}`}
            className="flex flex-col overflow-hidden rounded-lg shadow border bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative aspect-[5/7] overflow-hidden">
              <img
                src={animal.thumbnailUrl}
                alt={animal.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{animal.name}</h3>
                <span className="bg-gentle-orange text-white px-2 py-1 rounded text-sm">
                  {animal.location}
                </span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{animal.shortDescription}</p>
              <span className="mt-3 text-blue-600 text-sm hover:underline inline-block">
                Read My Story & Sponsor Me
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimalTypeList