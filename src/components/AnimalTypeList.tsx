import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { worthy } from '../data/animals/worthy'

const AnimalTypeList = () => {
  const { type } = useParams<{ type: string }>()
  const navigate = useNavigate()

  // Create array of 12 items for the grid
  const mockHorses = Array(12).fill(worthy)

  return (
    <div className="space-y-6 bg-gray-50">
      {/* Back Button */}
      {/* Option 1: Modern with subtle shadow and hover effect */}
      <button
        onClick={() => navigate('/animals')}
        className="group flex items-center gap-2 border-2 border-black bg-gentle-orange text-white px-4 py-2 rounded-lg
          shadow-sm hover:shadow-md transition-all duration-300
          text-gray-700 hover:text-blue-600"
      >
        <ArrowLeft size={20}
          className="transform transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="font-medium">Back to All Animals</span>
      </button>

      {/* Option 2: Outlined style with accent color */}
      <button
        onClick={() => navigate('/animals')}
        className="flex items-center gap-2 border-2 border-gentle-green
          px-4 py-2 rounded-lg  font-medium
          hover:bg-gentle-green hover:text-white
          transition-all duration-300"
      >
        <ArrowLeft size={20} />
        <span>Back to All Animals</span>
      </button>

      {/* Option 3: Minimal with underline effect */}
      <button
        onClick={() => navigate('/animals')}
        className="group flex items-center gap-3 px-1 py-2"
      >
        <ArrowLeft size={20}
          className="text-gray-600 transform transition-transform duration-300
            group-hover:-translate-x-1"
        />
        <span className="text-gray-600 font-medium relative after:absolute
          after:bottom-0 after:left-0 after:h-0.5 after:w-full
          after:origin-bottom-right after:scale-x-0
          after:bg-gentle-green after:transition-transform
          after:duration-300 group-hover:after:origin-bottom-left
          group-hover:after:scale-x-100"
        >
          Back to All Animals
        </span>
      </button>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Horses</h2>

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
            <div className="relative aspect-[5/7] overflow-hidden">
              <img
                src={horse.images.thumbnail}
                alt={horse.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{horse.name}</h3>
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