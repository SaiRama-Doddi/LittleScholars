import { useState, useEffect } from 'react'
import { Quote, Star } from 'lucide-react'
import parentChildImg from '../assets/mother_child.webp'

export default function Testimonials() {
  const testimonials = [
    {
      text: "We are so happy with the caring teachers and safe environment. Our child loves coming to Little Scholars every day!",
      author: "Priya R.",
      role: "Parent of Aarav (Nursery)",
      rating: 5,
    },
    {
      text: "The play-based learning curriculum is fantastic. My daughter has become so expressive, social, and creative within just a few months.",
      author: "Rajesh K.",
      role: "Parent of Diya (Junior KG)",
      rating: 5,
    },
    {
      text: "Highly recommended preschool! Excellent infrastructure, hygienic classrooms, and the CCTV surveillance gives us complete peace of mind.",
      author: "Sneha M.",
      role: "Parent of Kabir (Play Group)",
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="pt-8 md:pt-12 pb-10 md:pb-12 bg-white font-outfit relative overflow-hidden">
      
      {/* Decorative stars / bubbles */}
      <div className="absolute top-10 right-20 text-brand-yellow/15 w-8 h-8 pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191z"/></svg>
      </div>
      <div className="absolute bottom-10 left-10 text-brand-orange/15 w-12 h-12 pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191z"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Testimonials Slider */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="inline-block text-sm font-bold text-brand-orange uppercase tracking-wider font-fredoka bg-brand-lightyellow px-3 py-1.5 rounded-md border border-brand-yellow/30">
                Parent Testimonials
              </span>
              <h2 className="text-3xl md:text-[36px] font-fredoka font-bold text-brand-blue mt-4 leading-tight">
                What Parents Say <br />
                <span className="text-brand-orange">About Us</span>
              </h2>
            </div>

            {/* Carousel Content */}
            <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-inner min-h-[200px] flex flex-col justify-between transition-all duration-500">
              
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-4 bg-brand-orange text-white p-3 rounded-2xl shadow-md">
                <Quote className="w-6 h-6 fill-white" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4 pt-2">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-black text-lg md:text-xl font-normal italic leading-relaxed mb-6">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author details */}
              <div>
                <h4 className="font-fredoka font-bold text-brand-blue text-base md:text-lg">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-black text-xs md:text-sm font-semibold">
                  {testimonials[activeIndex].role}
                </p>
              </div>

            </div>

            {/* Carousel Dot Indicators */}
            <div className="flex justify-center lg:justify-start space-x-2.5 pt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-brand-orange w-8' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Side: Portrait Image with decorative ring */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Yellow decorative ring background */}
              <div className="absolute inset-0 bg-brand-yellow/30 rounded-full scale-105 animate-pulse-slow"></div>
              
              {/* Outer decorative dashed circle */}
              <div className="absolute inset-0 border-4 border-dashed border-brand-orange/40 rounded-full -m-4"></div>

              {/* Main Image Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={parentChildImg}
                  alt="Mother and preschooler child smiling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Sticker */}
              <div className="absolute -bottom-2 -left-2 bg-brand-blue text-white p-4 rounded-3xl shadow-lg border border-white font-fredoka flex flex-col items-center">
                <span className="text-2xl">❤️</span>
                <span className="text-xs font-bold uppercase tracking-wider mt-1">Loved by Parents</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
