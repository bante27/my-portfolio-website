import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiActivity, FiTerminal, FiLayers } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#051124]/80 backdrop-blur-md py-2 border-b border-white/5' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* LOGO SECTION */}
          <div onClick={() => scrollToSection('home')} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-5 h-5 border border-white/10 flex items-center justify-center group-hover:border-[#2260ff]/50 transition-colors">
              <span className="text-[13px] font-black tracking-tighter">BM</span>
            </div>
            <div className="flex flex-col leading-none">
             
              
            </div>
          </div>

          {/* DESKTOP NAV (NANO STYLE) */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="group flex items-center gap-1.5 px-3 py-1">
                
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/8 group-hover:text-white transition-all">
                  {item.label}
                </span>
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-white/5 flex items-center gap-2">
              <FiActivity size={10} className="text-[#2260ff] animate-pulse opacity-50" />
              <span className="text-[5px] font-mono tracking-[0.5em] text-white/10 uppercase italic">Active</span>
            </div>
          </nav>

          {/* MOBILE TOGGLE (THIN WIRE) */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1 items-end p-2">
            <span className={`h-[0.5px] bg-white transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-1' : 'w-3'}`} />
            <span className={`h-[0.5px] bg-white transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-1' : 'w-3'}`} />
            <span className={`h-[0.5px] bg-white transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-1' : 'w-3'}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="md:hidden fixed inset-0 z-[60] bg-[#051124] px-8 py-10 flex flex-col">
            
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                
                
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-[10px] font-black tracking-widest text-white/20 flex items-center gap-1 hover:text-white">
                CLOSE <FiX size={10} />
              </button>
            </div>

            <div className="mt-16 space-y-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group block w-full text-left"
                >
                  
                 <div className="text-[11px] scale-90 font-black uppercase text-white/70 leading-none transition-all group-hover:pl-3 group-hover:text-white border-l border-transparent group-hover:border-[#2260ff]">
                    {item.label}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center opacity-20">
              <div className="flex items-center gap-2">
                <FiLayers size={10} />
                
              </div>
              
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;