
import React from 'react';
import { Language, Theme } from '../App';

interface AboutProps {
  lang: Language;
  theme: Theme;
}

const About: React.FC<AboutProps> = ({ lang, theme }) => {
  const content = {
    uz: {
      label: 'Falsafam',
      heading: "Axloq — bu <span class='italic font-normal opacity-50'>professionallikning asosi.</span>",
      quote: "Men uchun haqiqiy professionallik bilimdan oldin <span class='text-accent border-b border-[#4CA1AF]/30'>axloq</span>, natijadan oldin esa <span class='text-accent border-b border-[#4CA1AF]/30'>mas’uliyat</span> bilan boshlanadi.",
      p1: "Axloq — bu faqat shaxsiy fazilat emas, balki kasbiy yondashuvdir. Vaqtga hurmat, va’daga sodiqlik va halol muloqot har qanday texnik mahoratdan ustun turadi. Chunki ishonch — professionallikning eng muhim poydevoridir.",
      p2: "Men ishda ham, munosabatlarda ham shovqinsiz aniqlikni tanlayman. Har bir qaror ong bilan, har bir yechim mas’uliyat bilan qabul qilinishi kerak. Axloq va professionallik men uchun ajralmas tushunchalar — biri bo‘lmasa, ikkinchisi to‘liq bo‘la olmaydi."
    },
    en: {
      label: 'Philosophy',
      heading: "Morality is the <span class='italic font-normal opacity-50'>foundation of professionalism.</span>",
      quote: "For me, true professionalism begins with <span class='text-accent border-b border-[#4CA1AF]/30'>integrity</span> before expertise, and with <span class='text-accent border-b border-[#4CA1AF]/30'>responsibility</span> before results.",
      p1: "Morality is not just a personal trait, but a professional standard. Respect for time, honesty in communication, and commitment to one's word outweigh any technical skill. Trust is the true backbone of professionalism.",
      p2: "In both work and collaboration, I choose quiet clarity over noise. Every decision should be intentional, and every solution should carry responsibility. For me, morality and professionalism are inseparable—without one, the other cannot truly exist."
    }
  }[lang];

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
        <div className="lg:w-1/3 reveal">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#4CA1AF]"></span>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#4CA1AF]">{content.label}</h2>
          </div>
          <h3 className={`text-3xl md:text-5xl font-serif font-bold leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} dangerouslySetInnerHTML={{ __html: content.heading }}>
          </h3>
        </div>
        
        <div className="lg:w-2/3 space-y-8 md:space-y-12">
          <p className={`text-xl md:text-4xl font-light leading-snug tracking-tight reveal delay-100 ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-600'}`} 
             dangerouslySetInnerHTML={{ __html: content.quote.replace('text-accent', theme === 'dark' ? 'text-white' : 'text-slate-900') }}>
          </p>
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
            <div className="reveal delay-200">
              <p className={`leading-relaxed font-light text-base md:text-lg ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`}>
                {content.p1}
              </p>
            </div>
            <div className="reveal delay-300">
              <p className={`leading-relaxed font-light text-base md:text-lg ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`}>
                {content.p2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
