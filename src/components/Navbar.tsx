interface NavbarProps {
  currentPage: 'home' | 'animals'
  setCurrentPage: (page: 'home' | 'animals') => void
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  return (
    <nav className="flex flex-wrap justify-center gap-4 text-sm mb-6 text-blue-700">
      <a
        href="#"
        className={`transition-all duration-300 hover:scale-90 ${currentPage === 'home' ? 'font-bold' : ''}`}
        onClick={(e) => {
          e.preventDefault()
          setCurrentPage('home')
        }}
      >
        Home
      </a>
      <a
        href="#"
        className={`transition-all duration-300 hover:scale-90 ${currentPage === 'animals' ? 'font-bold' : ''}`}
        onClick={(e) => {
          e.preventDefault()
          setCurrentPage('animals')
        }}
      >
        Animals
      </a>
      {/* Other nav items */}
      <a className="transition-all duration-300 hover:scale-110" href="#">Visit</a>
      <a className="transition-all duration-300 hover:scale-110" href="#">Programs</a>
      <a className="transition-all duration-300 hover:scale-110" href="#">About</a>
      <a className="transition-all duration-300 hover:scale-110" href="#">Blog</a>
      <a className="transition-all duration-300 hover:scale-110" href="#">Store</a>
      <a className="transition-all duration-300 hover:scale-110" href="#">Donate</a>
      <a className="transition-all duration-300 hover:scale-110" href="#">Legacy Giving</a>
    </nav>
  )
}

export default Navbar