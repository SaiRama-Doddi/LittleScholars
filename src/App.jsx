import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import AdmissionsPage from './pages/AdmissionsPage'
import EnrollPage from './pages/EnrollPage'
import ProgramDetailsPage from './pages/ProgramDetailsPage'
import Footer from './components/Footer'
import FloatingBackgroundIcons from './components/FloatingBackgroundIcons'

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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-outfit select-none scroll-smooth relative overflow-x-hidden">
      <ScrollToTop />
      <FloatingBackgroundIcons />
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
          <Route path="/programs/:programId" element={<ProgramDetailsPage />} />
        </Routes>
      </div>

      {/* Footer Block */}
      <Footer />
    </div>
  )
}
