const Animals = () => {
  return (
    <>
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">The Gentle Barn Animals</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-gentle-green text-white px-4 py-2 rounded font-semibold">California</button>
        <button className="bg-gentle-teal text-white px-4 py-2 rounded font-semibold">Tennessee</button>
        <input type="text" placeholder="Search..." className="flex-grow md:flex-none border border-gray-300 px-3 py-2 rounded w-full sm:w-60" />
        <button className="bg-gray-700 text-white px-4 py-2 rounded font-semibold">Memorium</button>
      </div>

      {/* Animal Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {/* Animal cards */}
        {['Horse', 'Cow', 'Donkey', 'Pig', 'Dog', 'Emu', 'Llama', 'Chicken', 'Bird', 'Goat', 'Turkey', 'Sheep'].map((animal) => (
          <div key={animal} className="flex flex-col overflow-hidden rounded-lg shadow border bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={`/src/assets/animalGrid/${animal.toLowerCase()}.jpg`}
              alt={animal}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-all duration-300 hover:opacity-90"
            />
            <div className="bg-gentle-orange text-white text-center py-1 sm:py-2 text-sm sm:text-base font-semibold transition-all duration-300">
              {animal}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Animals