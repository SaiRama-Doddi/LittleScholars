import { Link } from 'react-router-dom'
import { Camera, Image as ImageIcon } from 'lucide-react'
import galleryLearning from '../assets/gallery_learning.png'
import galleryPlay from '../assets/gallery_play.png'
import galleryArt from '../assets/gallery_art.png'

export default function Gallery() {
  const images = [
    {
      src: galleryLearning,
      title: 'Learning & Building',
      desc: 'Developing spatial skills and logic',
      rotation: '-rotate-2 md:-rotate-3 hover:rotate-0',
      zIndex: 'z-10',
    },
    {
      src: galleryPlay,
      title: 'Outdoor Activities',
      desc: 'Active play and physical coordination',
      rotation: 'rotate-1 md:rotate-2 hover:rotate-0',
      zIndex: 'z-20',
      offsetY: 'lg:translate-y-4',
    },
    {
      src: galleryArt,
      title: 'Creative Art & Craft',
      desc: 'Color exploration and fine motor skills',
      rotation: '-rotate-1 md:-rotate-2 hover:rotate-0',
      zIndex: 'z-10',
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-brand-lightyellow/50 font-outfit relative overflow-hidden">
      
      {/* Playful background graphics */}
      <div className="absolute top-10 left-10 text-brand-orange/10 pointer-events-none select-none">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,15 90,85 10,85" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Column 1: Title and CTA Button */}
          <div className="flex flex-col space-y-6 lg:col-span-1 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center text-sm font-bold text-brand-orange uppercase tracking-wider font-fredoka bg-brand-lightyellow px-3 py-1.5 rounded-md border border-brand-yellow/30">
                <Camera className="w-4 h-4 mr-2" />
                Gallery
              </span>
              <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-brand-blue mt-4 leading-tight">
                Moments That <br />
                <span className="text-brand-orange">Matter</span>
              </h2>
            </div>
            <p className="text-black text-base md:text-lg font-normal leading-relaxed">
              Take a peek into the daily adventures of our little scholars. Our gallery highlights active learning, playful exploration, and creative expression.
            </p>
            <div className="pt-2">
              <Link
                to="/gallery"
                className="inline-block bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-fredoka"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Columns 2-3: Polaroid Collage */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 pt-6 lg:pt-0">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-4 pb-8 rounded-2xl shadow-xl border border-slate-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${img.rotation} ${img.zIndex} ${img.offsetY || ''}`}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center">
                      <ImageIcon className="w-3.5 h-3.5 mr-1" /> View Image
                    </span>
                  </div>
                </div>

                {/* Polaroid style caption */}
                <div className="mt-4 text-center">
                  <h4 className="font-fredoka font-bold text-black text-base leading-tight">
                    {img.title}
                  </h4>
                  <p className="text-black text-xs mt-1.5 font-medium">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
