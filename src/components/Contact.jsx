import React, { useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StatsCard = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 2000; // 2 seconds duration

      if (progress < 1) {
        setCount(Math.min(Math.floor(targetNumber * progress), targetNumber));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stats-${label}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [targetNumber]);

  return (
    <motion.div
      id={`stats-${label}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-blue-900/40 to-indigo-800/30
               border border-blue-500/30 p-6 rounded-xl text-center
               hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
               transition-all duration-300"
    >
      <motion.h4 className="text-3xl font-bold text-white mb-1">
        {count}
        {number.includes("+") ? "+" : ""}
      </motion.h4>
      <p className="text-blue-300 text-sm">{label}</p>
    </motion.div>
  );
};

const FormInput = ({ type, placeholder, name }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type={type}
    placeholder={placeholder}
    name={name}
    className="w-full rounded-xl border border-blue-500/50 bg-blue-900/20
             py-3 px-4 text-gray-100 placeholder:text-gray-400
             focus:border-blue-400 focus:outline-none focus:ring-2 
             focus:ring-blue-500/20 transition-all duration-300"
  />
);

const FormTextarea = ({ placeholder, name }) => (
  <motion.textarea
    whileFocus={{ scale: 1.02 }}
    placeholder={placeholder}
    name={name}
    rows="4"
    className="w-full rounded-xl border border-blue-500/50 bg-blue-900/20
             py-3 px-4 text-gray-100 placeholder:text-gray-400
             focus:border-blue-400 focus:outline-none focus:ring-2 
             focus:ring-blue-500/20 transition-all duration-300
             resize-none"
  />
);

const Contact = () => {
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
    <div className="relative min-h-screen py-20 px-4" id="contact">
      <Particles
        id="contactParticles"
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
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div
              className="bg-gradient-to-br from-blue-900/40 to-indigo-800/30 backdrop-blur-md
                          border border-blue-500/30 p-8 rounded-2xl
                          transform hover:-translate-y-1 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out for opportunities, collaborations, or
                just a tech chat! Always excited to explore new ideas and build
                amazing things together.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
            >
              <StatsCard number="8+" label="Projects" />
              <StatsCard number="2+" label="Years Experience" />
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center">
              {[
                {
                  icon: <AiFillGithub />,
                  href: "https://github.com/suystha7",
                  label: "GitHub",
                },
                {
                  icon: <AiFillLinkedin />,
                  href: "https://www.linkedin.com/in/suyog-shrestha-843b95248/",
                  label: "LinkedIn",
                },
                {
                  icon: <AiOutlineInstagram />,
                  href: "https://www.instagram.com/suyog.shresthaa/",
                  label: "Instagram",
                },
                {
                  icon: <AiOutlineMail />,
                  href: "mailto:suyogstha317@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-blue-900/40 to-indigo-800/30
                           border border-blue-500/30 p-4 rounded-xl
                           text-blue-400 text-2xl
                           hover:text-blue-300 transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            action="https://formspree.io/f/xeoedynk"
            method="POST"
            className="bg-gradient-to-br from-blue-900/40 to-sky-800/30 backdrop-blur-md
                     border border-blue-500/30 p-8 rounded-2xl
                     hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
                     transition-all duration-300"
          >
            <div className="space-y-6">
              <FormInput type="text" placeholder="Your Name" name="name" />
              <FormInput type="email" placeholder="Your Email" name="email" />
              <FormTextarea placeholder="Your Message" name="message" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold
                         bg-gradient-to-r from-blue-600 to-sky-600
                         hover:from-blue-700 hover:to-sky-700
                         transform transition-all duration-300
                         shadow-lg hover:shadow-sky-500/50"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
