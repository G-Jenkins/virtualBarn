import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Animals from './components/Animals'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'animals'>('home')

  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <header className="bg-gentle-green text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="logo flex flex-col md:flex-row md:items-center gap-4">
            <img src="/src/assets/logo.png" alt="The Gentle Barn" className="w-20 h-20 mx-auto md:mx-0 transition-all duration-300 hover:scale-110 hover:opacity-75" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Inspiring Kindness and Compassion</h1>
              <p className="text-sm md:text-base">towards Animals, Our Planet, and Each Other</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 text-sm text-right">
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">En Español</a>
            <a href="#" className="hover:underline">FAQs</a>
          </div>
        </div>
      </header>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-10 bg-white mt-6 sm:mt-10 rounded shadow">
        {currentPage === 'home' ? <Home /> : <Animals />}
      </main>

      <footer className="bg-gentle-green text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h3 className="text-sm font-semibold mb-2">News, Alerts, Stories & More</h3>
          <input type="email" placeholder="Email*" className="w-full p-2 rounded text-black mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p>Home</p>
              <p>Visit</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
