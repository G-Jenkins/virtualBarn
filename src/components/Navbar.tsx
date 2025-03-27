import { useState, useEffect, useRef } from 'react'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'

interface NavbarProps {
  currentPage: 'home' | 'animals'
  setCurrentPage: (page: 'home' | 'animals') => void
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle clicks outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
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
    { id: 'home', label: 'Home', isPage: true },
    { id: 'animals', label: 'Animals', isPage: true },
    { id: 'visit', label: 'Visit', isPage: false },
    { id: 'programs', label: 'Programs', isPage: false },
    { id: 'about', label: 'About', isPage: false },
    { id: 'blog', label: 'Blog', isPage: false },
    { id: 'store', label: 'Store', isPage: false },
    { id: 'donate', label: 'Donate', isPage: false },
    { id: 'legacy', label: 'Legacy Giving', isPage: false },
  ]

  const handleNavClick = (e: React.MouseEvent, itemId: string) => {
    e.preventDefault()
    if (itemId === 'home' || itemId === 'animals') {
      setCurrentPage(itemId)
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Fixed Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-semibold text-blue-900">
            {navItems.find(item => item.id === currentPage)?.label}
          </span>
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XIcon size={24} className="text-blue-900" />
            ) : (
              <MenuIcon size={24} className="text-blue-900" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-sm">
        <div className="flex justify-center gap-6 py-4 px-4 text-sm text-blue-700">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`
                transition-all duration-300 hover:scale-110 hover:text-blue-900
                ${item.isPage && currentPage === item.id ? 'font-bold text-blue-900' : ''}
              `}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden
          transition-opacity duration-300
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!isMenuOpen}
      >
        <div
          ref={menuRef}
          className={`
            fixed inset-y-0 right-0 w-64 bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col h-full pt-20">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`
                  py-4 px-6 text-lg text-blue-700 hover:bg-blue-50
                  transition-colors duration-200 focus:outline-none focus:bg-blue-50
                  ${item.isPage && currentPage === item.id ? 'font-bold bg-blue-50' : ''}
                `}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for fixed header on mobile */}
      <div className="h-20 md:h-0" />
    </>
  )
}

export default Navbar