import { Heart, Compass, Lightbulb, BookOpen, Baby, Calendar } from 'lucide-react'

export default function Programs() {
  const programList = [
    {
      title: 'Day Care',
      age: '1.5 - 3 Years',
      desc: 'A safe and caring space where children feel comfortable, secure and loved.',
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      colorClass: 'bg-pink-50/70 border-pink-100 text-pink-700',
      badgeBg: 'bg-pink-100 text-pink-800',
      iconBg: 'bg-pink-100',
    },
    {
      title: 'Play Group',
      age: '2 - 3 Years',
      desc: 'Fun-filled activities that encourage play, social skills and early learning.',
      icon: <Baby className="w-8 h-8 text-emerald-500" />,
      colorClass: 'bg-emerald-50/70 border-emerald-100 text-emerald-700',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      iconBg: 'bg-emerald-100',
    },
    {
      title: 'Nursery',
      age: '3 - 4 Years',
      desc: 'Building strong basics through structured learning and exciting experiences.',
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      colorClass: 'bg-amber-50/70 border-amber-100 text-amber-700',
      badgeBg: 'bg-amber-100 text-amber-800',
      iconBg: 'bg-amber-100',
    },
    {
      title: 'Junior KG',
      age: '4 - 5 Years',
      desc: 'Encouraging curiosity, creativity and independence in young learners.',
      icon: <Compass className="w-8 h-8 text-sky-500" />,
      colorClass: 'bg-sky-50/70 border-sky-100 text-sky-700',
      badgeBg: 'bg-sky-100 text-sky-800',
      iconBg: 'bg-sky-100',
    },
    {
      title: 'Senior KG',
      age: '5 - 6 Years',
      desc: 'Preparing children for the future with skills, confidence and knowledge.',
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      colorClass: 'bg-indigo-50/70 border-indigo-100 text-indigo-700',
      badgeBg: 'bg-indigo-100 text-indigo-800',
      iconBg: 'bg-indigo-100',
    },
  ]

  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50 font-outfit relative overflow-hidden">
      
      {/* Background doodles */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-orange uppercase tracking-wider font-fredoka bg-brand-lightyellow px-3 py-1.5 rounded-md border border-brand-yellow/30">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-brand-blue mt-4 leading-tight">
            Programs Designed For Every Stage <br />
            <span className="text-brand-orange">Of Your Child's Growth</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4 rounded-full" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {programList.map((prog, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between border-2 rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${prog.colorClass} group bg-white`}
            >
              <div>
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${prog.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  {prog.icon}
                </div>

                {/* Badge */}
                <div className="mb-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold font-fredoka uppercase tracking-wider ${prog.badgeBg}`}>
                    <Calendar className="w-3 h-3 mr-1" />
                    {prog.age}
                  </span>
                </div>

                {/* Program Title */}
                <h3 className="text-xl font-bold font-fredoka text-slate-800 mb-3 group-hover:text-brand-blue transition-colors">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                  {prog.desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="text-xs font-bold tracking-wider uppercase flex items-center group-hover:underline text-slate-700 hover:text-brand-blue transition-colors"
                >
                  Enroll Interest &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-brand-blue hover:bg-brand-orange text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-fredoka"
          >
            View All Programs
          </a>
        </div>

      </div>
    </section>
  )
}
