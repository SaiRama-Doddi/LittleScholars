import { useEffect, useState } from 'react'
import { 
  GraduationCap, 
  BookOpen, 
  Pencil, 
  Palette, 
  Music, 
  Star, 
  Trophy, 
  Heart, 
  Sparkles, 
  Smile, 
  Sun,
  Cloud 
} from 'lucide-react'

const iconsList = [
  { Icon: GraduationCap, color: 'text-blue-500', size: 'w-10 h-10', basePos: { top: '15%', left: '3%' }, anim: 'animate-float-drift-1', responsiveClass: 'hidden md:block' },
  { Icon: BookOpen, color: 'text-orange-500', size: 'w-8 h-8', basePos: { top: '38%', right: '4%' }, anim: 'animate-float-drift-2', responsiveClass: 'block' },
  { Icon: Pencil, color: 'text-yellow-500', size: 'w-7 h-7', basePos: { top: '50%', left: '5%' }, anim: 'animate-float-drift-3', responsiveClass: 'hidden md:block' },
  { Icon: Palette, color: 'text-purple-500', size: 'w-9 h-9', basePos: { top: '65%', right: '3%' }, anim: 'animate-float-drift-1', responsiveClass: 'hidden md:block' },
  { Icon: Music, color: 'text-pink-500', size: 'w-8 h-8', basePos: { top: '80%', left: '4%' }, anim: 'animate-float-drift-2', responsiveClass: 'block' },
  { Icon: Star, color: 'text-yellow-500', size: 'w-10 h-10', basePos: { top: '22%', right: '5%' }, anim: 'animate-float-drift-3', responsiveClass: 'block' },
  { Icon: Trophy, color: 'text-amber-500', size: 'w-9 h-9', basePos: { top: '88%', right: '6%' }, anim: 'animate-float-drift-1', responsiveClass: 'block' },
  { Icon: Heart, color: 'text-red-500', size: 'w-8 h-8', basePos: { top: '48%', left: '3%' }, anim: 'animate-float-drift-2', responsiveClass: 'block' },
  { Icon: Sparkles, color: 'text-amber-500', size: 'w-8 h-8', basePos: { top: '72%', right: '7%' }, anim: 'animate-float-drift-3', responsiveClass: 'block' },
  { Icon: Smile, color: 'text-green-500', size: 'w-9 h-9', basePos: { top: '32%', left: '6%' }, anim: 'animate-float-drift-1', responsiveClass: 'hidden md:block' },
  { Icon: Sun, color: 'text-amber-500', size: 'w-12 h-12', basePos: { top: '18%', left: '42%' }, anim: 'animate-float-drift-2', responsiveClass: 'block' },
  { Icon: Cloud, color: 'text-sky-400', size: 'w-11 h-11', basePos: { top: '18%', left: '55%' }, anim: 'animate-float-drift-3', responsiveClass: 'block' }
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
        const { Icon, color, size, basePos, anim, responsiveClass } = item
        return (
          <div
            key={idx}
            className={`absolute transition-all duration-1000 ease-out pointer-events-none ${anim} ${responsiveClass}`}
            style={basePos}
          >
            <Icon 
              className={`pointer-events-none ${size} ${color} opacity-[0.45]`}
            />
          </div>
        )
      })}
    </div>
  )
}

