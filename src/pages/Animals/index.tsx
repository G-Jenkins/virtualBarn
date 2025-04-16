import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { dataService } from '../../services/dataService'

type LocationFilter = 'all' | 'CA' | 'TN'

interface Category {
  id: string
  name: string
  description: string
  imageUrl: string
  count: number
}

const Animals = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLocation, setActiveLocation] = useState<LocationFilter>('all')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await dataService.getCategories()
        setCategories(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load animal categories')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  // Filter categories based on search query (probably not needed )
  const filteredCategories = categories.filter(category => {
    if (!category || !category.name || !category.description) return false;
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query)
    );
  });

  if (loading) return <div className="text-center py-8">Loading categories...</div>
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">The Gentle Barn Animals</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Location Filters */}
        <div className="flex gap-2">
          {[
            { id: 'all', label: 'All Locations' },
            { id: 'CA', label: 'California' },
            { id: 'TN', label: 'Tennessee' }
          ].map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id as LocationFilter)}
              className={`
                px-4 py-2 rounded font-semibold transition-all duration-300
                ${activeLocation === location.id
                  ? 'bg-gentle-green text-white scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {location.label}
              {location.id !== 'all' && (
                <span className="ml-2 text-sm opacity-75">
                  (0)
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow md:flex-grow-0">
          <Search
            className={`
              absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300
              ${searchQuery ? 'text-gentle-green' : 'text-gray-400'}
            `}
            size={20}
          />
          <input
            type="text"
            placeholder="Search animals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded
              focus:outline-none focus:ring-2 focus:ring-gentle-green focus:border-transparent
              transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400
                hover:text-gray-600 transition-colors duration-300"
            >
              ×
            </button>
          )}
        </div>

        <button className="bg-gray-700 text-white px-4 py-2 rounded font-semibold
          hover:bg-gray-800 transition-colors">
          Memorium
        </button>
      </div>

      {/* No Results State */}
      {!loading && filteredCategories.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No categories found matching your search</p>
          <button
            onClick={() => {
              setSearchQuery('')
              setActiveLocation('all')
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            to={`/animals/${category.id}`}
            className="group flex flex-col overflow-hidden rounded-lg shadow-md border
              bg-white transition-all duration-300 hover:shadow-xl hover:scale-102"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover
                  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20
                transition-opacity duration-300 group-hover:bg-opacity-30" />
              <div className="absolute top-3 right-3 bg-gentle-orange text-white
                px-3 py-1 rounded-full text-sm font-semibold">
                {category.count} Animals
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
              <span className="inline-block mt-3 text-blue-600 text-sm group-hover:underline">
                Meet Our {category.name} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Animals