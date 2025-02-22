import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineGithub, AiOutlineLink, AiOutlineEye } from 'react-icons/ai';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "React Portfolio",
      description: "Personal Portfolio Website using React Js",
      links: {
        site: "https://cyberboyayush.in/",
        github: "https://github.com/cyberboyayush/React-Portfolio",
      },
    },
    {
      img: project2,
      title: "Zarina Bot",
      description: "An AI Based Group Chat Bot for Telegram",
      links: {
        site: "https://github.com/CyberBoyAyush/ZarinaBot",
        github: "https://github.com/CyberBoyAyush/ZarinaBot",
      },
    },
    {
      img: project3,
      title: "Simple Portfolio",
      description: "A simple easy to deploy portfolio for beginners.",
      links: {
        site: "https://cyberboyayush.github.io/Simple-Portfolio/",
        github: "https://github.com/CyberBoyAyush/Simple-Portfolio",
      },
    },
    {
      img: project4,
      title: "GP Links Bot",
      description: "Link Shortner Bot Works On GPLinks API.",
      links: {
        site: "https://github.com/CyberBoyAyush/GPLinksBot",
        github: "https://github.com/CyberBoyAyush/GPLinksBot",
      },
    },
    {
      img: project5,
      title: "JS-Portfolio",
      description: "Portfolio made with node js single page with projects page. (Easy to deploy) -> Uses Github Api to Fetch Projects",
      links: {
        site: "https://js-portfolio-demo.netlify.app/",
        github: "https://github.com/CyberBoyAyush/JS-Portfolio",
      },
    },
  ]

const ProjectButton = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ 
      scale: 1.05,
      y: -2,
      boxShadow: "0 15px 30px -5px rgba(147, 51, 234, 0.4)"
    }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-5 py-3 rounded-xl
             bg-gradient-to-r from-indigo-600 to-teal-600
             hover:from-indigo-500 hover:to-teal-500
             text-white font-semibold
             shadow-lg shadow-indigo-900/30
             hover:shadow-xl hover:shadow-indigo-600/40
             border border-indigo-500/20
             backdrop-blur-md z-50
             group [&>*]:text-white" // Added [&>*]:text-white to force white text on all children
  >
    <span className="text-xl group-hover:scale-110 transition-transform text-white">
      {icon}
    </span>
    <span className="text-white">{label}</span>
  </motion.a>
);

const ProjectCard = ({ project, index, isHovered, onHover }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleInteraction = () => {
    if (isTouchDevice) {
      setIsActive(!isActive);
    }
  };

  const showOverlay = isTouchDevice ? isActive : isHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => !isTouchDevice && onHover(index)} 
      onHoverEnd={() => !isTouchDevice && onHover(null)}
      onClick={handleInteraction}
      className="group relative rounded-2xl overflow-hidden
                 bg-gradient-to-br from-indigo-900/40 to-indigo-800/30
                 border border-indigo-500/30
                 hover:border-indigo-500/50
                 transition-all duration-500"
    >
      <div className="relative h-[300px] overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          whileHover={!isTouchDevice && { scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-contain bg-[#030014]/80 p-4"
            loading="lazy"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showOverlay ? 1 : 0,
            y: showOverlay ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t 
                     from-[#030014]/95 via-[#030014]/90 to-transparent
                     flex flex-col justify-end p-6
                     backdrop-blur-[2px]"
        >
          <h3 className="text-2xl font-bold mb-2 
                       bg-gradient-to-r from-indigo-400 to-teal-400 
                       bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-200 mb-6 text-base">
            {project.description}
          </p>
          <div className="flex gap-3">
            <ProjectButton 
              href={project.links.site} 
              icon={<AiOutlineEye />} 
              label="Demo" 
            />
            <ProjectButton 
              href={project.links.github} 
              icon={<AiOutlineGithub />} 
              label="Code" 
            />
          </div>
        </motion.div>

        {isTouchDevice && (
          <div className="absolute top-2 right-2 text-sm text-indigo-400 bg-[#030014]/80 px-2 py-1 rounded">
            Tap to {isActive ? 'close' : 'view'} details
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    particles: {
      color: { value: "#6b21a8" },
      links: {
        enable: true,
        color: "#6b21a8",
        opacity: 0.1,
      },
      move: {
        enable: true,
        speed: 0.6,
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: 2,
      },
    },
  };

  return (
    <div className="relative min-h-screen py-20 px-4" id="portfolio">
      <Particles
        id="portfolioParticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1200px] mx-auto"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12
                     bg-gradient-to-r from-indigo-400 to-teal-400 
                     bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isHovered={hoveredProject === index}
              onHover={setHoveredProject}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;