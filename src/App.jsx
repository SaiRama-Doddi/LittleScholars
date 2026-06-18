import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import AdmissionsPage from './pages/AdmissionsPage'
import EnrollPage from './pages/EnrollPage'
import Footer from './components/Footer'

// ScrollToTop component to reset viewport scroll position on navigate
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-outfit select-none scroll-smooth">
      <ScrollToTop />
      <div>
        {/* Header Block */}
        <TopBar />
        <Navbar />

        {/* Routed Sections */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
        </Routes>
      </div>

      {/* Footer Block */}
      <Footer />
    </div>
  )
}
