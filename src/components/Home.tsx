import React from 'react';
import Navbar from './components/Navbar'

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
        <h2 className="text-xl font-bold">Welcome to The Gentle Barn</h2>
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
            <h3 className="text-xl font-bold mb-2">Visit on Sunday</h3>
            <p>Come meet our animal friends and enjoy a beautiful day at The Gentle Barn!</p>
          </div>
        </div>

        {/* Programs Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/src/assets/homepage/home03.jpg"
            alt="Our Programs"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Our Programs</h3>
            <p>Learn about our healing programs and how you can get involved.</p>
          </div>
        </div>

        {/* Support Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/src/assets/homepage/home04.jpg"
            alt="Support Us"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Support Our Mission</h3>
            <p>Help us continue our work of rescue, rehabilitation, and education.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
