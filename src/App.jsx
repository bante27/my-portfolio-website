import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1a31] text-white font-sans selection:bg-blue-500/20">
      <Header />

      <main className="overflow-x-hidden">
        <Hero />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* ULTRA-SLIM SINGLE LINE FOOTER */}
      <footer className="mt-20 pb-8 bg-[#0b1a31]">
        <div className="max-w-7xl mx-auto px-10">
          
          {/* Extremely thin hairline to match image */}
          <div className="w-full h-[1px] bg-white/5 mb-6"></div>

          <div className="flex flex-row justify-between items-center opacity-40">
            
            {/* Left: Name & Year with thin separator */}
            <div className="flex items-center gap-3">
              <span className="text-[17px] tracking-[0.4em] uppercase font-thin">
                BM
              </span>
              <span className="text-[7px] opacity-30">/</span>
              <span className="text-[7px] tracking-[0.2em] font-thin">
                2026
              </span>
            </div>

            {/* Right: Compact School Info */}
            <div className="text-right">
               <span className="text-[6.5px] tracking-[0.3em] uppercase font-thin">
                DBU • Information Systems
              </span>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;