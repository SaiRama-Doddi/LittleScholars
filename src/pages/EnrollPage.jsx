import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  User, 
  Calendar, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Users, 
  ClipboardList, 
  Heart, 
  Smile, 
  BookOpen, 
  Sparkles, 
  Award,
  Send,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  ChevronRight
} from 'lucide-react'
import kidsImg from '../assets/enroll_hero_kids.png'

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    program: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    additionalInfo: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enrollment Form Submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({
        childName: '',
        dob: '',
        program: '',
        parentName: '',
        phone: '',
        email: '',
        address: '',
        additionalInfo: ''
      })
      setIsSubmitted(false)
    }, 5000)
  }

  const reasons = [
    {
      title: 'Safe & Secure',
      desc: 'A safe and secure environment for your child.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Qualified Teachers',
      desc: 'Experienced and caring teachers dedicated to kids.',
      icon: <User className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Holistic Learning',
      desc: 'Focus on overall development through fun and learning.',
      icon: <BookOpen className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Modern Classrooms',
      desc: 'Smart classrooms with age-appropriate infrastructure.',
      icon: <Award className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Individual Attention',
      desc: 'Personalized care and attention for every child.',
      icon: <Heart className="w-6 h-6 text-brand-blue" />
    },
    {
      title: 'Happy Environment',
      desc: 'A joyful and nurturing place where children love to learn.',
      icon: <Smile className="w-6 h-6 text-brand-blue" />
    }
  ]

  const steps = [
    {
      num: '01',
      title: 'Enquiry',
      desc: 'Fill the enquiry form or contact us.',
      icon: <FileText className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '02',
      title: 'Counselling',
      desc: 'Our team will guide you about the best program.',
      icon: <Users className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '03',
      title: 'Submission',
      desc: 'Submit the admission form with required documents.',
      icon: <ClipboardList className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '04',
      title: 'Confirmation',
      desc: 'We verify the details and confirm your admission.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '05',
      title: 'Welcome',
      desc: "Welcome to Little Scholars family! Let's begin.",
      icon: <Smile className="w-6 h-6 text-brand-blue" />
    }
  ]

  return (
    <div className="bg-[#f8fafc] font-outfit min-h-screen pb-16 animate-page-fade">
      
      {/* 1. HERO BANNER & FORM SECTION */}
      <section className="relative bg-white overflow-hidden pt-8 md:pt-12 pb-16 lg:pb-20">
        
        {/* Paper Airplane Doodle */}
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

        {/* Floating Star */}
        <div className="absolute top-8 left-1/3 text-brand-yellow animate-pulse-slow">
          <svg className="w-6 h-6 fill-brand-yellow text-brand-yellow" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading and Kids Image */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col justify-between h-full">
              <div className="space-y-4">
                {/* Enroll Now capsule badge */}
                <div className="inline-block bg-brand-yellow text-brand-blue text-xs md:text-sm font-fredoka font-bold px-5 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                  Enroll Now
                </div>

                <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue leading-tight tracking-tight">
                  Give Your Child <br />
                  The Best Start
                </h1>
                
                <h2 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-bold text-brand-orange">
                  For A Bright Future
                </h2>

                <p className="text-black text-sm md:text-base max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
                  Join Little Scholars International Preschool where learning is fun, safe and meaningful.
                </p>
              </div>

              {/* Kids playing illustration */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <img 
                  src={kidsImg} 
                  alt="Little Scholars Preschool Students" 
                  className="w-full max-w-md md:max-w-lg h-auto object-contain pointer-events-none select-none"
                />
              </div>
            </div>

            {/* Right Column: Enrollment Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/80">
                
                {/* Form Title */}
                <div className="text-center mb-6">
                  <h3 className="font-fredoka text-xl font-bold text-brand-blue uppercase tracking-wide">
                    Enroll Your Child Today!
                  </h3>
                  <p className="text-xs text-black mt-1 font-medium">
                    Fill in the details below and our team will get in touch with you.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-16 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="font-fredoka font-bold text-slate-800 text-lg">Enquiry Submitted!</h4>
                    <p className="text-black max-w-sm font-semibold text-xs">
                      Thank you. We have received your enrollment inquiry. Our admissions office will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Child Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="childName"
                        required
                        placeholder="Child's Full Name"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="dob"
                        required
                        placeholder="Date of Birth"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => (e.target.value === '' ? (e.target.type = 'text') : null)}
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Program Select */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <select
                        name="program"
                        required
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Program</option>
                        <option value="daycare">Day Care (1 - 2.5 Years)</option>
                        <option value="playgroup">Play Group (1.5 - 2.5 Years)</option>
                        <option value="nursery">Nursery (2.5 - 3.5 Years)</option>
                        <option value="junior-kg">Junior KG (3.5 - 4.5 Years)</option>
                        <option value="senior-kg">Senior KG (4.5 - 5.5 Years)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>

                    {/* Parent Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="parentName"
                        required
                        placeholder="Parent's Full Name"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Address */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-blue">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="address"
                        required
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div className="relative">
                      <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-brand-blue">
                        <FileText className="w-4 h-4" />
                      </div>
                      <textarea
                        name="additionalInfo"
                        rows="3"
                        placeholder="Additional Information (Optional)"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-xl py-3 pl-11 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-fredoka font-bold py-3.5 px-6 rounded-xl flex justify-between items-center transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
                    >
                      <span className="w-full text-center pl-4">Submit Enquiry</span>
                      <Send className="w-4 h-4 flex-shrink-0" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Soft Wave Divider to separate white background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]">
            <path d="M0,90 C360,130 720,50 1080,110 C1260,120 1380,105 1440,90 L1440,120 L0,120 Z" fill="#f8fafc"></path>
          </svg>
        </div>

      </section>

      {/* 2. WHY CHOOSE LITTLE SCHOLARS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-30">
        <div className="text-center space-y-2 mb-10">
          <div className="flex justify-center items-center space-x-2 text-brand-yellow">
            <span>★</span>
            <h2 className="font-fredoka text-xl font-bold text-brand-blue tracking-wider uppercase">
              Why Choose Little Scholars?
            </h2>
            <span>★</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md hover:border-brand-blue/15 transition-all">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-blue flex-shrink-0 shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-fredoka font-bold text-brand-blue text-xs">{item.title}</h3>
              <p className="text-black text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR ENROLLMENT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="text-center space-y-2 mb-10">
          <div className="flex justify-center items-center space-x-2 text-brand-orange">
            <span>&raquo;</span>
            <h2 className="font-fredoka text-xl font-bold text-brand-blue tracking-wider uppercase">
              Our Enrollment Process
            </h2>
            <span>&laquo;</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <div key={step.num} className="flex flex-col items-center text-center space-y-3 relative">
              
              {/* Step circle container */}
              <div className="w-16 h-16 rounded-full bg-white border border-slate-100/80 shadow-sm flex items-center justify-center relative">
                {step.icon}
                
                {/* Step badge */}
                <div className="absolute -bottom-1 right-0 w-6 h-6 rounded-full bg-brand-blue text-white text-[10px] font-bold flex items-center justify-center shadow">
                  {step.num}
                </div>
              </div>

              <h3 className="font-fredoka font-bold text-brand-blue text-sm">{step.title}</h3>
              <p className="text-black text-xs leading-relaxed max-w-[180px] font-medium">{step.desc}</p>

              {/* Flow Arrows */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop arrow */}
                  <div className="hidden md:block absolute -right-4 top-4 z-10 text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  {/* Mobile arrow */}
                  <div className="md:hidden block py-2 text-slate-300">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* 4. LIMITED SEATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-brand-blue text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center shadow-lg relative overflow-hidden">
          
          {/* Background shapes */}
          <div className="absolute -bottom-6 -right-6 text-white/5 pointer-events-none select-none">
            <svg className="w-32 h-32 rotate-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left z-10">
            {/* Smiling Star Mascot */}
            <div className="w-16 h-16 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-yellow flex-shrink-0 animate-bounce" style={{ animationDuration: '4s' }}>
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 3.73l-1.9 3.86-4.25.62 3.08 3 0 .01-.73 4.23 3.8-2 3.8 2-.73-4.23 3.08-3-4.25-.62L12 5.73z" />
              </svg>
            </div>
            
            <div>
              <h3 className="font-fredoka font-bold text-lg text-brand-yellow uppercase tracking-wide">
                Limited Seats Available!
              </h3>
              <p className="text-slate-250 text-xs font-normal max-w-sm mt-0.5">
                Hurry up and secure your child's admission today.
              </p>
            </div>
          </div>

          {/* Contact Details & Button */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 md:mt-0 z-10 w-full md:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-brand-blue text-white font-fredoka font-bold py-2.5 px-6 rounded-xl transition-all duration-300 text-xs text-center"
            >
              Contact Us
            </Link>

            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center flex-shrink-0 shadow shadow-brand-yellow/30 animate-pulse">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-brand-yellow font-bold uppercase tracking-wider">Call For Admissions</div>
                <a href="tel:9492848489" className="text-sm font-fredoka font-bold hover:text-brand-yellow transition-colors whitespace-nowrap">
                  9492 8484 89 / 9491 7373 99
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
