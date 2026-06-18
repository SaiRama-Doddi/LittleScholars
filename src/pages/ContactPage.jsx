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
  Navigation
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
    <div className="bg-[#f8fafc] font-outfit min-h-screen pb-16 animate-page-fade">
      
      {/* 1. HERO BANNER SECTION (White background with blue wavy divider) */}
      <section className="relative bg-white overflow-hidden pt-8 md:pt-12 pb-0">
        
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

        {/* Floating Stars (Near Kids Head - Top Right) */}
        <div className="absolute top-8 right-6 md:top-12 md:right-20 text-brand-yellow flex space-x-1 animate-pulse-slow">
          <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
          <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow mt-3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Column: Heading and Text */}
            <div className="lg:col-span-6 pb-16 md:pb-24 lg:pb-32 text-center lg:text-left space-y-4 md:space-y-6">
              <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue leading-tight tracking-tight uppercase">
                Contact Us
              </h1>
              <h2 className="font-fredoka text-xl sm:text-2xl md:text-3xl font-bold text-brand-orange">
                We'd Love To Hear From You!
              </h2>
              
              {/* Star Icon below subtitle */}
              <div className="flex justify-center lg:justify-start">
                <Star className="w-6 h-6 fill-brand-yellow text-brand-yellow animate-pulse" />
              </div>

              <p className="text-black text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal relative">
                Have questions or want to know more about our programs? We're here to help you!
                
                {/* Small star doodle floating to the right of text */}
                <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-brand-yellow hidden xl:inline-block animate-pulse-slow">
                  <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                </span>
              </p>
            </div>

            {/* Right Column: Kids Playing with Phones (Stretches to top of hero, cut by wave on bottom) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 relative">
              <img 
                src={kidsImg} 
                alt="Little Scholars Preschool Contact Banner" 
                className="w-full max-w-md md:max-w-xl h-auto max-h-[300px] sm:max-h-[450px] lg:max-h-[500px] object-contain pointer-events-none select-none"
              />
            </div>

          </div>
        </div>

        {/* Smooth Wavy Divider (z-20, yellow accent sits behind blue but peeks higher) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] lg:h-[130px]">
            {/* Yellow Accent Wave (peaks slightly higher) */}
            <path d="M0,82 C360,152 720,12 1080,112 C1260,142 1380,102 1440,82 L1440,160 L0,160 Z" fill="#fab818"></path>
            {/* Blue Main Wave */}
            <path d="M0,90 C360,160 720,20 1080,120 C1260,150 1380,110 1440,90 L1440,160 L0,160 Z" fill="#0c2b5c" className="fill-brand-blue"></path>
          </svg>
        </div>

      </section>

      {/* 2. MAIN LAYOUT (Get In Touch & Send Message Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Get In Touch */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-fredoka text-xl font-bold text-brand-blue tracking-wider uppercase">
                Get In Touch
              </h2>
              <div className="h-0.5 w-12 bg-brand-yellow mt-1" />
            </div>

            <div className="space-y-4">
              {/* Location Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-brand-blue text-base">Our Location</h3>
                  <p className="text-black text-sm mt-1 leading-relaxed font-normal">
                    Plot No:14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam - 532005
                  </p>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-brand-blue text-base">Phone Numbers</h3>
                  <p className="text-black text-sm mt-1 font-normal">
                    9492 8484 89 <br />
                    9491 7373 99
                  </p>
                </div>
              </div>

              {/* Email Address Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-brand-blue text-base">Email Address</h3>
                  <p className="text-black text-sm mt-1 font-normal">
                    littlescholarsips@gmail.com
                  </p>
                </div>
              </div>

              {/* School Timings Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-brand-blue text-base">School Timings</h3>
                  <p className="text-black text-sm mt-1 font-normal leading-relaxed">
                    Monday - Saturday : 8:30 AM - 5:30 PM <br />
                    Sunday : Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us A Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100/80 relative">
              
              {/* Form Title */}
              <div className="mb-6 pb-2 relative">
                <h3 className="font-fredoka text-lg font-bold text-brand-blue tracking-wider uppercase">
                  Send Us A Message
                </h3>
                <div className="absolute bottom-0 left-0 h-[3px] w-14 bg-brand-yellow" />
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                      <Tag className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-brand-blue">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button (Yellow background, centered text, send arrow icon on right) */}
                  <button
                    type="submit"
                    className="w-full bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-fredoka font-bold py-3.5 px-6 rounded-xl flex justify-between items-center transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
                  >
                    <span className="w-full text-center pl-4">Send Message</span>
                    <Send className="w-4 h-4 flex-shrink-0" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 h-[400px]">
          {/* Details Overlay Card */}
          <div className="absolute top-4 left-4 right-4 md:right-auto md:w-80 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-slate-100 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-brand-blue text-brand-yellow p-2 rounded-xl flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-fredoka font-bold text-brand-blue text-sm">
                  Little Scholars International Preschool
                </h4>
                <p className="text-black text-xs mt-1 leading-relaxed font-semibold">
                  Plot No:14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam - 532005
                </p>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Little+Scholars+International+Preschool+Kalki+Nagar+Srikakulam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-blue hover:bg-brand-orange text-white font-bold py-2 px-4 rounded-xl flex justify-center items-center space-x-2 font-fredoka text-xs shadow transition-colors"
            >
              <span>Get Directions</span>
              <Navigation className="w-3.5 h-3.5 fill-current rotate-45" />
            </a>
          </div>

          {/* Google Map embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.0673410714777!2d83.8962657!3d18.3005886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c1507f35a5135%3A0xc48c089c17df20b0!2sKalki%20Nagar%2C%20Srikakulam%2C%20Andhra%20Pradesh%20532001!5e0!3m2!1sen!2sin!4v1718698000000!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Little Scholars International Preschool Srikakulam Map"
          />
        </div>
      </section>

      {/* 4. FEATURES BADGES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white border-2 border-slate-200 rounded-3xl py-8 px-6 md:px-10 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Friendly Environment */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 pb-4 sm:pb-0 sm:border-r border-slate-200 last:border-0">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Users className="w-5 h-5 text-brand-yellow" />
              </div>
              <div>
                <h4 className="font-fredoka font-bold text-brand-blue text-sm">Friendly Environment</h4>
                <p className="text-black text-xs mt-0.5 font-semibold">
                  A warm and welcoming place for every child
                </p>
              </div>
            </div>

            {/* Safe & Secure */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 pb-4 sm:pb-0 sm:border-r border-slate-200 last:border-0">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Shield className="w-5 h-5 text-brand-yellow" />
              </div>
              <div>
                <h4 className="font-fredoka font-bold text-brand-blue text-sm">Safe & Secure</h4>
                <p className="text-black text-xs mt-0.5 font-semibold">
                  Your child's safety is our top priority
                </p>
              </div>
            </div>

            {/* Quality Education */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 pb-4 sm:pb-0 lg:border-r border-slate-200 last:border-0">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
              </div>
              <div>
                <h4 className="font-fredoka font-bold text-brand-blue text-sm">Quality Education</h4>
                <p className="text-black text-xs mt-0.5 font-semibold">
                  Learning through play and exploration
                </p>
              </div>
            </div>

            {/* Caring Teachers */}
            <div className="flex items-center space-x-4 last:border-0">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Heart className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
              </div>
              <div>
                <h4 className="font-fredoka font-bold text-brand-blue text-sm">Caring Teachers</h4>
                <p className="text-black text-xs mt-0.5 font-semibold">
                  Experienced and loving educators
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
