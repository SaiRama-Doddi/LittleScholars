import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  GraduationCap, 
  BookOpen, 
  Palette, 
  Music, 
  Star, 
  Trophy, 
  Heart, 
  Sparkles, 
  Smile, 
  Sun,
  Cloud,
  ChevronRight,
  Clock,
  Users,
  Baby,
  Brain,
  MessageSquare,
  Activity,
  Check,
  Award
} from 'lucide-react'

// Import program illustrations
import programDaycare from '../assets/program_daycare.png'
import programPlaygroup from '../assets/program_playgroup.png'
import programNursery from '../assets/program_nursery.png'
import programJuniorKG from '../assets/program_juniorkg.png'
import programSeniorKG from '../assets/program_seniorkg.png'

// Import photos for details
import detailsPlaygroupHero from '../assets/details_playgroup_hero.png'
import detailsPlaygroupTypical from '../assets/details_playgroup_typical.png'
import detailsChildAvatar from '../assets/details_child_avatar.png'
import paintedHandsChild from '../assets/painted_hands_child.png'
import motherChild from '../assets/mother_child.png'
import galleryLearning from '../assets/gallery_learning.png'
import galTeacher from '../assets/gal_teacher.png'
import galleryArt from '../assets/gallery_art.png'
import galGrad from '../assets/gal_grad.png'
import galRead from '../assets/gal_read.png'
import aboutSchool from '../assets/about_school.png'

const programsData = {
  'day-care': {
    id: 'day-care',
    name: 'DAY CARE',
    titleName: 'Day Care',
    subtitle: 'A Safe, Nurturing & Loving Second Home',
    desc: 'Our Day Care program is designed for children aged 1.5 to 3 years. We provide a clean, secure, and warm environment where toddlers can play, rest, and take their first steps of growth under the guidance of loving caregivers.',
    age: '1.5 - 3 Years',
    duration: 'Full/Half Day',
    size: '10-12 Children',
    heroImage: paintedHandsChild,
    typicalImage: motherChild,
    programIllustration: programDaycare,
    overview: 'Our Day Care program focuses on sensory exploration, basic motor skills, and emotional security. We maintain a very low child-to-caregiver ratio to ensure personalized care, feeding, and sleeping schedules matching your child’s needs.',
    outcomes: [
      'Development of basic motor and sensory skills',
      'Establishing healthy eating and sleeping habits',
      'Early vocabulary and language expression',
      'Social interaction with peers in a safe space',
      'Emotional bonding and secure attachment',
      'Expressing needs and responding to simple cues',
      'Building basic confidence in a social environment'
    ],
    keyAreas: [
      { title: 'Sensory Exploration', desc: 'Engaging senses through textures, sounds, colors, and child-safe toys.', color: 'border-pink-200 bg-[#fff5f6]', Icon: Sparkles },
      { title: 'Motor Skills', desc: 'Supporting crawling, walking, stacking blocks, and basic coordination.', color: 'border-emerald-200 bg-[#f4fbf7]', Icon: Activity },
      { title: 'Social Play', desc: 'Encouraging sharing, responding to smiles, and parallel play.', color: 'border-amber-200 bg-[#fffbf0]', Icon: Users },
      { title: 'Language Beginnings', desc: 'Singing lullabies, simple words, and expressing needs.', color: 'border-blue-200 bg-[#f0f7ff]', Icon: MessageSquare },
      { title: 'Emotional Security', desc: 'Warm care that builds trust and a positive self-concept.', color: 'border-orange-200 bg-[#fffbf2]', Icon: Heart }
    ],
    typicalDay: [
      { time: '09:00 AM', event: 'Welcome & Morning Health Check' },
      { time: '09:30 AM', event: 'Guided Play & Sensory Activities' },
      { time: '10:15 AM', event: 'Healthy Snack Time' },
      { time: '10:45 AM', event: 'Nap Time / Rest Period' },
      { time: '12:00 PM', event: 'Lunch Time' },
      { time: '01:00 PM', event: 'Outdoor Stroller Walk / Light Play' },
      { time: '02:00 PM', event: 'Story Time & Quiet Play' },
      { time: '03:00 PM', event: 'Parent Handover' }
    ],
    approach: [
      'Low child-to-teacher ratio for direct care',
      'Strict safety and hygiene protocols',
      'Flexible, routine-based daily schedules',
      'Regular communication logs for parents',
      'Healthy, pediatrician-approved meals'
    ]
  },
  'play-group': {
    id: 'play-group',
    name: 'PLAY GROUP',
    titleName: 'Play Group',
    subtitle: 'A Joyful Start to Lifelong Learning',
    desc: 'Our Play Group program is designed for children aged 2.5 to 3.5 years. It focuses on hands-on learning through play, exploration and social interaction in a safe and nurturing environment.',
    age: '2.5 - 3.5 Years',
    duration: '3 Hours',
    size: '15-18 Children',
    heroImage: detailsPlaygroupHero,
    typicalImage: detailsPlaygroupTypical,
    programIllustration: programPlaygroup,
    overview: 'Play Group is all about learning through play. Children are encouraged to explore, imagine, create and communicate while developing essential skills that build confidence and independence.',
    outcomes: [
      'Early communication and language skills',
      'Recognizing colors, shapes and patterns',
      'Basic numbers and counting',
      'Fine and gross motor skills',
      'Sharing, caring and social interaction',
      'Building curiosity and creativity',
      'Independence and self-confidence'
    ],
    keyAreas: [
      { title: 'Language & Communication', desc: 'Encouraging listening, speaking and expressing through stories, songs and conversations.', color: 'border-pink-200 bg-[#fff5f6]', Icon: MessageSquare },
      { title: 'Cognitive Development', desc: 'Activities that enhance memory, attention, observation and problem-solving skills.', color: 'border-emerald-200 bg-[#f4fbf7]', Icon: Brain },
      { title: 'Physical Development', desc: 'Fun activities to improve balance, coordination and overall physical strength.', color: 'border-amber-200 bg-[#fffbf0]', Icon: Activity },
      { title: 'Social & Emotional Development', desc: 'Learning to share, cooperate and build positive relationships.', color: 'border-blue-200 bg-[#f0f7ff]', Icon: Users },
      { title: 'Creative Development', desc: 'Art, music, role play and creative play to inspire imagination and creativity.', color: 'border-orange-200 bg-[#fffbf2]', Icon: Palette }
    ],
    typicalDay: [
      { time: '09:00 AM', event: 'Welcome & Free Play' },
      { time: '09:30 AM', event: 'Circle Time & Rhymes' },
      { time: '10:00 AM', event: 'Theme Based Learning Activity' },
      { time: '10:45 AM', event: 'Snack Break' },
      { time: '11:00 AM', event: 'Indoor / Outdoor Play' },
      { time: '11:45 AM', event: 'Story Time' },
      { time: '12:15 PM', event: 'Creative Activity' },
      { time: '12:45 PM', event: 'Good Bye Circle' }
    ],
    approach: [
      'Play Based Learning',
      'Activity Oriented Curriculum',
      'Safe & Hygienic Environment',
      'Use of age-appropriate learning aids',
      'Regular progress updates for parents'
    ]
  },
  'nursery': {
    id: 'nursery',
    name: 'NURSERY',
    titleName: 'Nursery',
    subtitle: 'Building Strong Foundations for Growth',
    desc: 'Our Nursery program is designed for children aged 3 to 4 years. It focuses on academic readiness, structured learning, and interactive play, helping children develop cognitive and motor skills.',
    age: '3 - 4 Years',
    duration: '3.5 Hours',
    size: '18-20 Children',
    heroImage: galleryLearning,
    typicalImage: galTeacher,
    programIllustration: programNursery,
    overview: 'In Nursery, we introduce basic pre-writing, reading, math concepts and vocabulary. We balance structured learning with creative play, offering children a stepping stone to future school success.',
    outcomes: [
      'Phonics, alphabet sounds, and basic reading',
      'Pre-writing skills and pencil grip coordination',
      'Number identification and sorting shapes',
      'Scientific thinking and local environment exploration',
      'Structured group play and cooperation',
      'Creative expressions in drawing and clay modeling',
      'Developing personal hygiene and routines'
    ],
    keyAreas: [
      { title: 'Pre-Writing & Writing', desc: 'Scribbling, pattern writing, and developing fine motor control.', color: 'border-pink-200 bg-[#fff5f6]', Icon: MessageSquare },
      { title: 'Mathematical Basics', desc: 'Sorting, patterns, shapes, counting, and simple comparisons.', color: 'border-emerald-200 bg-[#f4fbf7]', Icon: Brain },
      { title: 'Understanding the World', desc: 'Learning about plants, animals, weather, and community helpers.', color: 'border-amber-200 bg-[#fffbf0]', Icon: Sun },
      { title: 'Emotional Maturity', desc: 'Self-regulation, empathy, sharing, and self-care skills.', color: 'border-blue-200 bg-[#f0f7ff]', Icon: Heart },
      { title: 'Art & Expressive Play', desc: 'Interactive drama, dance, drawing, and storytelling.', color: 'border-orange-200 bg-[#fffbf2]', Icon: Palette }
    ],
    typicalDay: [
      { time: '09:00 AM', event: 'Assembly & Warm Up' },
      { time: '09:20 AM', event: 'Language & Phonics Lesson' },
      { time: '10:00 AM', event: 'Math & Logic Exercises' },
      { time: '10:45 AM', event: 'Recess & Snack Time' },
      { time: '11:15 AM', event: 'Creative Art & Clay Play' },
      { time: '12:00 PM', event: 'EVS / Science Exploration' },
      { time: '12:30 PM', event: 'Music & Storytelling' },
      { time: '01:00 PM', event: 'Goodbye Routine' }
    ],
    approach: [
      'Syllable and phonics-first learning model',
      'Theme-based curriculum integrating EVS',
      'Structured worksheets and hands-on toys',
      'Individual assessment reports quarterly',
      'Safe play and classroom environments'
    ]
  },
  'junior-kg': {
    id: 'junior-kg',
    name: 'JUNIOR KG',
    titleName: 'Junior KG',
    subtitle: 'Nurturing Curiosity and Independent Thinking',
    desc: 'Our Junior KG program is designed for children aged 4 to 5 years. It balances advanced academic concepts with curiosity, creativity, and self-confidence, ensuring school readiness.',
    age: '4 - 5 Years',
    duration: '4 Hours',
    size: '20-22 Children',
    heroImage: galleryArt,
    typicalImage: galGrad,
    programIllustration: programJuniorKG,
    overview: 'Junior KG introduces formal writing, phonics-based reading, and math concepts. We encourage children to ask questions, solve simple puzzles, and develop positive social behaviors in a team.',
    outcomes: [
      'Reading three-letter words and writing alphabets',
      'Addition basics, number writing up to 50',
      'Scientific logic and environmental studies',
      'Public speaking and expressing opinions',
      'Working in groups and community learning',
      'Bilingual vocabulary and conversational skills',
      'Independent decision-making and logic'
    ],
    keyAreas: [
      { title: 'Reading & Literacy', desc: 'Word blends, site words, sentences, and story reading.', color: 'border-pink-200 bg-[#fff5f6]', Icon: BookOpen },
      { title: 'Logical Math', desc: 'Simple addition, backward counting, number bonds, and patterns.', color: 'border-emerald-200 bg-[#f4fbf7]', Icon: Brain },
      { title: 'Scientific Enquiry', desc: 'Experiments (floating/sinking, seed germination, weather patterns).', color: 'border-amber-200 bg-[#fffbf0]', Icon: Trophy },
      { title: 'Cooperative Play', desc: 'Group projects, team games, and peer problem-solving.', color: 'border-blue-200 bg-[#f0f7ff]', Icon: Users },
      { title: 'Fine Arts & Drama', desc: 'Role plays, puppet theater, water coloring, and crafts.', color: 'border-orange-200 bg-[#fffbf2]', Icon: Palette }
    ],
    typicalDay: [
      { time: '08:30 AM', event: 'Morning Circle & News Sharing' },
      { time: '09:00 AM', event: 'Literacy & English Writing' },
      { time: '09:50 AM', event: 'Math & Logical Reasoning' },
      { time: '10:30 AM', event: 'Outdoor Physical Play' },
      { time: '11:00 AM', event: 'Lunch / Snack Break' },
      { time: '11:30 AM', event: 'Science Experiment / EVS' },
      { time: '12:10 PM', event: 'Computer/Audio-Visual Lab' },
      { time: '12:30 PM', event: 'Reflection & Goodbye' }
    ],
    approach: [
      'Inquiry-led teaching approach',
      'Hands-on experimental science projects',
      'Integrated technology and AV aids',
      'Focus on confidence and public speaking',
      'Regular interactive parent-teacher meets'
    ]
  },
  'senior-kg': {
    id: 'senior-kg',
    name: 'SENIOR KG',
    titleName: 'Senior KG',
    subtitle: 'Preparing Confident Leaders of Tomorrow',
    desc: 'Our Senior KG program is designed for children aged 5 to 6 years. It is a comprehensive transition program focused on primary school readiness, advanced math, language proficiency, and leadership.',
    age: '5 - 6 Years',
    duration: '4 Hours',
    size: '22-25 Children',
    heroImage: galRead,
    typicalImage: aboutSchool,
    programIllustration: programSeniorKG,
    overview: 'Senior KG prepares children for formal primary school curriculum. We build reading fluency, arithmetic basics, scientific logic, and emotional independence to help them transition with ease.',
    outcomes: [
      'Fluent reading of short stories and writing sentences',
      'Adding and subtracting single digits, skip counting',
      'Advanced general knowledge and global geography',
      'Critical thinking, reasoning, and logic problems',
      'Collaborating on science and group projects',
      'Confidence in public speaking and stage presentations',
      'Primary school readiness and social adaptation'
    ],
    keyAreas: [
      { title: 'Language Fluency', desc: 'Expressive writing, spelling, reading comprehension, and dialogues.', color: 'border-pink-200 bg-[#fff5f6]', Icon: BookOpen },
      { title: 'Arithmetic Skills', desc: 'Addition, subtraction, money, time, and data handling.', color: 'border-emerald-200 bg-[#f4fbf7]', Icon: Brain },
      { title: 'EVS & Geography', desc: 'Mapping, planets, ecosystems, local history, and resources.', color: 'border-amber-200 bg-[#fffbf0]', Icon: Sun },
      { title: 'Independent Study', desc: 'Self-directed tasks, worksheets, and concentration habits.', color: 'border-blue-200 bg-[#f0f7ff]', Icon: Award },
      { title: 'Creative Arts', desc: 'Advanced drawing, theater projects, singing, and complex crafts.', color: 'border-orange-200 bg-[#fffbf2]', Icon: Palette }
    ],
    typicalDay: [
      { time: '08:30 AM', event: 'Morning Prayer & Assembly' },
      { time: '09:00 AM', event: 'Comprehensive Literacy & Spelling' },
      { time: '09:50 AM', event: 'Mathematics & Addition Lab' },
      { time: '10:30 AM', event: 'Gymnastics / Yoga / Active Sports' },
      { time: '11:00 AM', event: 'Snack Break & Social Time' },
      { time: '11:30 AM', event: 'Social Studies / EVS Project' },
      { time: '12:10 PM', event: 'Show & Tell (Public Speaking)' },
      { time: '12:30 PM', event: 'Review & Closing Circle' }
    ],
    approach: [
      'Comprehensive primary school prep focus',
      'Project-based and collaborative learning',
      'Advanced math and spelling drills',
      'Leadership and responsibility building',
      'Transition counseling for parents'
    ]
  }
}

// Handdrawn SVGs for background details
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

// Program themes mapping for dynamic styles
const programThemes = {
  'day-care': {
    primaryColor: 'pink',
    heroBg: 'from-pink-50/80 via-[#fdf7f9] to-white',
    badgeBorder: 'border-pink-200 hover:border-pink-400',
    badgeIconBg: 'bg-pink-50',
    badgeIconColor: 'text-pink-500',
    accentText: 'text-pink-600',
    outcomesBg: 'bg-[#fff5f6]',
    outcomesBorder: 'border-pink-200',
    outcomesIconBg: 'bg-pink-500',
    timelineBadge: 'text-pink-600 bg-pink-50 border-pink-200',
    quoteBg: 'bg-[#fff5f6]',
    quoteBorder: 'border-pink-400',
    quoteText: 'text-pink-900',
    quoteAuthor: 'text-pink-600',
    approachIconBg: 'bg-pink-500',
    ctaBg: 'bg-[#fff5f6]',
    ctaBorder: 'border-pink-200',
    ctaButton: 'bg-pink-600 hover:bg-pink-700',
  },
  'play-group': {
    primaryColor: 'emerald',
    heroBg: 'from-emerald-50/80 via-[#f6fcf8] to-white',
    badgeBorder: 'border-emerald-200 hover:border-emerald-400',
    badgeIconBg: 'bg-emerald-50',
    badgeIconColor: 'text-emerald-500',
    accentText: 'text-emerald-600',
    outcomesBg: 'bg-[#f4fbf7]',
    outcomesBorder: 'border-emerald-200',
    outcomesIconBg: 'bg-emerald-500',
    timelineBadge: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    quoteBg: 'bg-[#f4fbf7]',
    quoteBorder: 'border-emerald-400',
    quoteText: 'text-emerald-900',
    quoteAuthor: 'text-emerald-600',
    approachIconBg: 'bg-emerald-500',
    ctaBg: 'bg-[#f4fbf7]',
    ctaBorder: 'border-emerald-200',
    ctaButton: 'bg-emerald-600 hover:bg-emerald-700',
  },
  'nursery': {
    primaryColor: 'amber',
    heroBg: 'from-amber-50/70 via-[#fdfcf8] to-white',
    badgeBorder: 'border-amber-200 hover:border-amber-400',
    badgeIconBg: 'bg-amber-50',
    badgeIconColor: 'text-amber-500',
    accentText: 'text-amber-600',
    outcomesBg: 'bg-[#fffbf0]',
    outcomesBorder: 'border-amber-200',
    outcomesIconBg: 'bg-amber-500',
    timelineBadge: 'text-amber-600 bg-amber-50 border-amber-200',
    quoteBg: 'bg-[#fffbf0]',
    quoteBorder: 'border-amber-400',
    quoteText: 'text-amber-900',
    quoteAuthor: 'text-amber-600',
    approachIconBg: 'bg-amber-500',
    ctaBg: 'bg-[#fffbf0]',
    ctaBorder: 'border-amber-200',
    ctaButton: 'bg-amber-600 hover:bg-amber-700',
  },
  'junior-kg': {
    primaryColor: 'blue',
    heroBg: 'from-blue-50/70 via-[#f8faff] to-white',
    badgeBorder: 'border-blue-200 hover:border-blue-400',
    badgeIconBg: 'bg-blue-50',
    badgeIconColor: 'text-blue-500',
    accentText: 'text-blue-600',
    outcomesBg: 'bg-[#f0f7ff]',
    outcomesBorder: 'border-blue-200',
    outcomesIconBg: 'bg-blue-500',
    timelineBadge: 'text-blue-600 bg-blue-50 border-blue-200',
    quoteBg: 'bg-[#f0f7ff]',
    quoteBorder: 'border-blue-400',
    quoteText: 'text-blue-900',
    quoteAuthor: 'text-blue-600',
    approachIconBg: 'bg-blue-500',
    ctaBg: 'bg-[#f0f7ff]',
    ctaBorder: 'border-blue-200',
    ctaButton: 'bg-blue-600 hover:bg-blue-700',
  },
  'senior-kg': {
    primaryColor: 'orange',
    heroBg: 'from-orange-50/70 via-[#fffbf7] to-white',
    badgeBorder: 'border-orange-200 hover:border-orange-400',
    badgeIconBg: 'bg-orange-50',
    badgeIconColor: 'text-orange-500',
    accentText: 'text-orange-600',
    outcomesBg: 'bg-[#fffbf2]',
    outcomesBorder: 'border-orange-200',
    outcomesIconBg: 'bg-orange-500',
    timelineBadge: 'text-orange-600 bg-orange-50 border-orange-200',
    quoteBg: 'bg-[#fffbf2]',
    quoteBorder: 'border-orange-400',
    quoteText: 'text-orange-900',
    quoteAuthor: 'text-orange-600',
    approachIconBg: 'bg-orange-500',
    ctaBg: 'bg-[#fffbf2]',
    ctaBorder: 'border-orange-200',
    ctaButton: 'bg-orange-600 hover:bg-orange-700',
  }
}

const keyAreaStyles = [
  {
    borderClass: 'border-pink-300 hover:border-pink-500 shadow-pink-50/20',
    bgClass: 'bg-[#fff5f6]',
    iconColorClass: 'text-pink-600',
    iconBgClass: 'bg-pink-50 border-pink-200'
  },
  {
    borderClass: 'border-emerald-300 hover:border-emerald-500 shadow-emerald-50/20',
    bgClass: 'bg-[#f4fbf7]',
    iconColorClass: 'text-emerald-600',
    iconBgClass: 'bg-emerald-50 border-emerald-200'
  },
  {
    borderClass: 'border-amber-300 hover:border-amber-500 shadow-amber-50/20',
    bgClass: 'bg-[#fffbf0]',
    iconColorClass: 'text-amber-600',
    iconBgClass: 'bg-amber-50 border-amber-200'
  },
  {
    borderClass: 'border-blue-300 hover:border-blue-500 shadow-blue-50/20',
    bgClass: 'bg-[#f0f7ff]',
    iconColorClass: 'text-blue-600',
    iconBgClass: 'bg-blue-50 border-blue-200'
  },
  {
    borderClass: 'border-orange-300 hover:border-orange-500 shadow-orange-50/20',
    bgClass: 'bg-[#fffbf2]',
    iconColorClass: 'text-orange-600',
    iconBgClass: 'bg-orange-50 border-orange-200'
  }
]

export default function ProgramDetailsPage() {
  const { programId } = useParams()
  const navigate = useNavigate()
  const program = programsData[programId]

  useEffect(() => {
    if (!program) {
      navigate('/')
    } else {
      window.scrollTo(0, 0)
    }
  }, [programId, program, navigate])

  if (!program) {
    return null
  }

  const theme = programThemes[programId] || programThemes['play-group']

  return (
    <div className="bg-slate-50 min-h-screen font-outfit relative animate-page-fade">
      
      {/* 1. Breadcrumbs & Header Section */}
      <div className={`bg-gradient-to-b ${theme.heroBg} pt-6 pb-20 relative overflow-hidden`}>
        
        {/* Background drift doodles */}
        <StarDoodle className="absolute top-[10%] left-[8%] text-brand-yellow/30 w-10 h-10 animate-float-drift-1" />
        <AirplaneDoodle className="absolute top-[20%] left-[48%] text-sky-300/35 w-8 h-8 animate-float-drift-2" />
        <StarDoodle className="absolute top-[15%] right-[44%] text-brand-yellow/20 w-8 h-8 animate-float-drift-3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-black mb-8 font-semibold">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#programs" className="hover:text-brand-orange transition-colors">Programs</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-blue font-bold">{program.titleName}</span>
          </nav>

          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="font-fredoka text-5xl md:text-7xl font-black text-brand-blue leading-none tracking-tight uppercase">
                {program.name}
              </h1>
              <h2 className={`text-xl md:text-2xl font-bold ${theme.accentText} font-fredoka mt-2`}>
                {program.subtitle}
              </h2>
              <p className="text-black text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 pt-2">
                {program.desc}
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <div className={`flex items-center space-x-2.5 bg-white border-2 ${theme.badgeBorder} px-5 py-3.5 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md`}>
                  <div className={`${theme.badgeIconBg} p-2 rounded-xl ${theme.badgeIconColor}`}>
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-black font-bold uppercase tracking-wider">Age Group</div>
                    <div className="text-xs md:text-sm font-bold text-brand-blue">{program.age}</div>
                  </div>
                </div>

                <div className={`flex items-center space-x-2.5 bg-white border-2 ${theme.badgeBorder} px-5 py-3.5 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md`}>
                  <div className="bg-sky-50 p-2 rounded-xl text-sky-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-black font-bold uppercase tracking-wider">Class Duration</div>
                    <div className="text-xs md:text-sm font-bold text-brand-blue">{program.duration}</div>
                  </div>
                </div>

                <div className={`flex items-center space-x-2.5 bg-white border-2 ${theme.badgeBorder} px-5 py-3.5 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md`}>
                  <div className="bg-purple-50 p-2 rounded-xl text-purple-500">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-black font-bold uppercase tracking-wider">Class Size</div>
                    <div className="text-xs md:text-sm font-bold text-brand-blue">{program.size}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Photo Frame with Overlay Badge */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-t-full border-[6px] border-white shadow-2xl overflow-hidden bg-white">
                <img 
                  src={program.heroImage} 
                  alt={program.titleName} 
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* Overlapping circular illustrated badge */}
              <div className={`absolute -bottom-6 left-12 w-18 h-18 rounded-full ${theme.outcomesIconBg} border-4 border-white flex items-center justify-center shadow-lg transform translate-y-1`}>
                <img 
                  src={program.programIllustration} 
                  alt="Badge Icon" 
                  className="w-12 h-12 object-contain animate-float" 
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 2. Program Overview & Learn Outcomes */}
      <div className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Program Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-fredoka text-brand-blue tracking-wide uppercase">
                  Program Overview
                </h3>
                <div className="w-12 h-1 bg-brand-yellow rounded-full mt-2" />
              </div>

              <p className="text-black text-sm md:text-base leading-relaxed font-normal">
                {program.overview}
              </p>

              {/* Circles Row */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f4fbf7] border-2 border-emerald-300 text-emerald-600 flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300 hover:shadow-md">
                    <Smile className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-black mt-2 leading-tight">Happy & Secure<br/>Environment</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#fffbf0] border-2 border-amber-300 text-amber-600 flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300 hover:shadow-md">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-black mt-2 leading-tight">Social & Emotional<br/>Development</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f0f7ff] border-2 border-blue-300 text-blue-600 flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300 hover:shadow-md">
                    <Baby className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-black mt-2 leading-tight">Hands-On<br/>Learning</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f5f0ff] border-2 border-purple-300 text-purple-600 flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300 hover:shadow-md">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-black mt-2 leading-tight">Cognitive<br/>Development</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#fff5f6] border-2 border-pink-300 text-pink-600 flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300 hover:shadow-md">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-black mt-2 leading-tight">Individual<br/>Attention</span>
                </div>
              </div>
            </div>

            {/* Right: Outcomes Card Checklist */}
            <div className="lg:col-span-5">
              <div className={`${theme.outcomesBg} border-2 ${theme.outcomesBorder} rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300`}>
                <h3 className={`text-base md:text-lg font-bold font-fredoka ${theme.accentText} tracking-wide uppercase mb-6`}>
                  What Your Child Will Learn
                </h3>
                <ul className="space-y-4">
                  {program.outcomes.map((item, index) => (
                     <li key={index} className="flex items-start space-x-3 text-xs md:text-sm text-black leading-relaxed font-semibold">
                      <div className={`${theme.outcomesIconBg} text-white rounded-full p-0.5 mt-0.5 flex-shrink-0 shadow-sm`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Key Areas of Development */}
      <div className="py-16 bg-[#f8fbff] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl md:text-2xl font-bold font-fredoka text-brand-blue tracking-wide uppercase">
              Key Areas of Development
            </h3>
            <div className="w-12 h-1 bg-brand-yellow rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {program.keyAreas.map((area, index) => {
              const AreaIcon = area.Icon
              const style = keyAreaStyles[index % keyAreaStyles.length]
              return (
                <div 
                  key={index}
                  className={`border-2 rounded-3xl p-6 pt-8 pb-8 ${style.bgClass} ${style.borderClass} flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-white border-2 ${style.iconBgClass} flex items-center justify-center shadow-sm mb-4`}>
                    <AreaIcon className={`w-6 h-6 ${style.iconColorClass}`} />
                  </div>
                  <h4 className="font-fredoka font-bold text-brand-blue text-sm mb-3">
                    {area.title}
                  </h4>
                  <p className="text-black text-xs leading-relaxed font-medium">
                    {area.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* 4. A Typical Day & Teaching Approach */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Timeline: A Typical Day */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-fredoka text-brand-blue tracking-wide uppercase">
                  A Typical Day
                </h3>
                <div className="w-12 h-1 bg-brand-yellow rounded-full mt-2" />
              </div>

              {/* Vertical connected timeline design */}
              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6 max-h-[420px] overflow-y-auto pr-2 py-2">
                {program.typicalDay.map((sched, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className={`absolute -left-[32px] w-3.5 h-3.5 rounded-full bg-white border-[3px] ${theme.primaryColor === 'pink' ? 'border-pink-500' : theme.primaryColor === 'emerald' ? 'border-emerald-500' : theme.primaryColor === 'amber' ? 'border-amber-500' : theme.primaryColor === 'blue' ? 'border-blue-500' : 'border-orange-500'} shadow-sm`} />
                    
                    {/* Timeline Event Card */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 bg-white border-2 border-slate-100 hover:border-slate-300 p-3 rounded-2xl shadow-sm transition-all duration-300 w-full hover:shadow-md">
                      <span className={`text-[10px] font-bold tracking-wider ${theme.timelineBadge} px-3 py-1 rounded-full whitespace-nowrap w-fit border`}>
                        {sched.time}
                      </span>
                      <span className="text-xs md:text-sm text-black font-semibold">{sched.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo & Einstein Quote */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden h-[240px] hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={program.typicalImage} 
                  alt="Classroom Activity" 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Quote Block */}
              <div className={`${theme.quoteBg} border-l-4 ${theme.quoteBorder} p-5 rounded-r-2xl shadow-sm`}>
                <p className={`text-xs md:text-sm ${theme.quoteText} italic font-semibold leading-relaxed`}>
                  "Play is the highest form of research."
                </p>
                <p className={`text-[10px] ${theme.quoteAuthor} font-bold mt-1.5 text-right`}>— Albert Einstein</p>
              </div>
            </div>

            {/* Teaching Approach in a matching styled card */}
            <div className={`lg:col-span-4 border-2 ${theme.outcomesBorder} ${theme.outcomesBg} rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300`}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-fredoka text-brand-blue tracking-wide uppercase">
                    Our Approach
                  </h3>
                  <div className="w-12 h-1 bg-brand-yellow rounded-full mt-2" />
                </div>

                <p className="text-black text-xs md:text-sm leading-relaxed font-semibold">
                  We follow a play-based, child-centered curriculum that encourages exploration and discovery. Our caring educators create meaningful experiences that help children learn with joy and confidence.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {program.approach.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-xs md:text-sm text-black font-semibold">
                    <div className={`${theme.outcomesIconBg} text-white rounded-full p-0.5 flex-shrink-0 shadow-sm`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* 5. Call to Action Banner */}
      <div className="py-12 bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-2 ${theme.ctaBorder} ${theme.ctaBg} rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg`}>
            
            {/* Background design doodles */}
            <StarDoodle className="absolute -bottom-6 -left-6 text-brand-yellow/15 w-24 h-24 pointer-events-none select-none" />

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 relative z-10 text-center md:text-left">
              {/* Watercolor child avatar */}
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 ${theme.badgeBorder} flex items-center justify-center p-1 overflow-hidden shadow-md flex-shrink-0`}>
                <img 
                  src={detailsChildAvatar} 
                  alt="Smiling Kid" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="font-fredoka font-bold text-brand-blue text-xl md:text-2xl">
                  Give Your Child The Perfect Start!
                </h3>
                <p className="text-black text-xs md:text-sm font-semibold mt-1 leading-relaxed max-w-xl">
                  Admissions are now open for {program.titleName}. Limited seats available. Get in touch with us to enroll.
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-0 relative z-10 flex-shrink-0">
              <Link
                to="/enroll"
                className={`text-white ${theme.ctaButton} font-fredoka font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm flex items-center space-x-1`}
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

