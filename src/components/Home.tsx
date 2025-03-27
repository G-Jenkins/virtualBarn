import React from 'react';
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-6">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
          <img
            src="/src/assets/homepage/home01.jpg"
            alt="Cows at The Gentle Barn"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="mb-6">
        <div className="bg-gentle-orange text-white p-4 text-center rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl font-bold">
            Have You Been Affected By LA Wildfires? We Can Help!
          </h2>
        </div>
      </section>

      {/* Feature Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Visit Card */}
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/src/assets/homepage/home02.jpg"
                alt="Visit The Gentle Barn"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Visit on Sunday, Tours & Field Trips</h3>
              <p className="text-sm">
                Come hug the cows, give the pig's tummy rubs, cuddle the turkeys, and enjoy a beautiful day at The Gentle Barn!
              </p>
            </div>
          </div>

          {/* Cow Hug Therapy Card */}
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/src/assets/homepage/home03.jpg"
                alt="Cow Hug Therapy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Cow Hug Therapy (Book)</h3>
              <p className="text-sm">
                How the animals at The Gentle Barn taught me about life, death, and everything in between.
              </p>
            </div>
          </div>

          {/* Programs Card */}
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/src/assets/homepage/home04.jpg"
                alt="Animal Therapy Programs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Programs & Animal Therapy</h3>
              <p className="text-sm">
                Need a hug? Feeling sad, lonely, stressed out and scared from the last year? Come heal with us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
