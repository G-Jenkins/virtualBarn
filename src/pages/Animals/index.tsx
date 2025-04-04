import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { animalTypes } from '../../data/animalTypes'
import { useAnimal } from '../../context/AnimalContext'
import AnimalCard from './AnimalCard'

type LocationFilter = 'all' | 'CA' | 'TN'

const Animals = () => {
  const { state, dispatch } = useAnimal()

  // Memoized filtered results
  const filteredAnimalTypes = useMemo(() => {
    // Start with all animal types
    let filtered = [...animalTypes]

    // Apply search filter
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase()
      filtered = filtered.filter(type =>
        type.name.toLowerCase().includes(query) ||
        type.description.toLowerCase().includes(query)
      )
    }

    // Apply location filter (when we have location data)
    // For now, this is a placeholder for when we have location data
    if (state.activeLocation !== 'all') {
      // filtered = filtered.filter(type => type.location === state.activeLocation)
    }

    return filtered
  }, [state.searchQuery, state.activeLocation])

  // Simulate loading state when filters change
  const handleLocationChange = (location: LocationFilter) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_LOCATION', payload: location })
    // Simulate API call delay
    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false })
    }, 300)
  }

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
              onClick={() => handleLocationChange(location.id as LocationFilter)}
              className={`
                px-4 py-2 rounded font-semibold transition-all duration-300
                ${state.activeLocation === location.id
                  ? 'bg-gentle-green text-white scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
              disabled={state.isLoading}
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
              ${state.searchQuery ? 'text-gentle-green' : 'text-gray-400'}
            `}
            size={20}
          />
          <input
            type="text"
            placeholder="Search animals..."
            value={state.searchQuery}
            onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded
              focus:outline-none focus:ring-2 focus:ring-gentle-green focus:border-transparent
              transition-all duration-300"
          />
          {state.searchQuery && (
            <button
              onClick={() => dispatch({ type: 'SET_SEARCH', payload: '' })}
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

      {/* Loading State */}
      {state.isLoading && (
        <div className="text-center py-4 text-gray-500">
          Loading animals...
        </div>
      )}

      {/* No Results State */}
      {!state.isLoading && filteredAnimalTypes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No animals found matching your criteria</p>
          <button
            onClick={() => {
              dispatch({ type: 'SET_SEARCH', payload: '' })
              dispatch({ type: 'SET_LOCATION', payload: 'all' })
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Animal Types Grid */}
      <div className={`
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
        transition-opacity duration-300
        ${state.isLoading ? 'opacity-50' : 'opacity-100'}
      `}>
        {filteredAnimalTypes.map((type) => (
          <Link
            key={type.id}
            to={`/animals/${type.id}`}
            className="group flex flex-col overflow-hidden rounded-lg shadow-md border
              bg-white transition-all duration-300 hover:shadow-xl hover:scale-102"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={type.imageUrl}
                alt={type.name}
                className="absolute inset-0 w-full h-full object-cover
                  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20
                transition-opacity duration-300 group-hover:bg-opacity-30" />
              <div className="absolute top-3 right-3 bg-gentle-orange text-white
                px-3 py-1 rounded-full text-sm font-semibold">
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