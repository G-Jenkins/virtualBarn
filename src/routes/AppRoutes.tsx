import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy load pages
const Home = lazy(() => import('../pages/Home'))
const Animals = lazy(() => import('../pages/Animals'))
const AnimalTypeList = lazy(() => import('../pages/AnimalTypeList'))
const AnimalDetail = lazy(() => import('../pages/AnimalDetail'))
const About = lazy(() => import('../pages/About'))
const Programs = lazy(() => import('../pages/Programs'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/:type" element={<AnimalTypeList />} />
        <Route path="/animals/:type/:id" element={<AnimalDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes