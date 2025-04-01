import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Animals from './components/Animals'
import AnimalTypeList from './components/AnimalTypeList'
import AnimalDetail from './components/AnimalDetail'
import { AnimalProvider } from './context/AnimalContext'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <AnimalProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />

          <main className="flex-grow w-full max-w-full mx-auto bg-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/animals/:type" element={<AnimalTypeList />} />
              <Route path="/animals/:type/:id" element={<AnimalDetail />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AnimalProvider>
    </Router>
  )
}

export default App
