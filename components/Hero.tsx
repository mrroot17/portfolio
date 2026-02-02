
import React from 'react';
import { Language, Theme } from '../App';

interface HeroProps {
  lang: Language;
  theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ lang, theme }) => {
  const content = {
    uz: {
      welcome: 'Xush kelibsiz',
      subtext: "Har kimning axloqi aslida kim ekanligini ko'rsatib beradi, shuning sababiyati ila axloqingizni go'zal qiling! Shuni unutmangki axloqingiz ila qalblarda(n) qolursiz!",
      button: 'Bog\'lanish'
    },
    en: {
      welcome: 'Welcome',
      subtext: "A person’s character ultimately reveals their true identity; therefore, strive to refine and beautify your character. Remember that it is through your character that you leave a lasting place in people’s hearts.",
      button: 'Get in Touch'
    }
  }[lang];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10 order-2 md:order-1">
          <div className="inline-block mb-6 overflow-hidden">
             <span className="block text-[10px] font-bold uppercase tracking-[0.6em] text-[#4CA1AF] animate-fade-up">
               {content.welcome}
             </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter leading-[1] mb-8 animate-fade-up delay-100">
            Ozodbek <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-white via-white' : 'from-slate-900 via-slate-800'} to-[#4CA1AF]/40`}>Nodirov</span>
          </h1>
          <p className={`text-base md:text-xl font-light max-w-lg tracking-wide leading-relaxed italic animate-fade-up delay-300 ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`}>
            {content.subtext}
          </p>
          
          <div className="mt-12 md:mt-16 animate-fade-up delay-500">
            <a 
              href="#contact" 
              className={`group relative inline-flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] border px-8 md:px-10 py-4 md:py-5 hover:bg-[#4CA1AF] hover:border-[#4CA1AF] hover:text-white transition-all duration-700 overflow-hidden ${
                theme === 'dark' ? 'border-white/10 text-white' : 'border-black/10 text-slate-900'
              }`}
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-500">{content.button}</span>
              <span className="relative z-10 opacity-50 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-500">→</span>
              <div className="absolute inset-0 bg-[#4CA1AF] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 animate-fade-up delay-200">
          <div className="relative group">
            {/* Main Image Container */}
            <div className={`w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-[450px] lg:w-[400px] lg:h-[550px] overflow-hidden rounded-[30px] md:rounded-[40px] border backdrop-blur-sm transition-all duration-1000 ease-in-out group-hover:border-[#4CA1AF]/40 group-hover:shadow-[0_0_50px_rgba(76,161,175,0.1)] ${
              theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-black/5 bg-black/5'
            }`}>
              <img 
                src="photo_2026-02-02_14-26-24.jpg"
                alt="Ozodbek Nodirov" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-[1.04] group-hover:opacity-80 transition-all duration-[1200ms] ease-out"
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
                theme === 'dark' ? 'bg-gradient-to-t from-[#2C3E50]/30 to-transparent' : 'bg-gradient-to-t from-slate-200/30 to-transparent'
              }`}></div>
            </div>
            
            {/* Decorative Floating Background Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 md:w-40 md:h-40 bg-[#4CA1AF] rounded-full blur-[60px] md:blur-[100px] opacity-20 -z-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"></div>
            <div className={`absolute -bottom-10 -left-10 w-24 h-24 md:w-40 md:h-40 rounded-full blur-[60px] md:blur-[100px] opacity-40 -z-10 group-hover:scale-110 transition-all duration-1000 ${
              theme === 'dark' ? 'bg-[#2C3E50]' : 'bg-slate-300'
            }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
