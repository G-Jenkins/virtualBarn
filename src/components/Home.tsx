const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <img
          src="/src/assets/homepage/home01.jpg"
          alt="Cows at The Gentle Barn"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call to Action Banner */}
      <div className="bg-gentle-orange text-white p-4 text-center rounded-lg">
        <h2 className="text-xl font-bold">Have You Been Affected By LA Wildfires? We Can Help!</h2>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Visit Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/src/assets/homepage/home02.jpg"
            alt="Visit The Gentle Barn"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Visit on Sunday, Tours & Field Trips</h3>
            <p>Come hug the cows, give the pig's tummy rubs, cuddle the turkeys, and enjoy a beautiful day at The Gentle Barn!</p>
          </div>
        </div>

        {/* Cow Hug Therapy Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/src/assets/homepage/home03.jpg"
            alt="Cow Hug Therapy"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Cow Hug Therapy (Book)</h3>
            <p>How the animals at The Gentle Barn taught me about life, death, and everything in between.</p>
          </div>
        </div>

        {/* Programs Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/src/assets/homepage/home04.jpg"
            alt="Animal Therapy Programs"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Programs & Animal Therapy</h3>
            <p>Need a hug? Feeling sad, lonely, stressed out and scared from the last year? Come heal with us!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home