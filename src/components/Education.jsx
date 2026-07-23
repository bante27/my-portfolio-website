import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaUniversity, FaBook, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import { FiTarget, FiCode, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { SiFigma, SiReact, SiMongodb, SiTailwindcss, SiDocker, SiKubernetes } from 'react-icons/si';

const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skills = [
    { name: "UI/UX", level: 90, icon: <SiFigma /> },
    { name: "React", level: 85, icon: <SiReact /> },
    { name: "Tailwind", level: 85, icon: <SiTailwindcss /> },
    { name: "Backend", level: 75, icon: <SiMongodb /> },
    { name: "Docker", level: 75, icon: <SiDocker /> },
    { name: "Kubernetes", level: 65, icon: <SiKubernetes /> },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: {
        duration: 3.5,
        delay: 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="education"
      ref={ref}
      className="relative min-h-screen w-full bg-[#0b1a31] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-30" viewBox="0 0 500 800" preserveAspectRatio="none">
          <path d="M500,800 L500,400 Q300,500 0,300 L0,800 Z" fill="#1e4eb8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.35em] uppercase text-blue-400 mb-3">
            Academic Background & Practical Experience
          </h2>
          <div className="h-1 w-14 bg-white mx-auto rounded-full"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14 items-center">

          {/* LEFT: UNIVERSITY & GPA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:space-y-10 text-center lg:text-left"
          >
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-3 md:mb-5 text-blue-300">
                <FaUniversity className="text-sm md:text-lg" />
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
                  University
                </span>
              </div>

              <h3 className="text-[8px] sm:text-[10px] md:text-[12px] font-black tracking-[0.5em] uppercase text-center lg:text-left text-white/60 mb-4 md:mb-6">
                Debre Berhan <br /> University
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm md:max-w-md mx-auto lg:mx-0">
                4th Year Information Systems Student focusing on bridging complex data, cloud infrastructure, full-stack engineering, and cybersecurity.
              </p>
            </div>

            {/* BADGES */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-xs md:max-w-sm mx-auto lg:mx-0">
              <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10">
                <p className="text-blue-400 font-black text-lg md:text-xl">2026</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Graduation
                </p>
              </div>
              <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10">
                <p className="text-blue-400 font-black text-lg md:text-xl">3.4</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  GPA
                </p>
              </div>
            </div>
          </motion.div>

          {/* CENTER: BADGE CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-[6px] sm:border-[8px] border-white/10 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-white flex flex-col items-center justify-center bg-[#0d2345]">
                  <FaGraduationCap className="text-3xl sm:text-5xl md:text-6xl mb-1 sm:mb-2 text-blue-400" />
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] font-black tracking-[0.35em] uppercase opacity-60">
                    Education
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-125 animate-pulse" />
            </div>
          </motion.div>

          {/* RIGHT: SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h4 className="text-[9px] sm:text-[10px] md:text-[10px] font-black tracking-[0.25em] uppercase text-center lg:text-right text-white/50 mb-4 md:mb-6">
                Technical Skillset
              </h4>

              {skills.map((skill, i) => (
                <div key={i} className="mb-3 md:mb-3.5">
                  <div className="flex justify-between items-center text-[9px] sm:text-[11px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1 sm:gap-2">
                      <span className="text-blue-400 text-sm md:text-base">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-blue-500 text-xs sm:text-[11px]">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full mt-1 md:mt-1.5 overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      variants={skillBarVariants}
                      initial="hidden"
                      animate={controls}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 md:pt-5">
              <div className="flex gap-2 md:gap-4 p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10">
                <FiTarget className="text-blue-400 text-lg md:text-xl mt-1 shrink-0" />
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-relaxed">
                  Aiming to specialize in Product Design, Cloud Containerization, and Penetration Testing / Cybersecurity within Ethiopia's tech ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🌟 NEW: PRACTICAL INTERNSHIP & TRAINING HIGHLIGHTS 🌟 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 md:mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-blue-400 mb-1">
              Industry Experience & Certifications
            </h3>
            <p className="text-xs text-white/50 font-light">Practical engineering & defensive cybersecurity focus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* INSA Internship Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl">
                    <FiBriefcase />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black uppercase tracking-wider text-white">INSA Internship</h4>
                    <p className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">Information Network Security Administration</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold tracking-widest bg-white/10 px-2.5 py-1 rounded-full text-gray-300 uppercase">
                  Last Year
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">
                Completed hands-on practical internship in Addis Ababa focusing on core full-stack system construction and security auditing.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  <FiCheckCircle /> Penetration Testing
                </span>
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  <FiCheckCircle /> Full-Stack Engineering
                </span>
              </div>
            </div>

            {/* Demera Nego Training Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black uppercase tracking-wider text-white">Demera Nego Training</h4>
                    <p className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">Specialized Cybersecurity Track</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold tracking-widest bg-blue-500/20 border border-blue-500/30 px-2.5 py-1 rounded-full text-blue-300 uppercase">
                  This Year
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">
                Undergoing intensive specialized training focused on system defense mechanisms, security protocols, and cyber threat mitigation.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  <FiCheckCircle /> Cybersecurity Defense
                </span>
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  <FiCheckCircle /> Vulnerability Assessment
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* STATS */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {[
            { val: "15+", label: "Projects", icon: <FiBriefcase /> },
            { val: "30+", label: "Courses", icon: <FaBook /> },
            { val: "Docker", label: "DevOps", icon: <SiDocker /> },
            { val: "React", label: "Dev", icon: <FiCode /> },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl py-4 sm:py-6 text-center">
              <div className="text-blue-400 text-lg sm:text-xl mb-1 flex justify-center">{s.icon}</div>
              <div className="text-sm sm:text-base md:text-lg font-black">{s.val}</div>
              <div className="text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;