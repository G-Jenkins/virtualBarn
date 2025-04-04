import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, FileVideo, Linkedin } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="bg-gentle-green text-white mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Newsletter Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">News, Alerts, Stories & More</h3>
          <input
            type="email"
            placeholder="Email *"
            className="w-full md:w-64 px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-lg">
          {/* Column 1 */}
          <div className="space-y-3">
            <Link to="/" className="block text-white hover:text-white/80">Home</Link>
            <Link to="/visit" className="block text-white hover:text-white/80">Visit</Link>
            <Link to="/animals" className="block text-white hover:text-white/80">Animals</Link>
            <Link to="/programs" className="block text-white hover:text-white/80">Programs</Link>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <Link to="/about" className="block text-white hover:text-white/80">About</Link>
            <Link to="/events" className="block text-white hover:text-white/80">Events</Link>
            <Link to="/media" className="block text-white hover:text-white/80">Media</Link>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <Link to="/donate" className="block text-white hover:text-white/80">Donate</Link>
            <Link to="/store" className="block text-white hover:text-white/80">Store</Link>
            <Link to="/help-us" className="block text-white hover:text-white/80">Help Us</Link>
            <Link to="/contact-us" className="block text-white hover:text-white/80">Contact Us</Link>
          </div>
        </div>

        {/* Rest of the footer remains the same */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Certification Logos */}
            <div className="flex items-center gap-4">
              <img src="/src/assets/footer01.jpg" alt="Charity Navigator" className="h-20" />
              <img src="/src/assets/footer02.png" alt="Seal of Transparency" className="h-20" />
              <img src="/src/assets/footer03.png" alt="Global Federation" className="h-20" />
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-7 h-7" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-7 h-7" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <span className="sr-only">YouTube</span>
                <Youtube className="w-7 h-7" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <span className="sr-only">TikTok</span>
                <FileVideo className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="text-center mt-8 text-base">
            <p>© 2010 - 2025, The Gentle Barn Foundation. All Rights Reserved</p>
            <p className="mt-2">The Gentle Barn 501(c)(3) tax ID is #95-4776451</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="text-white hover:text-white/80">Privacy Policy</a>
              <a href="/disclosure" className="text-white hover:text-white/80">Disclosure Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer