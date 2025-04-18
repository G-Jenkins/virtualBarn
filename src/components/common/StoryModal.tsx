import { useState } from 'react'
import Modal from './Modal'
import { Animal } from '../../types/animal'
import { Facebook, Twitter, Instagram, Link as LinkIcon, Copy } from 'lucide-react'

interface StoryModalProps {
  isOpen: boolean
  onClose: () => void
  animal: Animal
}

const StoryModal = ({ isOpen, onClose, animal }: StoryModalProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const shareUrl = `${window.location.origin}/animals/${animal.type}/${animal.id}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const socialShareButtons = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`Meet ${animal.name} at The Gentle Barn!`)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#', // Instagram doesn't support direct sharing
      color: 'bg-pink-600 hover:bg-pink-700'
    }
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Share ${animal.name}'s Story`}>
      <div className="space-y-6">
        <p className="text-gray-600">
          Help spread the word about {animal.name}'s journey and inspire others to support animal rescue.
        </p>

        {/* Social Media Buttons */}
        <div className="grid grid-cols-3 gap-4">
          {socialShareButtons.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-colors`}
            >
              <social.icon size={24} />
              <span className="text-sm font-medium">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link Section */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2">
            <LinkIcon className="text-gray-500" size={20} />
            <span className="text-sm text-gray-600">Or copy the link</span>
          </div>
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 border rounded-lg text-sm"
            />
            <button
              onClick={handleCopyLink}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
            >
              {isCopied ? (
                <>
                  <Copy size={16} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default StoryModal
