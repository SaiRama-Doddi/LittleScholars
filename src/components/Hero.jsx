import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Phone, MapPin } from 'lucide-react'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

export default function Hero() {
  const banners = [banner2, banner3]
  const [currentSlide, setCurrentSlide] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  return (
    <section id="home" className="relative bg-[#f0f7ff] overflow-hidden">
      {/* Slider Wrapper - Perfectly responsive aspect ratio */}
      <div className="relative w-full aspect-[2.45/1] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={banner}
              alt={`Preschool Banner ${index + 1}`}
              className="w-full h-full object-cover object-top"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Slider Navigation Arrows - Scaled for responsiveness */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/40 hover:bg-white/80 p-1.5 sm:p-2 md:p-3 rounded-full text-brand-blue transition-all duration-200 focus:outline-none"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/40 hover:bg-white/80 p-1.5 sm:p-2 md:p-3 rounded-full text-brand-blue transition-all duration-200 focus:outline-none"
          aria-label="Next banner"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Navigation Indicator Dots - Adjusted positions */}
        <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-brand-yellow w-4 sm:w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Information Overlay / Strip - Highly Responsive */}
      <div className="relative z-30 bg-brand-blue text-white py-4 px-6 md:py-6 md:px-12 max-w-6xl mx-auto md:-mt-10 md:rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border border-white/10">
        
        {/* Contact Numbers */}
        <div className="flex items-center space-x-4">
          <div className="bg-brand-yellow p-3 rounded-full text-brand-blue shadow-inner">
            <Phone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] text-brand-yellow font-bold uppercase tracking-wider">Call For Admissions</div>
            <a href="tel:9492848489" className="text-lg md:text-xl font-fredoka font-bold hover:text-brand-yellow transition-colors">
              9492 8484 89 <span className="text-white/40 font-normal mx-1">|</span> 9491 7373 99
            </a>
          </div>
        </div>

        {/* Address Location */}
        <div className="flex items-center space-x-4 max-w-lg">
          <div className="bg-brand-yellow p-3 rounded-full text-brand-blue shadow-inner">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] text-brand-yellow font-bold uppercase tracking-wider">Our Location</div>
            <p className="text-sm md:text-base font-outfit text-slate-100 leading-tight">
              Plot No: 14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam - 532005
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
