import { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  User, 
  Tag, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Users, 
  Shield, 
  Star, 
  Heart,
  Navigation,
  X
} from 'lucide-react'
import kidsImg from '../assets/contact_hero_kids.webp'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact Form Submitted:', formData)
    
    // Construct the WhatsApp message text
    const messageText = `Hello Little Scholars International Preschool,

I would like to get in touch. Here are my details:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919701768381&text=${encodeURIComponent(messageText)}`
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-[#f8fafc] font-outfit flex-grow flex flex-col justify-between overflow-x-hidden animate-page-fade relative">
      
      {/* 1. HERO & CONTACT FORM SECTION (White background with blue wavy divider) */}
      <section className="relative bg-white overflow-hidden pt-2 md:pt-3 pb-8 md:pb-10 lg:pb-12 flex-grow flex items-center">
        
        {/* Paper Airplane Doodle (Top Left) */}
        <div className="absolute top-6 left-6 md:top-10 md:left-16 text-slate-300 pointer-events-none select-none animate-float">
          <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M10,80 C30,70 45,45 55,58 C65,72 75,55 98,35" strokeDasharray="4,4" />
            <g transform="translate(93, 23) rotate(-15)">
              <path d="M0,0 L20,8 L8,12 L0,0 Z" fill="none" />
              <path d="M20,8 L2,18 L8,12" />
              <path d="M8,12 L8,17 L11,14" />
            </g>
          </svg>
        </div>

        {/* Floating Star (Above Title area) */}
        <div className="absolute top-8 left-1/3 text-brand-yellow animate-pulse-slow">
          <Star className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
        </div>

        {/* Floating Stars (Top Right) */}
        <div className="absolute top-8 right-6 md:top-12 md:right-20 text-brand-yellow flex space-x-1 animate-pulse-slow">
          <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
          <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow mt-3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Left Column: Get In Touch */}
            <div className="lg:col-span-5 space-y-2.5 text-left">
              <div>
                <h1 className="font-fredoka text-3xl md:text-[36px] font-extrabold text-brand-blue leading-tight tracking-tight uppercase">
                  Get In Touch
                </h1>
                <h2 className="font-fredoka text-base sm:text-lg md:text-xl font-bold text-brand-orange mt-0.5">
                  We'd Love To Hear From You!
                </h2>
                <div className="h-0.5 w-16 bg-brand-yellow mt-2" />
              </div>

              <div className="space-y-2">
                {/* Location Card */}
                <div 
                  onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=18.292463,83.877146", "_blank")}
                  className="bg-white p-2.5 rounded-xl shadow-md border border-slate-100/80 flex items-center space-x-3 hover:shadow-lg transition-shadow duration-300 cursor-pointer group active:scale-[0.98] transition-all"
                  title="Click to get directions on Google Maps"
                >
                  <div className="w-8.5 h-8.5 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-brand-blue text-xs group-hover:text-brand-orange transition-colors">Our Location</h3>
                    <p className="text-black text-[10px] mt-0.5 leading-normal font-normal">
                      Plot No:14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam - 532005
                    </p>
                  </div>
                </div>

                {/* Phone Numbers Card */}
                <div className="bg-white p-2.5 rounded-xl shadow-md border border-slate-100/80 flex items-center space-x-3 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8.5 h-8.5 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Phone className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-brand-blue text-xs">Phone Numbers</h3>
                    <p className="text-black text-[10px] mt-0.5 font-normal">
                      9492 8484 89 / 9491 7373 99
                    </p>
                  </div>
                </div>

                {/* Email Address Card */}
                <div className="bg-white p-2.5 rounded-xl shadow-md border border-slate-100/80 flex items-center space-x-3 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8.5 h-8.5 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-brand-blue text-xs">Email Address</h3>
                    <p className="text-black text-[10px] mt-0.5 font-normal">
                      littlescholarsips@gmail.com
                    </p>
                  </div>
                </div>

                {/* Live Location Map */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 h-[130px] md:h-[140px] lg:h-[130px] w-full mt-2">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3788.1999265009176!2d83.8771455751861!3d18.29246308275736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDE3JzMyLjkiTiA4M8KwNTInNDcuMCJF!5e0!3m2!1sen!2sin!4v1781838976880!5m2!1sen!2sin" 
                    className="w-full h-full border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Little Scholars Live Location Map"
                  />
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=18.292463,83.877146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-brand-blue/90 hover:bg-brand-orange text-white font-bold py-1 px-3 rounded-lg flex items-center space-x-1.5 font-fredoka text-[9px] shadow-md transition-colors"
                  >
                    <span>Directions</span>
                    <Navigation className="w-2.5 h-2.5 fill-current rotate-45" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Send Us A Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-slate-100/80 relative">
                
                {/* Form Title */}
                <div className="mb-3 pb-1.5 relative">
                  <h3 className="font-fredoka text-base md:text-lg font-bold text-brand-blue tracking-wider uppercase">
                    Send Us A Message
                  </h3>
                  <div className="absolute bottom-0 left-0 h-[2.5px] w-12 bg-brand-yellow" />
                </div>

                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-fredoka font-bold text-slate-800 text-lg">Message Sent!</h4>
                    <p className="text-black max-w-sm font-semibold text-xs">
                      Thank you. Your message has been received, and we'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    {/* Name and Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {/* Name Input */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-blue">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg py-2 pl-9 pr-3.5 text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-blue">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg py-2 pl-9 pr-3.5 text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-blue">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg py-2 pl-9 pr-3.5 text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-blue">
                        <Tag className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg py-2 pl-9 pr-3.5 text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                      <div className="absolute top-2 flex items-start pointer-events-none text-brand-blue">
                        <div className="pl-3 pt-0.5">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                      </div>
                      <textarea
                        name="message"
                        rows="2"
                        required
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg py-2 pl-9 pr-3.5 text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-fredoka font-bold py-2.5 px-6 rounded-xl flex justify-between items-center transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none text-base"
                    >
                      <span className="w-full text-center pl-4">Send Message</span>
                      <Send className="w-4 h-4 flex-shrink-0" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Smooth Wavy Divider (z-20, yellow accent sits behind blue but peeks higher) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]">
            {/* Yellow Accent Wave (peaks slightly higher) */}
            <path d="M0,82 C360,152 720,12 1080,112 C1260,142 1380,102 1440,82 L1440,160 L0,160 Z" fill="#fab818"></path>
            {/* Blue Main Wave */}
            <path d="M0,90 C360,160 720,20 1080,120 C1260,150 1380,110 1440,90 L1440,160 L0,160 Z" fill="#0c2b5c" className="fill-brand-blue"></path>
          </svg>
        </div>

      </section>



    </div>
  )
}
