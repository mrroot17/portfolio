
import React from 'react';
import { Language, Theme } from '../App';

interface FooterProps {
  lang: Language;
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const currentYear = new Date().getFullYear();
  
  const content = {
    uz: {
      quote: 'Sokin dizayn va kuchli brending asosi.',
      nav: [
        { name: 'Men haqimda', href: '#about' },
        { name: 'Aloqa', href: '#contact' },
        { name: 'Yuqoriga', href: '#hero' },
      ],
    },
    en: {
      quote: 'Foundation of quiet design and strong branding.',
      nav: [
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Top', href: '#hero' },
      ],
    }
  }[lang];

  return (
    <footer className={`py-12 md:py-20 border-t transition-colors duration-700 ${
      theme === 'dark' ? 'border-white/5 bg-[#1a252f]' : 'border-black/5 bg-slate-100'
    }`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 reveal">
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">
            Ozodbek Nodirov <span className="mx-2 opacity-30">/</span> {currentYear}
          </div>
          
          <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-600 text-center max-w-xs md:max-w-none">
            {content.quote}
          </div>
          
          <nav aria-label="Pastki navigatsiya" className="flex gap-6 md:gap-10">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-[#4CA1AF] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
