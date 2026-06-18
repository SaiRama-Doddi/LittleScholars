import { Link } from 'react-router-dom'
import { 
  FileText, 
  Users, 
  ClipboardList, 
  ShieldCheck, 
  Check, 
  Shield, 
  GraduationCap, 
  Sparkles, 
  Award, 
  Smile, 
  Heart,
  ChevronRight,
  ArrowRight,
  ArrowDown,
  Star
} from 'lucide-react'
import kidsImg from '../assets/admissions_hero_kids.webp'

export default function AdmissionsPage() {
  const steps = [
    {
      num: '01',
      title: 'Enquiry',
      desc: 'Fill the enquiry form or contact us.',
      icon: <FileText className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '02',
      title: 'Counselling',
      desc: 'Our team will guide you about the best program.',
      icon: <Users className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '03',
      title: 'Application',
      desc: 'Submit the admission form with documents.',
      icon: <ClipboardList className="w-6 h-6 text-brand-blue" />
    },
    {
      num: '04',
      title: 'Confirmation',
      desc: 'Once verified, we confirm the admission!',
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />
    }
  ]

  const docs = [
    'Completed Admission Form',
    "Child's Birth Certificate (Photocopy)",
    'Passport Size Photographs (2 Nos.)',
    'Aadhar Card Copy (Child & Parents)',
    'Previous School Record (If Applicable)',
    'Address Proof'
  ]

  const reasons = [
    {
      title: 'Safe & Secure',
      desc: 'Child safe environment with CCTV surveillance.',
      icon: <Shield className="w-5 h-5 text-brand-blue" />
    },
    {
      title: 'Experienced Faculty',
      desc: 'Qualified and caring teachers dedicated to your child.',
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />
    },
    {
      title: 'Holistic Development',
      desc: 'Focus on academics, creativity, social and emotional growth.',
      icon: <Sparkles className="w-5 h-5 text-brand-blue" />
    },
    {
      title: 'Modern Infrastructure',
      desc: 'Bright classrooms and world-class learning facilities.',
      icon: <Award className="w-5 h-5 text-brand-blue" />
    }
  ]

  return (
    <div className="bg-[#f8fafc] font-outfit min-h-screen pb-16 animate-page-fade">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative bg-white overflow-hidden pt-8 md:pt-12 pb-0">
        
        {/* Paper Airplane Doodle (Top Left) */}
        <div className="absolute top-6 left-6 md:top-10 md:left-16 text-slate-300 pointer-events-none select-none animate-float">
          <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M10,80 C30,70 45,45 55,58 C65,72 75,55 98,35" strokeDasharray="4,4" />
            <g transform="translate(93, 23) rotate(-15)">
              <path d="M0,0 L20,8 L8,12 L0,0 Z" fill="none" />
              <path d="M20,8 L2,18 L8,12" />
              <path d="M8,12 L8,17 L11,14" />
            </g>
          </svg>
        </div>

        {/* Floating Star */}
        <div className="absolute top-8 left-1/3 text-brand-yellow animate-pulse-slow">
          <Star className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
        </div>

        {/* Floating Stars (Top Right) */}
        <div className="absolute top-8 right-6 md:top-12 md:right-20 text-brand-yellow flex space-x-1 animate-pulse-slow">
          <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
          <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow mt-3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Column: Heading and Text */}
            <div className="lg:col-span-6 pb-16 md:pb-24 lg:pb-32 text-center lg:text-left space-y-4 md:space-y-6">
              
              {/* Admissions Open Capsule */}
              <div className="inline-block bg-brand-blue text-white text-xs md:text-sm font-fredoka font-bold px-5 py-1.5 rounded-full tracking-wider uppercase">
                Admissions Open
              </div>

              <h1 className="font-fredoka text-6xl sm:text-7xl lg:text-8xl font-black text-brand-blue leading-none uppercase">
                2026-27
              </h1>
              
              <h2 className="font-fredoka text-xl sm:text-2xl md:text-3xl font-bold text-brand-orange leading-tight">
                Give Your Child The Best Start <br /> For A Bright Future
              </h2>
              
              {/* Star Icon below subtitle */}
              <div className="flex justify-center lg:justify-start">
                <Star className="w-6 h-6 fill-brand-yellow text-brand-yellow animate-pulse" />
              </div>

              <p className="text-black text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal relative">
                At Little Scholars International Preschool, we provide a safe, nurturing and stimulating environment where children learn, play and grow with joy.
                
                {/* Small star doodle floating to the right of text */}
                <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-brand-yellow hidden xl:inline-block animate-pulse-slow">
                  <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                </span>
              </p>
            </div>

            {/* Right Column: Kids playing and learning (Stretches to top of hero, cut by wave on bottom) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 relative">
              <img 
                src={kidsImg} 
                alt="Little Scholars Admissions Hero" 
                className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto max-h-[300px] sm:max-h-[450px] lg:max-h-[500px] object-contain pointer-events-none select-none"
              />
            </div>

          </div>
        </div>

        {/* Wavy Divider with Yellow accent border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] lg:h-[130px]">
            {/* Yellow Accent Wave */}
            <path d="M0,82 C360,152 720,12 1080,112 C1260,142 1380,102 1440,82 L1440,160 L0,160 Z" fill="#fab818"></path>
            {/* Blue Main Wave */}
            <path d="M0,90 C360,160 720,20 1080,120 C1260,150 1380,110 1440,90 L1440,160 L0,160 Z" fill="#0c2b5c" className="fill-brand-blue"></path>
          </svg>
        </div>

      </section>

      {/* 2. ADMISSIONS PROCESS & REQUIRED DOCUMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Admissions Process (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
              <h2 className="font-fredoka text-xl font-bold text-brand-blue tracking-wider uppercase">
                Admissions Process
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center relative">
              {steps.map((step, index) => (
                <div key={step.num} className="flex flex-col items-center relative">
                  
                  {/* Step Card */}
                  <div className="w-full bg-white rounded-2xl p-5 border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-3 relative">
                    <div className="w-14 h-14 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center justify-center">
                      {step.icon}
                    </div>
                    {/* Badge number */}
                    <div className="w-6 h-6 rounded-full bg-brand-blue text-white text-[10px] font-bold flex items-center justify-center font-outfit shadow-sm">
                      {step.num}
                    </div>
                    <h3 className="font-fredoka font-bold text-brand-blue text-sm">{step.title}</h3>
                    <p className="text-black text-xs leading-relaxed font-medium">{step.desc}</p>
                  </div>

                  {/* Flow Arrow (Only render between steps) */}
                  {index < steps.length - 1 && (
                    <>
                      {/* Desktop arrow */}
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      {/* Mobile arrow */}
                      <div className="lg:hidden block py-2 text-slate-300">
                        <ArrowDown className="w-5 h-5" />
                      </div>
                    </>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* Right: Required Documents (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-fredoka text-xl font-bold text-brand-blue tracking-wider uppercase">
                Required Documents
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/80">
              <ul className="space-y-4">
                {docs.map((doc, idx) => (
                  <li key={idx} className="flex items-center space-x-3.5">
                    <div className="w-7 h-7 rounded-lg bg-brand-blue text-brand-yellow flex items-center justify-center flex-shrink-0 shadow-inner">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-black text-sm font-normal leading-snug">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE US & LIMITED SEATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Why Choose Us (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-fredoka text-xl font-bold text-brand-blue tracking-wider uppercase">
                Why Choose Us?
              </h2>
              <div className="h-0.5 w-12 bg-brand-yellow mt-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-brand-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-brand-blue text-sm">{item.title}</h3>
                    <p className="text-black text-xs mt-1 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Limited Seats Available Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-brand-blue text-white rounded-3xl p-8 h-full flex flex-col justify-between relative overflow-hidden shadow-lg">
              
              {/* Paper airplane background doodle */}
              <div className="absolute -bottom-6 -right-6 text-white/10 pointer-events-none select-none">
                <svg className="w-32 h-32 rotate-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>

              <div className="space-y-3.5 z-10 relative">
                <h3 className="font-fredoka font-bold text-xl text-brand-yellow tracking-wide uppercase">
                  Limited Seats Available!
                </h3>
                <p className="text-slate-200 text-sm font-normal leading-relaxed max-w-sm">
                  Give your child the gift of quality education, creativity, and joyful play-based learning.
                </p>
              </div>

              <div className="mt-8 z-10 relative">
                <Link
                  to="/enroll"
                  className="bg-brand-yellow hover:bg-brand-orange text-brand-blue hover:text-white font-fredoka font-bold py-3 px-6 rounded-full inline-flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. KEY ADMISSIONS STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="bg-white border-2 border-slate-200 rounded-3xl py-8 px-6 md:px-12 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 pb-4 sm:pb-0 sm:border-r border-slate-200 last:border-0">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-fredoka font-black text-brand-blue text-2xl leading-none">10+</h4>
                <p className="text-black text-xs mt-1 font-semibold">Years of Excellence</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 pb-4 sm:pb-0 sm:border-r border-slate-200 last:border-0">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                <Users className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-fredoka font-black text-brand-blue text-2xl leading-none">500+</h4>
                <p className="text-black text-xs mt-1 font-semibold">Happy Students</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-4 border-b sm:border-b-0 pb-4 sm:pb-0 lg:border-r border-slate-200 last:border-0">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                <GraduationCap className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-fredoka font-black text-brand-blue text-2xl leading-none">25+</h4>
                <p className="text-black text-xs mt-1 font-semibold">Qualified Teachers</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center space-x-4 last:border-0">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                <Smile className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-fredoka font-black text-brand-blue text-2xl leading-none">100%</h4>
                <p className="text-black text-xs mt-1 font-semibold">Parent Satisfaction</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
