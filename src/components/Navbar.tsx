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
  Leaf,
  Building,
  Dog,
  Map,
  Handshake,
  HelpCircle,
  Book,
  Store,
  Gift,
  Tree
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
    <nav className="relative bg-white shadow-sm mb-6">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-6 py-4 px-4 text-sm text-blue-700">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`
                flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-blue-900
                ${isCurrentPath(item.path) ? 'font-bold text-blue-900' : ''}
              `}
            >
              <Icon size={16} className="flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu Button - Fixed Position */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-gentle-green rounded-full shadow-lg text-white hover:text-white/80 focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <XIcon size={24} strokeWidth={2.5} />
          ) : (
            <MenuIcon size={24} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-white z-40
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="pt-20 px-4 h-full overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`
                  flex items-center gap-3 py-4 text-lg text-blue-700 hover:bg-blue-50
                  transition-colors duration-200 rounded-lg px-4 mb-2
                  ${isCurrentPath(item.path) ? 'font-bold bg-blue-50' : ''}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon size={24} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar