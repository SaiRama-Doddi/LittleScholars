import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'
import logoImg from '../assets/logo.jfif'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Track scroll position to adjust styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Facilities', href: '/#facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.substring(2)
      
      if (location.pathname === '/') {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home first, and pass the target element in state
        navigate('/', { state: { scrollTo: targetId } })
      }
      setIsOpen(false)
    } else {
      // Normal routing page
      setIsOpen(false)
    }
  }

  // Determine if a link is active
  const isLinkActive = (href) => {
    if (href === '/gallery') {
      return location.pathname === '/gallery'
    }
    if (href === '/contact') {
      return location.pathname === '/contact'
    }
    if (href === '/admissions') {
      return location.pathname === '/admissions'
    }
    // For home anchors, highlight if on home page
    return location.pathname === '/' && href.startsWith('/#') && location.state?.scrollTo === href.substring(2)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & School Name */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/#home')} 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <img 
                src={logoImg} 
                alt="Little Scholars Logo" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-brand-blue shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <GraduationCap className="absolute -top-1 -right-1 w-5 h-5 text-brand-blue bg-white rounded-full p-0.5 border border-brand-blue/30 animate-bounce" />
            </div>
            <div className="flex flex-col">
              <span className="font-fredoka text-lg md:text-xl font-bold text-brand-blue leading-tight tracking-tight uppercase">
                Little Scholars
              </span>
              <span className="text-[10px] md:text-xs text-brand-orange font-semibold tracking-widest uppercase">
                International Preschool
              </span>
            </div>
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-semibold text-sm xl:text-base transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-300 font-outfit ${
                    active 
                      ? 'text-brand-orange after:w-full' 
                      : 'text-brand-blue hover:text-brand-orange after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Action Button & Hamburger */}
          <div className="flex items-center space-x-4">
            <Link
              to="/#admissions"
              onClick={(e) => handleNavClick(e, '/#admissions')}
              className="hidden sm:inline-block bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-fredoka text-sm"
            >
              Enroll Now
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-blue hover:text-brand-orange focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-fredoka text-lg font-bold text-brand-blue">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-brand-blue hover:text-brand-orange focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-semibold text-lg py-2 border-b border-slate-100 transition-colors font-outfit ${
                    active ? 'text-brand-orange' : 'text-brand-blue hover:text-brand-orange'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to="/#admissions"
            onClick={(e) => handleNavClick(e, '/#admissions')}
            className="block w-full text-center bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-bold py-3 rounded-full transition-all shadow-md font-fredoka"
          >
            Enroll Now
          </Link>
          <div className="text-center text-xs text-slate-400">
            Admissions Open 2026-27
          </div>
        </div>
      </div>

      {/* Overlay background for mobile menu drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}
    </nav>
  )
}
