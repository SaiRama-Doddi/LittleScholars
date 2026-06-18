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
  { Icon: GraduationCap, color: 'text-blue-400', size: 'w-10 h-10', basePos: { top: '15%', left: '3%' }, anim: 'animate-float-drift-1' },
  { Icon: BookOpen, color: 'text-orange-400', size: 'w-8 h-8', basePos: { top: '30%', right: '4%' }, anim: 'animate-float-drift-2' },
  { Icon: Pencil, color: 'text-yellow-400', size: 'w-7 h-7', basePos: { top: '50%', left: '5%' }, anim: 'animate-float-drift-3' },
  { Icon: Palette, color: 'text-purple-400', size: 'w-9 h-9', basePos: { top: '65%', right: '3%' }, anim: 'animate-float-drift-1' },
  { Icon: Music, color: 'text-pink-400', size: 'w-8 h-8', basePos: { top: '80%', left: '4%' }, anim: 'animate-float-drift-2' },
  { Icon: Star, color: 'text-yellow-400', size: 'w-10 h-10', basePos: { top: '10%', right: '5%' }, anim: 'animate-float-drift-3' },
  { Icon: Trophy, color: 'text-amber-500', size: 'w-9 h-9', basePos: { top: '88%', right: '6%' }, anim: 'animate-float-drift-1' },
  { Icon: Heart, color: 'text-red-400', size: 'w-8 h-8', basePos: { top: '38%', left: '6%' }, anim: 'animate-float-drift-2' },
  { Icon: Sparkles, color: 'text-amber-400', size: 'w-8 h-8', basePos: { top: '72%', right: '7%' }, anim: 'animate-float-drift-3' },
  { Icon: Smile, color: 'text-green-400', size: 'w-9 h-9', basePos: { top: '22%', left: '8%' }, anim: 'animate-float-drift-1' },
  { Icon: Sun, color: 'text-amber-500', size: 'w-12 h-12', basePos: { top: '5%', left: '45%' }, anim: 'animate-float-drift-2' },
  { Icon: Cloud, color: 'text-sky-300', size: 'w-11 h-11', basePos: { top: '8%', left: '53%' }, anim: 'animate-float-drift-3' }
]

export default function FloatingBackgroundIcons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {iconsList.map((item, idx) => {
        const { Icon, color, size, basePos, anim } = item
        return (
          <div
            key={idx}
            className={`absolute transition-all duration-1000 ease-out ${anim}`}
            style={basePos}
          >
            <Icon 
              className={`pointer-events-auto ${size} ${color} opacity-20 hover:opacity-100 hover:text-brand-orange transition-all duration-500 transform hover:scale-130 hover:rotate-12 cursor-pointer`}
            />
          </div>
        )
      })}
    </div>
  )
}
