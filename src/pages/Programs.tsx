import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Calendar, DollarSign, Info } from 'lucide-react'
import type { Program } from '../types/program'

const programs: Program[] = [
  {
    id: 'cow-hug-therapy',
    title: 'Cow Hug Therapy',
    description: 'Experience the healing power of cow hugs. Perfect for anyone suffering from PTSD, depression, anxiety, loneliness, grief, or who simply needs a good hug. Our cows are gentle teachers who show us how to trust, forgive, and love again.',
    image: '/src/assets/programs/cow-hug-therapy.jpg',
    details: {
      donation: 200,
      maxPeople: '2 people max',
      ageRequirement: 'Age 14+ allowed',
      schedule: 'Tue, Wed, Thu, & Sat',
      timeSlots: '12p-1p or 1p-2p',
      note: 'DOES NOT include time with any other animals.'
    }
  },
  {
    id: 'equine-therapy',
    title: 'Equine Therapy',
    description: 'Practice confidence and leadership skills through our specific Gentle Barn technique of grooming horses. Learn to become aware of your own body language and connect deeply with these majestic animals.',
    image: '/src/assets/programs/equine-therapy.jpg',
    details: {
      donation: 200,
      maxPeople: '2 people max',
      ageRequirement: 'Age 14+ allowed',
      schedule: 'Tue, Wed, Thu, & Sat',
      timeSlots: '12p-1p or 1p-2p',
      note: 'DOES NOT include time with any other animals.'
    }
  },
  {
    id: 'barnyard-therapy',
    title: 'Barnyard Therapy',
    description: 'Connect with a variety of rescued animals who have overcome trauma. Cradle chickens, cuddle turkeys, give pigs belly rubs, and surround yourself with animals who have found their happily ever after.',
    image: '/src/assets/programs/barnyard-therapy.jpg',
    details: {
      donation: 200,
      maxPeople: '2 people max',
      ageRequirement: 'Age 14+ allowed',
      schedule: 'Tue, Wed, Thu, & Sat',
      timeSlots: '12p-1p or 1p-2p',
      note: 'DOES NOT include time with any other animals.'
    }
  },
  {
    id: 'school-education',
    title: 'School & Education',
    description: 'We teach children about animals in a way that changes their perspective about themselves and the world around them. Our programs follow Next Generation Science Standards (NGSS) to support teachers\' curricula.',
    image: '/src/assets/programs/school-education.jpg',
    details: {
      donation: '400 (min. of 20 kids & adults)',
      additionalCost: '$20/person over initial 20 people',
      maxKids: 'Maximum of 30 kids (1 classroom)',
      maxAdults: 'Maximum of 5 adults',
      ageNote: 'All guests 2yrs+ count toward total',
      schedule: 'Tue, Wed, Thu, & Sat',
      timeSlots: '10a-12p or 2p-4p'
    }
  },
  {
    id: 'peace-enhancement',
    title: 'Peace Enhancement',
    description: 'A multiple-time experience designed to cultivate self-awareness, responsibility, and hope through the unconditional love of animals. Perfect for groups seeking healing and personal growth.',
    image: '/src/assets/programs/peace-enhancement.jpg',
    details: {
      customProgram: true,
      duration: 'Six-month program',
      frequency: 'Weekly or monthly sessions',
      sessionLength: 'Two hours per session',
      note: 'Program can be tailored to your group\'s needs'
    }
  }
]

interface ProgramCardProps {
  program: Program
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
        <p className="text-gray-600 mb-6">{program.description}</p>

        <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
          {program.details.donation && (
            <div className="flex items-center gap-2">
              <DollarSign className="text-gentle-green" size={20} />
              <span>Donation: ${program.details.donation}</span>
            </div>
          )}
          {program.details.maxPeople && (
            <div className="flex items-center gap-2">
              <Users className="text-gentle-green" size={20} />
              <span>{program.details.maxPeople}</span>
            </div>
          )}
          {program.details.schedule && (
            <div className="flex items-center gap-2">
              <Calendar className="text-gentle-green" size={20} />
              <span>{program.details.schedule}</span>
            </div>
          )}
          {program.details.timeSlots && (
            <div className="flex items-center gap-2">
              <Clock className="text-gentle-green" size={20} />
              <span>{program.details.timeSlots}</span>
            </div>
          )}
          {program.details.note && (
            <div className="flex items-center gap-2">
              <Info className="text-gentle-green" size={20} />
              <span className="text-gray-600">{program.details.note}</span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 px-6 py-2 text-gentle-green border-2 border-gentle-green rounded-lg
              hover:bg-gentle-green hover:text-white transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
          <Link
            to="/book-now"
            className="flex-1 px-6 py-2 bg-gentle-green text-white rounded-lg
              hover:bg-gentle-green-dark transition-colors text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

const ProgramsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the healing power of animal connections through our various programs.
          Each program is designed to create meaningful interactions between humans and animals.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <p className="text-gray-700 text-sm italic text-center">
          The Gentle Barn's staff or volunteers are there to facilitate the connection and provide safety between you and the animals but they are
          <strong> NOT </strong>
          therapists, and in no way offer medical or mental health advice themselves. In the event that additional mental health support is needed,
          The Gentle Barn recommends reaching out to a licensed mental health clinician.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      <div className="mt-12 bg-gentle-green/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gift Certificates Available</h2>
        <p className="text-gray-600 mb-6">
          Give the gift of healing and connection. Gift certificates are available for all our programs.
        </p>
        <Link
          to="/gift-certificates"
          className="inline-block px-6 py-3 bg-gentle-green text-white rounded-lg
            hover:bg-gentle-green-dark transition-colors"
        >
          Purchase Gift Certificate
        </Link>
      </div>
    </div>
  )
}

export default ProgramsPage