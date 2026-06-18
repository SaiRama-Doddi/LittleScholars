import { useEffect, useState } from 'react'
import { 
  GraduationCap, 
  BookOpen, 
  Pencil, 
  Eraser, 
  Star 
} from 'lucide-react'

// Define elements: Lucide icons and styled text blocks (Letters & Numbers)
const iconsList = [
  // Scholar Caps
  { type: 'icon', component: GraduationCap, color: 'text-[#60a5fa]', size: 'w-10 h-10', basePos: { top: '12%', left: '3%' }, anim: 'animate-float-1', responsiveClass: 'hidden md:block' },
  { type: 'icon', component: GraduationCap, color: 'text-[#60a5fa]', size: 'w-9 h-9', basePos: { top: '68%', right: '4%' }, anim: 'animate-float-2', responsiveClass: 'block' },
  
  // Books
  { type: 'icon', component: BookOpen, color: 'text-[#fb923c]', size: 'w-9 h-9', basePos: { top: '35%', right: '3%' }, anim: 'animate-float-2', responsiveClass: 'block' },
  { type: 'icon', component: BookOpen, color: 'text-[#34d399]', size: 'w-8 h-8', basePos: { top: '75%', left: '3%' }, anim: 'animate-float-3', responsiveClass: 'hidden md:block' },

  // Pencils
  { type: 'icon', component: Pencil, color: 'text-[#facc15]', size: 'w-8 h-8', basePos: { top: '52%', left: '4%' }, anim: 'animate-float-3', responsiveClass: 'hidden md:block' },
  { type: 'icon', component: Pencil, color: 'text-[#facc15]', size: 'w-8 h-8', basePos: { top: '85%', right: '5%' }, anim: 'animate-float-1', responsiveClass: 'block' },

  // Erasers
  { type: 'icon', component: Eraser, color: 'text-[#f472b6]', size: 'w-8 h-8', basePos: { top: '60%', right: '7%' }, anim: 'animate-float-1', responsiveClass: 'block' },
  { type: 'icon', component: Eraser, color: 'text-[#818cf8]', size: 'w-7 h-7', basePos: { top: '28%', left: '6%' }, anim: 'animate-float-2', responsiveClass: 'hidden md:block' },

  // Stars
  { type: 'icon', component: Star, color: 'text-[#facc15]', size: 'w-9 h-9', basePos: { top: '20%', right: '6%' }, anim: 'animate-float-3', responsiveClass: 'block' },
  { type: 'icon', component: Star, color: 'text-[#fbbf24]', size: 'w-8 h-8', basePos: { top: '48%', right: '5%' }, anim: 'animate-float-1', responsiveClass: 'hidden md:block' },

  // Letters: A, B, C, D
  { type: 'text', label: 'A', color: 'text-[#f87171]', size: 'text-3xl sm:text-4xl', basePos: { top: '15%', left: '12%' }, anim: 'animate-float-1', responsiveClass: 'block' },
  { type: 'text', label: 'B', color: 'text-[#c084fc]', size: 'text-3xl sm:text-4xl', basePos: { top: '42%', left: '9%' }, anim: 'animate-float-2', responsiveClass: 'block' },
  { type: 'text', label: 'C', color: 'text-[#38bdf8]', size: 'text-3xl sm:text-4xl', basePos: { top: '80%', right: '12%' }, anim: 'animate-float-3', responsiveClass: 'block' },
  { type: 'text', label: 'D', color: 'text-[#fbbf24]', size: 'text-3xl sm:text-4xl', basePos: { top: '55%', left: '15%' }, anim: 'animate-float-1', responsiveClass: 'hidden md:block' },

  // Numbers: 1, 2, 3
  { type: 'text', label: '1', color: 'text-[#34d399]', size: 'text-3xl sm:text-4xl', basePos: { top: '25%', left: '8%' }, anim: 'animate-float-2', responsiveClass: 'block' },
  { type: 'text', label: '2', color: 'text-[#f472b6]', size: 'text-3xl sm:text-4xl', basePos: { top: '90%', left: '8%' }, anim: 'animate-float-3', responsiveClass: 'block' },
  { type: 'text', label: '3', color: 'text-[#a78bfa]', size: 'text-3xl sm:text-4xl', basePos: { top: '70%', left: '12%' }, anim: 'animate-float-1', responsiveClass: 'hidden md:block' }
]

export default function FloatingBackgroundIcons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden select-none">
      {iconsList.map((item, idx) => {
        const { type, color, size, basePos, anim, responsiveClass } = item
        return (
          <div
            key={idx}
            className={`absolute transition-all duration-1000 ease-out pointer-events-none ${anim} ${responsiveClass}`}
            style={basePos}
          >
            {type === 'icon' ? (
              <item.component 
                className={`pointer-events-none ${size} ${color} opacity-[0.45]`}
              />
            ) : (
              <span className={`pointer-events-none ${size} ${color} font-fredoka font-bold opacity-[0.45] drop-shadow-sm`}>
                {item.label}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
