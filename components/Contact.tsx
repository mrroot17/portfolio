
import React from 'react';
import { Language, Theme } from '../App';

interface ContactProps {
  lang: Language;
  theme: Theme;
}

const socials = [
  { name: 'Telegram', href: 'https://t.me/nodirov_ozodbek', label: 'Mr NODIROV' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ozodbek-nodirov-2419233a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'Nodirov Ozodbek ' },
  { name: 'YouTube', href: 'https://www.youtube.com/@nodirov_ozodbek', label: 'Nodirov Ozodbek' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@nodirov_ozodbek', label: 'Nodirov Ozodbek' },
];

const Contact: React.FC<ContactProps> = ({ lang, theme }) => {
  const content = {
    uz: {
      label: 'Aloqa',
      heading: 'Men bilan <br /> <span class="text-[#4CA1AF]">bog\'lanish</span> oson.',
      email: 'Elektron pochta',
      phone: 'Telefon raqam',
      socials: 'Ijtimoiy tarmoqlar'
    },
    en: {
      label: 'Contact',
      heading: 'Getting in <br /> <span class="text-[#4CA1AF]">touch</span> is easy.',
      email: 'Email',
      phone: 'Phone number',
      socials: 'Socials'
    }
  }[lang];

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-5xl">
        <div className="flex items-center gap-4 mb-6 reveal">
          <span className="w-10 h-[1px] bg-[#4CA1AF]"></span>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#4CA1AF]">{content.label}</h2>
        </div>
        
        <h3 className={`text-4xl sm:text-5xl md:text-8xl font-serif font-bold mb-12 md:mb-20 leading-none tracking-tighter reveal delay-100 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} dangerouslySetInnerHTML={{ __html: content.heading }}>
        </h3>
        
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-7 space-y-10 md:space-y-16 reveal delay-200">
        <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
        {content.email}
        </p>

        <a
        href="mailto:nodirov0017@gmail.com"
        className={`text-xl sm:text-2xl md:text-5xl font-light
          hover:text-[#4CA1AF] transition-all duration-500
          group flex items-center gap-4 w-fit
          ${theme === 'dark' ? 'text-zinc-200' : 'text-slate-700'}`}
          >
          nodirov0017@gmail.com
                <span className="text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">↗</span>
              </a>
            </div>
            
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">{content.phone}</p>
              <a href="tel:+998771430017" className={`text-xl sm:text-2xl md:text-5xl font-light hover:text-[#4CA1AF] transition-all duration-500 ${theme === 'dark' ? 'text-zinc-200' : 'text-slate-700'}`}>
                +998 (77) 143-00-17
              </a>
            </div>
          </div>

          <div className="md:col-span-5 reveal delay-300">
            <p className={`text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 border-b pb-4 ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>{content.socials}</p>
            <div className="grid grid-cols-1 gap-6">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className={`group flex items-center justify-between py-2 border-b transition-all duration-500 ${theme === 'dark' ? 'border-white/5 hover:border-[#4CA1AF]/50' : 'border-black/5 hover:border-[#4CA1AF]/50'}`}
                >
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                    {social.name}
                  </span>
                  <span className="text-xs font-light text-zinc-600 group-hover:text-[#4CA1AF] transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
