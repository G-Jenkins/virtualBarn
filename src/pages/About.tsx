import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('founders-message')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About The Gentle Barn</h1>

      <Tabs defaultValue="founders-message" className="space-y-8">
        <TabsList className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg">
          <TabsTrigger
            value="founders-message"
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'founders-message' ? 'bg-gentle-green text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('founders-message')}
          >
            Founders Message
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'history' ? 'bg-gentle-green text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('history')}
          >
            A Brief History
          </TabsTrigger>
          <TabsTrigger
            value="board"
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'board' ? 'bg-gentle-green text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('board')}
          >
            Our Board of Directors
          </TabsTrigger>
          <TabsTrigger
            value="staff"
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'staff' ? 'bg-gentle-green text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('staff')}
          >
            Key Staff
          </TabsTrigger>
          <TabsTrigger
            value="financials"
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'financials' ? 'bg-gentle-green text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('financials')}
          >
            Financial Statements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="founders-message" className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">A Message from Our Founders</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-6">
              <img src="/src/assets/placeholder-founders.jpg" alt="Founders" className="rounded-lg shadow-md" />
              <p className="text-sm text-gray-600 mt-2">Ellie & Jay, Founders of The Gentle Barn</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Our Journey</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">1999 - The Beginning</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">2002 - Growing Together</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="board" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Board Member Name</h3>
                <p className="text-gentle-teal mb-4">Position/Role</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Staff Member Name</h3>
                <p className="text-gentle-teal mb-4">Position</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="financials" className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Financial Transparency</h2>
            <p>
              We are committed to transparency and responsible stewardship of our resources.
              Below you'll find our annual financial statements and Form 990s.
            </p>
            <div className="space-y-4 mt-8">
              {[2023, 2022, 2021, 2020].map((year) => (
                <div key={year} className="flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold">{year}</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:underline">Form 990</a>
                    <a href="#" className="text-blue-600 hover:underline">Annual Report</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AboutPage