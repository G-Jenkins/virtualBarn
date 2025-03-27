import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getAnimalsByType } from '../data/animals'

const AnimalTypeList = () => {
  const { type } = useParams<{ type: string }>()
  const navigate = useNavigate()
  const animals = getAnimalsByType(type || '')

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/animals')}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to All Animals</span>
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Our {type?.charAt(0).toUpperCase() + type?.slice(1)}s
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <Link
            key={animal.id}
            to={`/animals/${type}/${animal.id}`}
            className="flex flex-col overflow-hidden rounded-lg shadow border bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={animal.images.thumbnail}
              alt={animal.name}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-300 hover:opacity-90"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{animal.name}</h3>
                <span className="bg-gentle-orange text-white px-2 py-1 rounded text-sm">
                  {animal.location}
                </span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{animal.shortDescription}</p>
              <span className="mt-3 text-blue-600 text-sm hover:underline">
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