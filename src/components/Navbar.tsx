import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'animals', label: 'Animals', path: '/animals' },
    { id: 'visit', label: 'Visit', path: '/visit' },
    { id: 'programs', label: 'Programs', path: '/programs' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'store', label: 'Store', path: '/store' },
    { id: 'donate', label: 'Donate', path: '/donate' },
    { id: 'legacy', label: 'Legacy Giving', path: '/legacy' },
  ]

  const isCurrentPath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="relative bg-white shadow-sm mb-6">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <XIcon size={24} />
          ) : (
            <MenuIcon size={24} />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-6 py-4 px-4 text-sm text-blue-700">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`
              transition-all duration-300 hover:scale-110 hover:text-blue-900
              ${isCurrentPath(item.path) ? 'font-bold text-blue-900' : ''}
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`
              block py-3 px-6 text-blue-700 hover:bg-blue-50 transition-colors duration-200
              ${isCurrentPath(item.path) ? 'font-bold bg-blue-50' : ''}
            `}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar