import { ShieldAlert, Users, Award, Heart, BookOpen } from 'lucide-react'
import aboutSchoolImg from '../assets/about_school.webp'

export default function AboutUs() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      value: '10+',
      label: 'Years of Excellence',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: '500+',
      label: 'Happy Students',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-teal-500" />,
      value: '25+',
      label: 'Qualified Teachers',
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      value: '100%',
      label: 'Parent Satisfaction',
    },
  ]

  return (
    <section id="about" className="pt-6 md:pt-10 pb-10 md:pb-14 bg-white relative overflow-hidden font-outfit scroll-mt-28">
      
      {/* Decorative SVGs */}
      <div className="absolute top-10 left-5 text-brand-yellow/10 pointer-events-none select-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-5 text-brand-blue/5 pointer-events-none select-none">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Image & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Building Image with styling frame */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-yellow to-brand-orange rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-slate-100">
              <img
                src={aboutSchoolImg}
                alt="Little Scholars Preschool Building"
                className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
              />
            </div>
            {/* Tiny Badge */}
            <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-brand-blue font-bold px-6 py-3 rounded-2xl shadow-lg border border-white font-fredoka flex items-center space-x-2">
              <span className="text-xl">☀️</span>
              <span>Bright Future</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between gap-y-6 lg:gap-y-0 lg:h-[450px] py-1">
            <div>
              <span className="text-base font-bold text-brand-orange uppercase tracking-wider font-fredoka bg-brand-lightyellow px-4 py-2 rounded-md border border-brand-yellow/30">
                About Us
              </span>
              <h2 className="text-4xl md:text-[52px] font-fredoka font-bold text-brand-blue mt-5 leading-tight md:leading-[1.1]">
                Nurturing Young Minds <br />
                <span className="text-brand-orange">For A Bright Future</span>
              </h2>
            </div>

            <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed font-normal text-justify">
              At Little Scholars International Preschool, we believe every child is unique and has the potential to shine. Our safe, joyful and stimulating environment encourages children to learn, explore and grow with confidence.
            </p>

            <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed font-normal text-justify">
              We focus on holistic development through a blend of fun, learning, creativity and values, preparing them to be confident and creative future leaders.
            </p>

            {/* Core Features Highlight Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
              <div className="flex items-center space-x-2.5 text-brand-blue">
                <span className="bg-brand-lightyellow p-1.5 rounded-full text-brand-orange text-xs">✨</span>
                <span className="font-fredoka font-semibold text-sm sm:text-base">Child-Centric Learning</span>
              </div>
              <div className="flex items-center space-x-2.5 text-brand-blue">
                <span className="bg-brand-lightyellow p-1.5 rounded-full text-brand-orange text-xs">🛡️</span>
                <span className="font-fredoka font-semibold text-sm sm:text-base">100% Safe & Secure</span>
              </div>
              <div className="flex items-center space-x-2.5 text-brand-blue">
                <span className="bg-brand-lightyellow p-1.5 rounded-full text-brand-orange text-xs">🎨</span>
                <span className="font-fredoka font-semibold text-sm sm:text-base">Creative Activities</span>
              </div>
              <div className="flex items-center space-x-2.5 text-brand-blue">
                <span className="bg-brand-lightyellow p-1.5 rounded-full text-brand-orange text-xs">🏫</span>
                <span className="font-fredoka font-semibold text-sm sm:text-base">Modern Play Facilities</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid: Floating container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100/80 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-slate-100">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center text-center md:text-left space-y-3 md:space-y-0 md:space-x-4 p-4 lg:p-2 ${
                index >= 2 ? 'pt-6 lg:pt-2' : ''
              }`}
            >
              <div className="bg-slate-50 p-3.5 rounded-2xl shadow-inner flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-fredoka font-bold text-brand-blue leading-none">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-black font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
