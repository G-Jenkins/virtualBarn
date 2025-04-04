import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gentle-green text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="logo flex flex-col md:flex-row md:items-center gap-4">
          <Link to="/">
            <img
              src="/src/assets/logo.png"
              alt="The Gentle Barn"
              className="w-20 h-20 mx-auto md:mx-0 transition-all duration-300 hover:scale-110 hover:opacity-75"
            />
          </Link>
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
  )
}

export default Header