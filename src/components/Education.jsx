import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaUniversity, FaBook, FaGraduationCap } from 'react-icons/fa';
import { FiTarget, FiCode, FiBriefcase } from 'react-icons/fi';
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
            Academic Background
          </h2>
          <div className="h-1 w-14 bg-white mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14 items-center">

          {/* LEFT */}
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
                4th Year Information Systems Student focusing on bridging complex data, cloud infrastructure, and user-centric design.
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

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-[6px] sm:border-[8px] border-white/10 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-white flex flex-col items-center justify-center bg-[#0d2345]">
                  <FaGraduationCap className="text-3xl sm:text-5xl md:text-6xl mb-1 sm:mb-2" />
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] font-black tracking-[0.35em] uppercase opacity-60">
                    Education
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-125 animate-pulse" />
            </div>
          </motion.div>

          {/* RIGHT */}
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
                  Aiming to specialize in Product Design, Cloud Containerization, and Full-Stack Engineering within Ethiopia's tech ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
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