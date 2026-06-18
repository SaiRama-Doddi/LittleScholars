import { Link } from 'react-router-dom'
import programDaycare from '../assets/program_daycare.png'
import programPlaygroup from '../assets/program_playgroup.png'
import programNursery from '../assets/program_nursery.png'
import programJuniorKG from '../assets/program_juniorkg.png'
import programSeniorKG from '../assets/program_seniorkg.png'

// Custom handdrawn-style SVG doodles to match the mockup
const StarDoodle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.196-.612 1.04-.612 1.236 0l2.122 6.529a1 1 0 00.95.69h6.862c.643 0 .91.824.412 1.236l-5.553 4.035a1 1 0 00-.363 1.118l2.12 6.53c.197.612-.507 1.127-1.018.72l-5.553-4.036a1 1 0 00-1.175 0l-5.553 4.036c-.51.407-1.215-.108-1.018-.72l2.12-6.53a1 1 0 00-.362-1.118L2.05 11.954c-.498-.412-.232-1.236.875-1.236h6.862a1 1 0 00.95-.69L11.48 3.5z" />
  </svg>
)

const AirplaneDoodle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
)

const PencilDoodle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.83 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
)

export default function Programs() {
  const programList = [
    {
      title: 'Day Care',
      desc: 'A safe and caring space where children feel comfortable, secure and loved.',
      image: programDaycare,
      colorClass: 'bg-[#fff5f6] border-pink-200/90 hover:shadow-pink-100/60 hover:border-pink-300',
    },
    {
      title: 'Play Group',
      desc: 'Fun-filled activities that encourage play, social skills and early learning.',
      image: programPlaygroup,
      colorClass: 'bg-[#f4fbf7] border-emerald-200/90 hover:shadow-emerald-100/60 hover:border-emerald-300',
    },
    {
      title: 'Nursery',
      desc: 'Building strong basics through structured learning and exciting experiences.',
      image: programNursery,
      colorClass: 'bg-[#fffbf0] border-amber-200/90 hover:shadow-amber-100/60 hover:border-amber-300',
    },
    {
      title: 'Junior KG',
      desc: 'Encouraging curiosity, creativity and independence in young learners.',
      image: programJuniorKG,
      colorClass: 'bg-[#f0f7ff] border-blue-200/90 hover:shadow-blue-100/60 hover:border-blue-300',
    },
    {
      title: 'Senior KG',
      desc: 'Preparing children for the future with skills, confidence and knowledge.',
      image: programSeniorKG,
      colorClass: 'bg-[#fffbf2] border-orange-200/90 hover:shadow-orange-100/50 hover:border-orange-300',
    },
  ]

  return (
    <section id="programs" className="py-20 md:py-28 bg-gradient-to-b from-[#f8fbff] to-white font-outfit relative overflow-hidden scroll-mt-28">
      
      {/* Background handdrawn doodles to match the mockup */}
      <StarDoodle className="absolute top-[8%] left-[3%] text-brand-yellow/30 opacity-70 w-12 h-12 hidden lg:block animate-float-drift-1" />
      <AirplaneDoodle className="absolute top-[12%] left-[16%] text-sky-300/30 opacity-70 w-10 h-10 hidden lg:block animate-float-drift-2" />
      <StarDoodle className="absolute top-[16%] right-[18%] text-brand-yellow/25 opacity-70 w-8 h-8 hidden lg:block animate-float-drift-3" />
      <AirplaneDoodle className="absolute top-[8%] right-[4%] text-brand-yellow/30 opacity-70 w-12 h-12 hidden lg:block animate-float-drift-1" />
      
      <PencilDoodle className="absolute top-[48%] left-[1.5%] text-blue-300/30 opacity-70 w-12 h-12 hidden lg:block animate-float-drift-3" />
      <StarDoodle className="absolute bottom-[10%] left-[3.5%] text-pink-300/30 opacity-70 w-10 h-10 hidden lg:block animate-float-drift-2" />
      
      <div className="absolute top-[52%] right-[2%] text-purple-300/35 opacity-70 w-10 h-10 hidden lg:block animate-float-drift-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      </div>
      <StarDoodle className="absolute bottom-[15%] right-[3.5%] text-sky-300/30 opacity-70 w-10 h-10 hidden lg:block animate-float-drift-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="text-sm md:text-base font-bold text-[#fab818] tracking-widest uppercase">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-brand-blue mt-3 leading-tight tracking-tight">
            Programs Designed For Every Stage Of Your Child’s Growth
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 mb-16">
          {programList.map((prog, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center border rounded-3xl p-6 pt-10 pb-10 transition-all duration-500 transform hover:-translate-y-3.5 hover:shadow-2xl ${prog.colorClass} bg-white relative overflow-hidden`}
            >
              {/* Soft decorative background bubble */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />

              {/* 3D Toy Illustration Container */}
              <div className="w-24 h-24 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="max-w-full max-h-full object-contain filter drop-shadow-md" 
                />
              </div>

              {/* Program Title */}
              <h3 className="text-xl font-bold font-fredoka text-brand-blue mb-3">
                {prog.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                {prog.desc}
              </p>

              {/* View Details Link */}
              <Link
                to="/admissions"
                className="mt-6 text-xs font-bold uppercase tracking-wider text-[#0c2b5c] hover:text-brand-orange transition-colors flex items-center space-x-1"
              >
                <span>View Details</span>
                <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <div className="text-center">
          <Link
            to="/admissions"
            className="inline-block bg-[#0c2b5c] hover:bg-brand-orange text-white font-fredoka font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base"
          >
            View All Programs
          </Link>
        </div>

      </div>
    </section>
  )
}
