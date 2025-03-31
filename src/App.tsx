import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Animals from './components/Animals'
import AnimalTypeList from './components/AnimalTypeList'
import AnimalDetail from './components/AnimalDetail'
import { AnimalProvider } from './context/AnimalContext'

function App() {
  return (
    <Router>
      <AnimalProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />

          <main className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-10 bg-white mt-6 sm:mt-10 rounded shadow">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/animals/:type" element={<AnimalTypeList />} />
              <Route path="/animals/:type/:id" element={<AnimalDetail />} />
            </Routes>
          </main>

          {/* Footer component here when created */}
        </div>
      </AnimalProvider>
    </Router>
  )
}

export default App
