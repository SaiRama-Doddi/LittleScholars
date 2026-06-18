import { useState } from 'react'
import { Grid, Sparkles, BookOpen, Calendar, ToyBrick, GraduationCap, Smile, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Import gallery banner
const galleryBannerImg = '/banner1.webp'

// Import gallery images
import imgDrawing from '../assets/gallery_art.webp'
import imgRings from '../assets/gallery_learning.webp'
import imgReading from '../assets/gal_read.webp'
import imgSlide from '../assets/gallery_play.webp'
import imgPaint from '../assets/painted_hands_child.webp'
import imgDance from '../assets/gal_dance.webp'
import imgCake from '../assets/gal_cake.webp'
import imgGrad from '../assets/gal_grad.webp'
import imgPlant from '../assets/gal_plant.webp'
import imgTeacher from '../assets/gal_teacher.webp'
import imgHands from '../assets/gal_hands.webp'

export default function GalleryPage() {
  const categories = [
    { id: 'all', name: 'All Photos', icon: <Grid className="w-4 h-4" /> },
    { id: 'activities', name: 'Activities', icon: <Smile className="w-4 h-4" /> },
    { id: 'classroom', name: 'Classroom', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'events', name: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'celebrations', name: 'Celebrations', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'play', name: 'Outdoor Play', icon: <ToyBrick className="w-4 h-4" /> },
    { id: 'graduation', name: 'Graduation', icon: <GraduationCap className="w-4 h-4" /> },
  ]

  const galleryItems = [
    {
      id: 1,
      src: imgDrawing,
      title: 'Drawing & Coloring',
      desc: 'Developing creativity through crayons and sketchbooks.',
      category: 'activities',
      categoryLabel: 'Activity',
    },
    {
      id: 2,
      src: imgRings,
      title: 'Color Stacking Rings',
      desc: 'Understanding shapes, ordering, and fine motor skills.',
      category: 'classroom',
      categoryLabel: 'Classroom',
    },
    {
      id: 3,
      src: imgReading,
      title: 'Storybook Reading Corner',
      desc: 'Building language skills and early reading habits.',
      category: 'classroom',
      categoryLabel: 'Classroom',
    },
    {
      id: 4,
      src: imgSlide,
      title: 'Playground Adventures',
      desc: 'Active outdoor play for physical strength and socialization.',
      category: 'play',
      categoryLabel: 'Outdoor Play',
    },
    {
      id: 5,
      src: imgPaint,
      title: 'Finger Painting Session',
      desc: 'Exploring textures and colors in a fun creative way.',
      category: 'activities',
      categoryLabel: 'Activity',
    },
    {
      id: 6,
      src: imgDance,
      title: 'Annual Day Performance',
      desc: 'Performing traditional group dances on the school stage.',
      category: 'events',
      categoryLabel: 'Events',
    },
    {
      id: 7,
      src: imgCake,
      title: 'Birthday Celebration',
      desc: 'Joyful birthday parties with classroom peers.',
      category: 'celebrations',
      categoryLabel: 'Celebration',
    },
    {
      id: 8,
      src: imgGrad,
      title: 'Kindergarten Graduation',
      desc: 'Celebrating our graduates moving to primary school.',
      category: 'graduation',
      categoryLabel: 'Graduation',
    },
    {
      id: 9,
      src: imgPlant,
      title: 'Gardening & Nature Study',
      desc: 'Planting seeds and learning to care for environment.',
      category: 'activities',
      categoryLabel: 'Activity',
    },
    {
      id: 10,
      src: imgRings, // Reusing Stacking Rings for blocks
      title: 'Building Block Towers',
      desc: 'Exploring gravity, structures, and coordination.',
      category: 'classroom',
      categoryLabel: 'Classroom',
    },
    {
      id: 11,
      src: imgTeacher,
      title: 'Teacher-Guided Play',
      desc: 'Structured board games and interactive learning.',
      category: 'classroom',
      categoryLabel: 'Classroom',
    },
    {
      id: 12,
      src: imgHands,
      title: 'Classroom Participation',
      desc: 'Children active and raising hands to answer questions.',
      category: 'classroom',
      categoryLabel: 'Classroom',
    },
  ]

  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: 0 })

  // Filter gallery items
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter || (activeFilter === 'events' && item.category === 'celebrations'))

  // Handle lightbox open
  const openLightbox = (index) => {
    setLightbox({ isOpen: true, currentIndex: index })
  }

  // Lightbox navigation
  const prevPhoto = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? filteredItems.length - 1 : prev.currentIndex - 1
    }))
  }

  const nextPhoto = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === filteredItems.length - 1 ? 0 : prev.currentIndex + 1
    }))
  }

  return (
    <div className="bg-slate-50 font-outfit min-h-screen animate-page-fade">
      
      {/* 1. Gallery Hero Banner */}
      <section className="relative w-full aspect-[2.45/1] overflow-hidden">
        <img
          src={galleryBannerImg}
          alt="Little Scholars Gallery Banner"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchpriority="high"
        />
        {/* Overlay gradient mask to guarantee text contrast if banner text is overlayed, 
            though the provided banner contains baked-in graphics. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* 2. Filter & Photos section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id)
                  setLightbox(prev => ({ ...prev, currentIndex: 0 }))
                }}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-fredoka font-semibold transition-all duration-300 border shadow-sm ${
                  isActive
                    ? 'bg-brand-blue border-brand-blue text-white scale-105 shadow-md'
                    : 'bg-white border-slate-200 text-black hover:border-brand-blue/40 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 cursor-pointer group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-brand-blue font-bold px-5 py-2.5 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300 text-xs font-fredoka flex items-center space-x-1">
                    🔍 <span>Zoom Photo</span>
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-yellow/90 backdrop-blur-sm text-brand-blue font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5">
                <h3 className="font-fredoka font-bold text-black text-lg leading-snug group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-black text-xs mt-2 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <span className="text-4xl">📸</span>
            <h3 className="font-fredoka font-bold text-black mt-4">No Photos Found</h3>
            <p className="text-black text-sm mt-1">We will upload moments for this category soon!</p>
          </div>
        )}

      </section>

      {/* 3. Lightbox Modal */}
      {lightbox.isOpen && filteredItems.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 transition-opacity duration-300">
          
          {/* Top Actions */}
          <div className="flex justify-between items-center text-white py-2">
            <div className="text-sm font-semibold font-fredoka">
              {filteredItems[lightbox.currentIndex].categoryLabel} Gallery ({lightbox.currentIndex + 1} / {filteredItems.length})
            </div>
            <button
              onClick={() => setLightbox({ isOpen: false, currentIndex: 0 })}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image & Navigation */}
          <div className="flex-grow flex items-center justify-between relative max-w-5xl mx-auto w-full">
            
            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-0 md:-left-16 z-25 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-all focus:outline-none"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Photo */}
            <div className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center p-2">
              <img
                src={filteredItems[lightbox.currentIndex].src}
                alt={filteredItems[lightbox.currentIndex].title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 animate-fade-in"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-0 md:-right-16 z-25 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-all focus:outline-none"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Bottom Details */}
          <div className="text-center text-white max-w-2xl mx-auto pb-4 pt-2">
            <h3 className="font-fredoka font-bold text-xl md:text-2xl text-brand-yellow">
              {filteredItems[lightbox.currentIndex].title}
            </h3>
            <p className="text-slate-300 text-sm mt-2 font-light leading-relaxed">
              {filteredItems[lightbox.currentIndex].desc}
            </p>
          </div>

        </div>
      )}

    </div>
  )
}
