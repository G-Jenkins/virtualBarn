import { BrowserRouter as Router } from 'react-router-dom'
import { AnimalProvider } from './context/AnimalContext'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <AnimalProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow w-full max-w-full mx-auto bg-white">
            <Navbar />
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AnimalProvider>
    </Router>
  )
}

export default App
