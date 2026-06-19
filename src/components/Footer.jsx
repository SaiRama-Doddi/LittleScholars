import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Phone, MapPin, Mail, Send, CheckCircle } from 'lucide-react'
import logoImg from '../assets/logo.jfif'

export default function Footer({ isCompact }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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
        navigate('/', { state: { scrollTo: targetId } })
      }
    }
  }

  if (isCompact) {
    return (
      <footer className="bg-[#051b3d] text-slate-300 py-3 font-outfit border-t border-slate-800/50 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-500 font-light text-center gap-1.5">
            <p>&copy; 2025 Little Scholars International Preschool. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <Link to="/" onClick={(e) => handleNavClick(e, '/#about')} className="hover:text-brand-yellow">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-brand-yellow">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enquiry Submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' })
      setSubmitted(false)
    }, 5000)
  }


  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Facilities', href: '/#facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const programs = [
    { name: 'Day Care', href: '/#programs' },
    { name: 'Play Group', href: '/#programs' },
    { name: 'Nursery', href: '/#programs' },
    { name: 'Junior KG', href: '/#programs' },
    { name: 'Senior KG', href: '/#programs' },
  ]

  return (
    <footer id="contact" className="bg-[#051b3d] text-slate-300 pt-10 md:pt-12 pb-6 font-outfit relative overflow-hidden">
      
      {/* Footer Top Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-700/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Col 1: Brand & Logo */}
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={(e) => handleNavClick(e, '/#home')} className="flex items-center space-x-3">
              <img
                src={logoImg}
                alt="Little Scholars Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-brand-yellow bg-white p-0.5"
              />
              <div className="flex flex-col">
                <span className="font-fredoka text-lg font-bold text-white uppercase leading-tight">
                  Little Scholars
                </span>
                <span className="text-[10px] text-brand-yellow font-semibold tracking-wider uppercase">
                  International Preschool
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Inspiring young minds through quality education, creativity and strong values for a brighter tomorrow.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center transition-all duration-300 text-white"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center transition-all duration-300 text-white"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center transition-all duration-300 text-white"
                aria-label="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.503a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.503 9.388.503 9.388.503s7.518 0 9.388-.503a3.003 3.003 0 0 0 2.11-2.11c.502-1.87.502-5.837.502-5.837s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-fredoka text-white font-bold text-lg mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm font-light">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-brand-yellow hover:pl-1 transition-all duration-200 flex items-center"
                  >
                    <span className="text-brand-yellow mr-2 font-bold">&raquo;</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h3 className="font-fredoka text-white font-bold text-lg mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow pb-2">
              Programs
            </h3>
            <ul className="space-y-3.5 text-sm font-light">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <Link
                    to={prog.href}
                    onClick={(e) => handleNavClick(e, prog.href)}
                    className="hover:text-brand-yellow hover:pl-1 transition-all duration-200 flex items-center"
                  >
                    <span className="text-brand-yellow mr-2 font-bold">&raquo;</span>
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="font-fredoka text-white font-bold text-lg mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Plot No:14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam - 532005
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <a href="tel:9492848489" className="hover:text-brand-yellow transition-colors">
                  9492 8484 89 / 9491 7373 99
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <a href="mailto:littlescholarsips@gmail.com" className="hover:text-brand-yellow transition-colors">
                  littlescholarsips@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Enquiry Form */}
          <div>
            <h3 className="font-fredoka text-white font-bold text-lg mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow pb-2">
              Enquire Now
            </h3>
            
            {submitted ? (
              <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 py-6">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
                <h4 className="font-fredoka font-bold text-white text-sm">Thank You!</h4>
                <p className="text-xs text-slate-400 font-light">Your enquiry was submitted. We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-yellow font-outfit"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-yellow font-outfit"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-yellow font-outfit"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-yellow font-outfit resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-bold py-2 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg font-fredoka text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Now</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-xs text-slate-500 font-light text-center">
          <p>&copy; 2025 Little Scholars International Preschool. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link to="/" onClick={(e) => handleNavClick(e, '/#about')} className="hover:text-brand-yellow">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-brand-yellow">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
