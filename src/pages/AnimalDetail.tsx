import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { dataService } from '../services/dataService'
import type { Animal } from '../types/animal'
import SponsorshipModal from '../components/common/SponsorshipModal'

const AnimalDetail = () => {
  const { id, type } = useParams<{ id: string; type: string }>()
  const navigate = useNavigate()
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false)
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnimal = async () => {
      if (!id) return

      try {
        const data = await dataService.getAnimalById(id)
        setAnimal(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load animal')
        navigate('/animals')
      } finally {
        setLoading(false)
      }
    }

    fetchAnimal()
  }, [id, navigate])

  if (loading) return <div className="text-center py-8">Loading animal details...</div>
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>
  if (!animal) return <div className="text-center py-8">Animal not found</div>

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(`/animals/${type}`)}
        className="group flex items-center gap-2 bg-white px-4 py-2 rounded-lg
          shadow-sm hover:shadow-md transition-all duration-300
          text-gray-700 hover:text-blue-600"
      >
        <ArrowLeft size={20}
          className="transform transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="font-medium">Back to {type?.charAt(0).toUpperCase()}{type?.slice(1)}</span>
      </button>

      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <img
          src={animal.heroImageUrl}
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
              {type?.charAt(0).toUpperCase()}{type?.slice(1)}
            </span>
            <span className="bg-gentle-teal text-white px-3 py-1 rounded-full">
              {animal.location}
            </span>
          </div>

          <div className="prose max-w-none text-gray-800">
            <p>{animal.shortDescription}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900">{animal.name}'s Story</h2>
            <p className="text-gray-800 whitespace-pre-line">{animal.rescueStory}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Medical History</h2>
            <p className="text-gray-800">{animal.medicalHistory}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Personality</h2>
            <p className="text-gray-800">{animal.personality}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Support {animal.name}</h2>
            <p className="text-gray-800">
              Help support {animal.name}'s ongoing care and rehabilitation by becoming
              a sponsor today. Your monthly contribution helps provide food, medical care,
              and endless love.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => setIsSponsorModalOpen(true)}
              className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors"
            >
              <span className="block font-semibold">Sponsor {animal.name}</span>
              <span className="text-xs opacity-90">
                Ongoing Care & Support
              </span>
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Share {animal.name}'s Story
            </button>
          </div>

          <div className="mt-4 text-gray-600 text-sm">
            <p>Monthly Sponsorship: ${animal.sponsorshipOptions.monthly}</p>
            <p>Yearly Sponsorship: ${animal.sponsorshipOptions.yearly}</p>
          </div>
        </div>
      </div>

      {/* Sponsorship Modal */}
      <SponsorshipModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
        animal={animal}
      />
    </div>
  )
}

export default AnimalDetail