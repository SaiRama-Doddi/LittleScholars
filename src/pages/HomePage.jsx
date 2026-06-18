import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Programs from '../components/Programs'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    // Check if redirect state requires scrolling to a specific anchor section
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo
      const element = document.getElementById(targetId)
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          // Reset the state in history so that refreshing doesn't scroll again
          window.history.replaceState({}, document.title)
        }, 150)
        return () => clearTimeout(timer)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <AboutUs />
      <Programs />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
    </>
  )
}
