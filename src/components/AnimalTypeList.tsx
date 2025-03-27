import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { worthy } from '../data/animals/worthy'

const AnimalTypeList = () => {
  const { type } = useParams<{ type: string }>()
  const navigate = useNavigate()

  // Create array of 12 items for the grid
  const mockHorses = Array(12).fill(worthy)

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate('/animals')}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to All Animals</span>
      </button>

      <h2 className="text-2xl font-bold mb-4">Our Horses</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-gentle-green text-white px-4 py-2 rounded font-semibold">California</button>
        <button className="bg-gentle-teal text-white px-4 py-2 rounded font-semibold">Tennessee</button>
      </div>

      {/* Horse Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockHorses.map((horse, index) => (
          <Link
            key={`${horse.id}-${index}`}
            to={`/animals/horse/${horse.id}`}
            className="flex flex-col overflow-hidden rounded-lg shadow border bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative aspect-square">
              <img
                src={horse.images.thumbnail}
                alt={horse.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{horse.name}</h3>
                <span className="bg-gentle-orange text-white px-2 py-1 rounded text-sm">
                  {horse.location}
                </span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{horse.shortDescription}</p>
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