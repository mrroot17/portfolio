
import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../App';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = lang === 'uz' 
    ? [ { name: 'Men haqimda', href: '#about' }, { name: 'Aloqa', href: '#contact' } ]
    : [ { name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' } ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled || isMenuOpen 
        ? (theme === 'dark' ? 'bg-[#2C3E50]/90 border-white/5' : 'bg-white/90 border-black/5') + ' backdrop-blur-xl border-b py-4 shadow-2xl' 
        : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="z-50">
        <a
        href="#hero"
        className={`transition-all duration-500 flex items-center gap-2 group ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
        >
        <img
        src="/image.png"
        alt="Ozodbek Nodirov logo"
        className="
        h-12 md:h-14
        w-auto
        group-hover:scale-105
        transition-transform
        duration-300
        "
        />
        </a>
        </div>


        <div className="flex items-center gap-4 md:gap-10">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 glow-hover ${
                  theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full glass border transition-all duration-500 hover:scale-110 active:scale-90 ${
                theme === 'dark' ? 'border-white/10 text-yellow-400' : 'border-black/10 text-slate-700'
              }`}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12H3m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Language Switcher */}
            <div className={`flex items-center glass p-1 rounded-full border backdrop-blur-md transition-colors ${
              theme === 'dark' ? 'border-white/10' : 'border-black/10'
            }`}>
              <button
                onClick={() => setLang('uz')}
                className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-500 ${
                  lang === 'uz' ? 'bg-[#4CA1AF] text-white shadow-lg shadow-[#4CA1AF]/20' : (theme === 'dark' ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-600')
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang('en')}
                className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-500 ${
                  lang === 'en' ? 'bg-[#4CA1AF] text-white shadow-lg shadow-[#4CA1AF]/20' : (theme === 'dark' ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-600')
                }`}
              >
                EN
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-2 cursor-pointer group z-50 p-2"
          >
            <span className={`w-8 h-[1px] transition-all duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-slate-800'} ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}></span>
            <span className={`w-8 h-[1px] transition-all duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-slate-800'} ${isMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`fixed inset-0 z-[40] flex flex-col items-center justify-center space-y-12 transition-all duration-700 md:hidden ${
        theme === 'dark' ? 'bg-[#2C3E50]' : 'bg-slate-50'
      } ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-serif font-bold tracking-widest uppercase transition-colors ${
              theme === 'dark' ? 'text-white hover:text-[#4CA1AF]' : 'text-slate-900 hover:text-[#4CA1AF]'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
