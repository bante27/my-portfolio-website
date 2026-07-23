import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaDatabase, FaExternalLinkAlt, FaShoppingBag, FaLeaf, FaHeartbeat, FaShoppingCart } from 'react-icons/fa';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

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
      icon: <FaLeaf className="text-4xl" />,
      technologies: ["React", "Node.js", "MongoDB"],
      gradient: "from-[#0d2345] to-[#1e4eb8]",
      links: { 
        github: "https://github.com/bante27/AgroChaine-in-ET", 
        demo: "https://agrochaine-client.onrender.com" 
      },
    },
    {
      id: "02",
      title: "Online Cloth Shop",
      description: "Full-stack E-commerce web application featuring user authentication, payment integration, and product catalog management.",
      category: "E-Commerce",
      icon: <FaShoppingBag className="text-4xl" />,
      technologies: ["React", "Express", "Node.js"],
      gradient: "from-[#1e4eb8] to-[#0b1a31]",
      links: { 
        github: "https://github.com/bante27/cloth-front", 
        demo: "https://tigst-online-shop.onrender.com" 
      },
    },
    {
      id: "03",
      title: "Smart Health Monitoring",
      description: "Deep learning based smart health prediction and diagnostic monitoring system.",
      category: "Machine Learning & Health",
      icon: <FaHeartbeat className="text-4xl" />,
      technologies: ["Python", "Flask", "React"],
      gradient: "from-[#051124] to-[#1642a5]",
      links: { 
        github: "https://github.com/bante27/deeplearning" 
      },
    },
    {
      id: "04",
      title: "Grocery Web App",
      description: "Web platform designed for ordering and managing local daily grocery items efficiently.",
      category: "Web Application",
      icon: <FaShoppingCart className="text-4xl" />,
      technologies: ["React", "Node.js", "Tailwind"],
      gradient: "from-[#2260ff] to-[#0d2345]",
      links: { 
        github: "https://github.com/bante27/grocery" 
      },
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
          {projects.map((project) => {
            const mainLink = project.links.demo || project.links.github;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="group relative bg-white/[0.01] border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/20 transition-all duration-700 flex flex-col justify-between"
              >
                {/* CLICKABLE BANNER / IMAGE BOX */}
                <a 
                  href={mainLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative cursor-pointer block overflow-hidden`}
                >
                  <span className="absolute top-6 left-8 text-white/5 text-4xl font-black">{project.id}</span>
                  <div className="relative z-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                    {project.icon}
                  </div>
                </a>

                {/* INFO AREA */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[8px] font-thin tracking-[0.4em] uppercase text-blue-400">{project.category}</span>
                        <h4 className="text-xl font-light tracking-tight mt-1">
                          <a href={mainLink} target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                            {project.title}
                          </a>
                        </h4>
                      </div>
                      
                      {/* PROJECT LINKS */}
                      <div className="flex gap-3 items-center pt-2">
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-all">
                            <FiGithub size={16} />
                          </a>
                        )}
                        {project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-all">
                            <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[10px] font-thin text-white/40 leading-relaxed tracking-wider mb-8 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Micro Actions */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-5">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[6px] border border-white/5 px-2 py-0.5 rounded-full text-white/30 uppercase tracking-[0.2em] font-thin">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={mainLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[8px] font-thin tracking-[0.4em] uppercase text-blue-400 hover:text-white transition-colors"
                    >
                      view project <FiArrowRight />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;