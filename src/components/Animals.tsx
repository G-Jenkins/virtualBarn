import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { animalTypes } from '../data/animalTypes'

const Animals = () => {
  const [activeLocation, setActiveLocation] = useState<'all' | 'CA' | 'TN'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">The Gentle Barn Animals</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setActiveLocation('all')}
          className={`px-4 py-2 rounded font-semibold transition-colors
            ${activeLocation === 'all'
              ? 'bg-gentle-green text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All Locations
        </button>
        <button
          onClick={() => setActiveLocation('CA')}
          className={`px-4 py-2 rounded font-semibold transition-colors
            ${activeLocation === 'CA'
              ? 'bg-gentle-green text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          California
        </button>
        <button
          onClick={() => setActiveLocation('TN')}
          className={`px-4 py-2 rounded font-semibold transition-colors
            ${activeLocation === 'TN'
              ? 'bg-gentle-teal text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Tennessee
        </button>

        {/* Search Bar */}
        <div className="relative flex-grow md:flex-grow-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search animals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gentle-green focus:border-transparent"
          />
        </div>

        <button className="bg-gray-700 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors">
          Memorium
        </button>
      </div>

      {/* Animal Types Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animalTypes.map((type) => (
          <Link
            key={type.id}
            to={`/animals/${type.id}`}
            className="group flex flex-col overflow-hidden rounded-lg shadow-md border bg-white transition-all duration-300 hover:shadow-xl hover:scale-102"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={type.imageUrl}
                alt={type.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
              <div className="absolute top-3 right-3 bg-gentle-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                {type.count} Animals
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
              <p className="text-gray-600 text-sm">{type.description}</p>
              <span className="inline-block mt-3 text-blue-600 text-sm group-hover:underline">
                Meet Our {type.name} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Animals