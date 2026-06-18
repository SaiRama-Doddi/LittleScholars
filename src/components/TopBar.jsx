import { Phone, Mail } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-brand-blue text-white py-1.5 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center border-b border-white/10 font-outfit">
      {/* Contact Details */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-1 text-center text-[10px] sm:text-sm">
        <a href="tel:9492848489" className="flex items-center hover:text-brand-yellow transition-colors duration-200 whitespace-nowrap">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-brand-yellow flex-shrink-0" />
          <span className="font-semibold">
            <span className="hidden sm:inline">9492 8484 89 / 9491 7373 99</span>
            <span className="sm:hidden">9492 8484 89</span>
          </span>
        </a>
        <a href="mailto:littlescholarsips@gmail.com" className="flex items-center hover:text-brand-yellow transition-colors duration-200 whitespace-nowrap">
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-brand-yellow flex-shrink-0" />
          <span>littlescholarsips@gmail.com</span>
        </a>
      </div>

      {/* Social Icons - Hidden on mobile, shown on tablet/desktop */}
      <div className="hidden sm:flex items-center space-x-4 mt-2 md:mt-0">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-brand-yellow transition-colors duration-200 bg-white/10 p-1.5 rounded-full hover:bg-white/20"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-brand-yellow transition-colors duration-200 bg-white/10 p-1.5 rounded-full hover:bg-white/20"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-brand-yellow transition-colors duration-200 bg-white/10 p-1.5 rounded-full hover:bg-white/20"
          aria-label="YouTube"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.503a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.503 9.388.503 9.388.503s7.518 0 9.388-.503a3.003 3.003 0 0 0 2.11-2.11c.502-1.87.502-5.837.502-5.837s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
