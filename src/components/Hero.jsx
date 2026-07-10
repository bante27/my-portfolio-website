import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';
import { SiFigma, SiReact } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

const TITLES = [
  { text: 'Information Systems Student', icon: <FaUniversity /> },
  { text: 'UI/UX Designer', icon: <SiFigma /> },
  { text: 'Full-Stack Developer', icon: <SiReact /> },
];

const PortfolioHero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTitle((prev) => (prev + 1) % TITLES.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#0b1a31] overflow-hidden text-white font-sans"
    >
      {/* BACKGROUND - UPDATED TO NEW COLORS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* DESKTOP BLOB - UPDATED WITH SOLID BLUE FROM SECOND CODE */}
        <svg
          className="hidden lg:block absolute right-0 top-0 h-full w-[55%]"
          viewBox="0 0 600 900"
          preserveAspectRatio="none"
        >
          <path
            d="
              M120,0
              C260,60 520,40 600,220
              L600,900
              L0,900
              C40,620 40,180 120,0 Z
            "
            fill="#0d2345" 
          />
        </svg>

        {/* OVERLAY WAVES - UPDATED TO MATCH THE NEW THEME */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-60"
          viewBox="0 0 500 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,120 350,20 500,180 L500,450 C380,320 120,520 0,380 Z"
            fill="#0d2345"
          />
          <path
            d="M0,800 C120,680 320,740 500,580 L500,800 Z"
            fill="#1e4eb8"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center px-11 md:px-12 lg:px-24 pt-32 pb-12">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start lg:max-w-[55%] text-center lg:text-left"
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-blue-300 mb-2">
              Hi There, I'm
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-7xl font-light mb-6 tracking-tighter text-white/70 leading-tight">
              Bantalem Mitiku
            </h1>

            <div className="h-10 mb-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTitle}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="text-lg md:text-2xl xl:text-3xl font-extralight text-white/50 tracking-wide"
                >
                  {TITLES[currentTitle].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="/BM.pdf"
                download="Bantalem_Mitiku_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full uppercase text-[9px] lg:text-[10px] tracking-widest hover:bg-white/10"
              >
                <FiDownload />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full uppercase text-[9px] lg:text-[10px] tracking-widest hover:bg-white/10"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <div className="relative flex-1 flex justify-center">

            {/* MOBILE CIRCLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:hidden relative"
            >
              <div className="w-56 h-56 rounded-full border-[6px] border-white/10 overflow-hidden relative z-10 p-1">
                 <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="/image.png"
                      alt="Mobile Profile"
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            </motion.div>

            {/* DESKTOP IMAGE (NORMAL, IN FRONT) */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block relative z-10"
            >
                <div className="absolute -inset-10 bg-blue-600/10 blur-[80px] rounded-full" />
                <img
                    src="/image3.png"
                    alt="Desktop Profile"
                    className="relative z-10 max-h-[624px]  max-w-[900px] object-contain"

                />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;