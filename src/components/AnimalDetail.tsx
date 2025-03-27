import { ArrowLeft } from 'lucide-react'

interface AnimalDetailProps {
  animalId: string
  onBack: () => void
}

const AnimalDetail = ({ animalId, onBack }: AnimalDetailProps) => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to All Animals</span>
      </button>

      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <img
          src="/src/assets/animalCard-Worthy/hero-worthy.jpg"
          alt="Worthy the Horse"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animal Info */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Worthy</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gentle-green text-white px-3 py-1 rounded-full">Horse</span>
            <span className="bg-gentle-teal text-white px-3 py-1 rounded-full">California</span>
          </div>

          <div className="prose max-w-none">
            <p>
            Worthy was born with a deformed leg and was kept by someone who could not afford to feed her, let alone to give her the surgery she needed. She hobbled along for a year and by the time we found her she was grossly underweight, malnourished and in tremendous pain.


            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Worthy's Story</h2>
            <p>
            We transported Worthy and her mom Indie to the hospital for surgery. After a long surgery, six months of hospitalization, thousands of dollars in costly vet bills, two casts, a custom made leg brace, many titanium screws and plates, and lots of prayers from around the world, Worthy made it!


            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Support Worthy</h2>
            <p>
            Her leg is now straight and she can walk, run, lay down and play like a normal horse. Worthy will spend the rest of her life at The Gentle Barn, giving hope and inspiration to thousands of children born with differences and struggles of their own.


            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-gentle-orange 700 transition-colors">
              <span className="block font-semibold">Sponsor Worthy</span>
              <span className="text-xs opacity-90">Ongoing Care and Support</span>
            </button>
            <button className="bg-blue-600 text-white 600 px-6 py-2 rounded-lg hover:bg-gentle-orange transition-colors">
              Share Worthy's Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalDetail