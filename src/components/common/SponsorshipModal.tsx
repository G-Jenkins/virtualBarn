import { useState } from 'react'
import Modal from './Modal'
import { Animal } from '../../types/animal'

interface SponsorshipModalProps {
  isOpen: boolean
  onClose: () => void
  animal: Animal
}

const SponsorshipModal = ({ isOpen, onClose, animal }: SponsorshipModalProps) => {
  const [sponsorshipType, setSponsorshipType] = useState<'monthly' | 'yearly'>('monthly')
  const [amount, setAmount] = useState<number>(25)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isRecurringConfirmed, setIsRecurringConfirmed] = useState(true)
  const [addDonationFee, setAddDonationFee] = useState(true)
  const [isGift, setIsGift] = useState(false)
  const [certificateOption, setCertificateOption] = useState<'none' | 'digital'>('digital')

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setCustomAmount(value)
    if (value) {
      setAmount(parseInt(value))
    }
  }

  const handleSponsorSubmit = () => {
    // Here you would integrate with a payment processor
    alert(`Sponsoring ${animal.name} with ${sponsorshipType} payment of $${amount}`)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Sponsor ${animal.name}`}>
      <div className="space-y-6 bg-gentle-green bg-opacity-30 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {/* Payment Frequency */}
            <div className="flex items-center gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 text-blue-600"
                  checked={sponsorshipType === 'monthly'}
                  onChange={() => setSponsorshipType('monthly')}
                />
                <span className="ml-2 text-lg">Monthly<span className="text-sm text-gray-600">(recurring)</span></span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 text-blue-600"
                  checked={sponsorshipType === 'yearly'}
                  onChange={() => setSponsorshipType('yearly')}
                />
                <span className="ml-2 text-lg">1yr</span>
              </label>
            </div>

            {/* Amount Options */}
            <div className="grid grid-cols-2 gap-3">
              {[15, 25, 50, 100].map((value) => (
                <button
                  key={value}
                  className={`py-3 px-4 rounded-md ${
                    amount === value && !customAmount
                      ? 'bg-teal-700 text-white'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                  onClick={() => handleAmountSelect(value)}
                >
                  ${value}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="flex">
              <div className="flex items-center px-3 bg-teal-600 text-white rounded-l-md">
                $
              </div>
              <input
                type="text"
                placeholder="Custom Amount ($15 min)"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="flex-1 py-2 px-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Recurring confirmation */}
            {sponsorshipType === 'monthly' && (
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isRecurringConfirmed}
                  onChange={() => setIsRecurringConfirmed(!isRecurringConfirmed)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="ml-2">I understand this will be a recurring monthly.</span>
              </label>
            )}

            {/* Transaction fee */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={addDonationFee}
                onChange={() => setAddDonationFee(!addDonationFee)}
                className="w-5 h-5 text-blue-600"
              />
              <span className="ml-2">Add $2/transaction to help cover fees.</span>
            </label>

            {/* Gift option */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isGift}
                onChange={() => setIsGift(!isGift)}
                className="w-5 h-5 text-blue-600"
              />
              <span className="ml-2 text-red-600 font-semibold">YES,</span>
              <span className="ml-1">this sponsorship is a gift</span>
            </label>
          </div>

          <div>
            {/* Animal Image */}
            <div className="rounded-lg overflow-hidden border-4 border-white shadow-md">
              <img
                src={animal.thumbnailUrl}
                alt={animal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Certificate Options */}
        <div className="pt-4 border-t border-gray-300">
          <div className="bg-teal-700 text-white px-4 py-2 inline-block">
            Certificate Options
          </div>
          <div className="mt-4 space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="certificate"
                checked={certificateOption === 'none'}
                onChange={() => setCertificateOption('none')}
                className="w-5 h-5 text-blue-600"
              />
              <div className="ml-2">
                <span className="text-lg">No Cert, Updates Only</span>
                <span className="text-sm italic ml-2">(Save GB Time, Money & Resources.)</span>
              </div>
            </label>
            <p className="text-sm ml-7">** No certificate or gift announcement will be issued!</p>

            <label className="flex items-center">
              <input
                type="radio"
                name="certificate"
                checked={certificateOption === 'digital'}
                onChange={() => setCertificateOption('digital')}
                className="w-5 h-5 text-blue-600"
              />
              <div className="ml-2">
                <span className="text-lg">Digital</span>
                <span className="text-sm italic ml-2">(Emailed PDF, 7-10 business days to receive)</span>
              </div>
            </label>
          </div>
        </div>

        {/* Honor Section */}
        <div className="pt-4 border-t border-gray-300">
          <div className="bg-teal-700 text-white px-4 py-2 inline-block">
            In {animal.name}'s Honor
          </div>
          <p className="mt-4 italic text-gray-700">
            As much as we love them, farm animals have shorter lives than we do. If in the
            unfortunate case they pass, please let us know how you would like to best honor
            {animal.name}.
          </p>
          <div className="mt-3">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue=""
            >
              <option value="" disabled>Convert to same/similar animal type</option>
              <option value="same">Same type of animal</option>
              <option value="similar">Similar animal</option>
              <option value="any">Any animal in need</option>
            </select>
          </div>
        </div>

        {/* Sponsor Now Button */}
        <button
          onClick={handleSponsorSubmit}
          disabled={!amount || (sponsorshipType === 'monthly' && !isRecurringConfirmed)}
          className="w-full py-3 px-6 text-lg font-bold text-gray-900 bg-yellow-400 rounded-md
            hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sponsor Now
        </button>

        <p className="text-sm italic text-center">
          *The ultimate use of your donation is at the discretion of The Gentle Barn and it's Board of Directors.
        </p>
      </div>
    </Modal>
  )
}

export default SponsorshipModal