import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Menu as MenuIcon,
  X as XIcon,
  Home,
  PawPrint,
  MapPin,
  Users,
  Info,
  BookOpen,
  ShoppingBag,
  Heart,
  Leaf
} from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: Home },
    { id: 'animals', label: 'Animals', path: '/animals', icon: PawPrint },
    { id: 'visit', label: 'Visit', path: '/visit', icon: MapPin },
    { id: 'programs', label: 'Programs', path: '/programs', icon: Users },
    { id: 'about', label: 'About', path: '/about', icon: Info },
    { id: 'blog', label: 'Blog', path: '/blog', icon: BookOpen },
    { id: 'store', label: 'Store', path: '/store', icon: ShoppingBag },
    { id: 'donate', label: 'Donate', path: '/donate', icon: Heart },
    { id: 'legacy', label: 'Legacy Giving', path: '/legacy', icon: Leaf },
  ]

  const isCurrentPath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="relative w-full">
      {/* Main Navigation Bar */}
      <div className="flex justify-between items-center px-4 py-4 md:py-6 bg-white">
        {/* Logo/Brand - Left Side */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-medium">
            The Gentle Barn
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`
                relative py-2 transition-colors duration-200 hover:text-gentle-green
                ${isCurrentPath(item.path) ? 'font-medium text-gentle-green' : 'text-gray-800'}
              `}
            >
              {item.label}
              {isCurrentPath(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gentle-green"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          <Link to="/donate" className="hidden md:block text-sm font-medium hover:text-gentle-green">
            Donate
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-6 h-6 text-gray-800"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <XIcon size={24} />
            ) : (
              <MenuIcon size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <Link
              to="/"
              className="text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              The Gentle Barn
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10"
              aria-label="Close menu"
            >
              <XIcon size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`
                      flex items-center py-4 border-b border-gray-100
                      ${isCurrentPath(item.path) ? 'text-gentle-green font-medium' : 'text-gray-800'}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex-1">{item.label}</span>
                    <Icon size={16} className="flex-shrink-0" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-gray-600">Contact Us</a>
              <a href="#" className="text-sm text-gray-600">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar