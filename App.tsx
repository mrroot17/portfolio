
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sparkles from './components/Sparkles';

export type Language = 'uz' | 'en';
export type Theme = 'dark' | 'light';

const getInitialLang = (): Language => {
  if (typeof window === 'undefined') return 'uz';
  const saved = window.localStorage.getItem('lang');
  return saved === 'en' || saved === 'uz' ? saved : 'uz';
};

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  // Fall back to the user's OS-level preference
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(getInitialLang);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Persist language and keep <html lang> in sync for SEO/accessibility
  useEffect(() => {
    window.localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Apply theme to body and persist the choice
  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.style.setProperty('--bg-color', '#F8FAFC');
      document.body.style.setProperty('--text-color', '#1E293B');
    } else {
      document.body.classList.remove('light');
      document.body.style.setProperty('--bg-color', '#2C3E50');
      document.body.style.setProperty('--text-color', '#ffffff');
    }
  }, [theme]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang, theme]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${theme === 'light' ? 'bg-[#F8FAFC] text-slate-800' : 'bg-[#2C3E50] text-white'}`}>
      <Sparkles theme={theme} />
      
      {/* Decorative Background Elements */}
      <div className={`fixed inset-0 pointer-events-none opacity-20 -z-10 ${theme === 'dark' ? 'indigo-gradient' : 'bg-slate-50'}`}></div>
      
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      
      <main>
        <section id="hero">
          <Hero lang={lang} theme={theme} />
        </section>

        <section id="about" className="py-24 md:py-48 bg-transparent relative">
          <About lang={lang} theme={theme} />
        </section>

        <section id="contact" className="py-24 md:py-48 bg-black/5">
          <Contact lang={lang} theme={theme} />
        </section>
      </main>

      <Footer lang={lang} theme={theme} />
    </div>
  );
};

export default App;
