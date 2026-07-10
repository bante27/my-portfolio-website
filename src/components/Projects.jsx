import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaCode, FaFigma, FaDatabase, FaExternalLinkAlt, FaMobileAlt, FaLeaf } from 'react-icons/fa';
import { FiGithub, FiArrowRight, FiFigma } from 'react-icons/fi';
import { SiBlockchaindotcom } from 'react-icons/si';

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: "01",
      title: "Agrochain Platform",
      description: "A decentralized supply chain solution for Ethiopian agriculture using blockchain for transparency.",
      category: "Blockchain & Agriculture",
      icon: <FaLeaf className="text-4xl" />, // Updated icon for Agro
      technologies: ["React", "Blockchain", "Tailwind"],
      gradient: "from-[#0d2345] to-[#1e4eb8]",
      links: { 
        github: "#", 
        demo: "https://agrochain-client-orz8.onrender.com/login", 
        figma: "#" 
      },
    },
    {
      id: "02",
      title: "E-commerce UI/UX Redesign",
      description: "User-centered redesign focusing on local Ethiopian user behavior patterns.",
      category: "UI/UX Design",
      icon: <FaFigma className="text-xl" />,
      technologies: ["Figma", "Research"],
      gradient: "from-[#1e4eb8] to-[#0b1a31]",
      links: { github: "#", figma: "#", demo: "#" },
    },
    {
      id: "03",
      title: "Student Database System",
      description: "Relational database solution for managing complex academic records.",
      category: "Database Engineering",
      icon: <FaDatabase className="text-xl" />,
      technologies: ["MySQL", "PHP"],
      gradient: "from-[#051124] to-[#1642a5]",
      links: { github: "#", demo: "#" },
    },
    {
      id: "04",
      title: "Mobile Library App",
      description: "Digital concept for accessing university library resources on mobile.",
      category: "Mobile Systems",
      icon: <FaMobileAlt className="text-xl" />,
      technologies: ["React Native", "Figma"],
      gradient: "from-[#2260ff] to-[#0d2345]",
      links: { github: "#", figma: "#", demo: "#" },
    }
  ];

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <section id="projects" className="relative py-32 bg-[#0b1a31] overflow-hidden text-white" ref={ref}>
      
      {/* BACKGROUND - Liquid Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 500 800" preserveAspectRatio="none">
          <path d="M0,0 C150,120 350,20 500,180 L500,450 C380,320 120,520 0,380 Z" fill="#0d2345" />
          <path d="M0,800 C120,680 320,740 500,580 L500,800 Z" fill="#1e4eb8" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-10">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-thin tracking-[1em] uppercase text-blue-400 mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-thin tracking-tighter uppercase leading-none">
            Featured <span className="opacity-30">Projects</span>
          </h3>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="group relative bg-white/[0.01] border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/10 transition-all duration-700"
            >
              <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <span className="absolute top-6 left-8 text-white/5 text-4xl font-black">{project.id}</span>
                <div className="relative z-10 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                  {project.icon}
                </div>
              </div>

              {/* INFO AREA */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[8px] font-thin tracking-[0.4em] uppercase text-blue-400">{project.category}</span>
                    <h4 className="text-xl font-light tracking-tight mt-1">{project.title}</h4>
                  </div>
                  
                  {/* PROJECT LINKS */}
                  <div className="flex gap-3 items-center pt-2">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all"><FiGithub size={15} /></a>
                    )}
                    {project.links.figma && (
                      <a href={project.links.figma} target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all"><FiFigma size={15} /></a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all"><FaExternalLinkAlt size={12} /></a>
                    )}
                  </div>
                </div>

                <p className="text-[10px] font-thin text-white/30 leading-relaxed tracking-wider mb-8 line-clamp-2">
                  {project.description}
                </p>

                {/* Micro Actions */}
                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[6px] border border-white/5 px-2 py-0.5 rounded-full text-white/20 uppercase tracking-[0.2em] font-thin">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[8px] font-thin tracking-[0.4em] uppercase text-blue-400 hover:text-white transition-colors"
                    >
                      view this project <FiArrowRight />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;