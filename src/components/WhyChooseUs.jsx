import { Check, Monitor, ShieldCheck, Music, Palette, Book, ToyBrick } from 'lucide-react'
import childImg from '../assets/painted_hands_child.webp'

export default function WhyChooseUs() {
  const points = [
    'Safe, Secure & Hygienic Environment',
    'Activity Based Learning',
    'Individual Attention',
    'Modern Infrastructure',
    'Affordable Fee Structure',
  ]

  const facilities = [
    {
      title: 'Smart Classrooms',
      desc: 'Digital learning made easy',
      icon: <Monitor className="w-8 h-8 text-blue-500" />,
      bgClass: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Indoor & Outdoor Play',
      desc: 'Spacious area for active play',
      icon: <ToyBrick className="w-8 h-8 text-orange-500" />,
      bgClass: 'bg-orange-50 border-orange-100',
    },
    {
      title: 'Music & Dance',
      desc: 'Encouraging rhythm and creativity',
      icon: <Music className="w-8 h-8 text-pink-500" />,
      bgClass: 'bg-pink-50 border-pink-100',
    },
    {
      title: 'Art & Craft',
      desc: 'Inspiring young creators',
      icon: <Palette className="w-8 h-8 text-emerald-500" />,
      bgClass: 'bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Library Corner',
      desc: 'Building a love for reading',
      icon: <Book className="w-8 h-8 text-purple-500" />,
      bgClass: 'bg-purple-50 border-purple-100',
    },
    {
      title: 'CCTV Surveillance',
      desc: 'Safety and security for every child',
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
      bgClass: 'bg-rose-50 border-rose-100',
    },
  ]

  return (
    <section id="facilities" className="py-16 md:py-24 bg-white font-outfit relative overflow-hidden scroll-mt-28">
      
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Value Propositions & Child Image */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-sm font-bold text-brand-orange uppercase tracking-wider font-fredoka bg-brand-lightyellow px-3 py-1.5 rounded-md border border-brand-yellow/30">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-brand-blue mt-4 leading-tight">
                A Perfect Place For Your <br />
                <span className="text-brand-orange">Child To Learn & Grow</span>
              </h2>
            </div>

            <p className="text-black text-base md:text-lg font-normal leading-relaxed">
              We provide a nurturing environment that supports cognitive, social, emotional and physical development with love and care.
            </p>

            {/* Checkmarks List */}
            <div className="space-y-3 pt-2">
              {points.map((point, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full flex-shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-black font-semibold text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>

            {/* Styled Child Image */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <div className="relative group max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow to-brand-orange rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition"></div>
                <img
                  src={childImg}
                  alt="Happy Child with Painted Hands"
                  className="relative w-full h-[250px] object-cover rounded-3xl shadow-lg border border-slate-100 transform hover:scale-[1.02] transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Facilities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className={`border-2 rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-white ${fac.bgClass} flex flex-col items-center sm:items-start text-center sm:text-left`}
              >
                <div className="p-3.5 rounded-2xl bg-white shadow-md border border-slate-100/50 mb-4">
                  {fac.icon}
                </div>
                <h3 className="text-lg font-bold font-fredoka text-black mb-1.5">
                  {fac.title}
                </h3>
                <p className="text-black text-sm leading-relaxed font-medium">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
