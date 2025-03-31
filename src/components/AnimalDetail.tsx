import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { worthy } from '../data/animals/worthy'

const AnimalDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // For now we're just using Worthy's data
  // Later this will be fetched based on the id
  const animal = worthy

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate('/animals/horse')}
        className="group flex items-center gap-2 bg-white px-4 py-2 rounded-lg
          shadow-sm hover:shadow-md transition-all duration-300
          text-gray-700 hover:text-blue-600"
      >
        <ArrowLeft size={20}
          className="transform transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="font-medium">Back to Horses</span>
      </button>

      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <img
          src={animal.images.hero}
          alt={`${animal.name} at The Gentle Barn`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animal Info */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{animal.name}</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gentle-green text-white px-3 py-1 rounded-full">
              {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
            </span>
            <span className="bg-gentle-teal text-white px-3 py-1 rounded-full">
              {animal.location}
            </span>
          </div>

          <div className="prose max-w-none text-gray-800">
            <p>{animal.shortDescription}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900">{animal.name}'s Story</h2>
            <p className="text-gray-800">{animal.fullStory}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Support {animal.name}</h2>
            <p className="text-gray-800">
              Help support {animal.name}'s ongoing care and rehabilitation by becoming
              a sponsor today. Your monthly contribution helps provide food, medical care,
              and endless love.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <span className="block font-semibold">Sponsor {animal.name}</span>
              <span className="text-xs opacity-90">Ongoing Care and Support</span>
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Share {animal.name}'s Story
            </button>
          </div>

          {animal.sponsorshipDetails && (
            <div className="mt-4 text-gray-600 text-sm">
              <p>Monthly Goal: ${animal.sponsorshipDetails.monthlyGoal}</p>
              <p>Current Sponsors: {animal.sponsorshipDetails.currentSponsors}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnimalDetail