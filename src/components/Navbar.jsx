import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "boxicons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Navigation
  const toggleNav = () => setNav((prev) => !prev);

  // Handle smooth scrolling & close mobile menu
  const handleScroll = (section) => {
    toggleNav(); // Close menu when an item is clicked
    setTimeout(() => {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  // Reload Page when clicking on the Logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-[40] transition-all duration-300 ${
        scrolled ? "bg-[#030014]/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 md:px-12 h-20">
        {/* Logo */}
        <motion.a
          href="/"
          onClick={handleLogoClick}
          className="relative group flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <box-icon name="code-alt" color="#ffffff"></box-icon>
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">
            S & S
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["skills", "projects", "contact"].map((section, index) => (
            <motion.li
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ScrollLink
                to={section}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="https://me.suyogshr.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-600/20 to-yellow-600/20 
              border border-amber-500 rounded-xl hover:from-amber-600/30 hover:to-yellow-600/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Profiles
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.div
          onClick={toggleNav}
          className="md:hidden z-50 cursor-pointer text-gray-200 hover:text-amber-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleNav}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed right-0 top-0 w-[300px] h-screen bg-[#030014] z-40 p-8 border-l border-amber-500/20 backdrop-blur-lg`}
          initial={{ x: "100%" }}
          animate={{ x: nav ? 0 : "100%" }}
          transition={{ type: "spring", damping: 20 }}
        >
          <ul className="space-y-8 mt-20">
            {["skills", "projects", "contact"].map((section, index) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ScrollLink
                  to={section}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleScroll(section)}
                  className="text-2xl text-gray-300 hover:text-amber-400 transition-colors duration-300 block"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </motion.li>
            ))}
            <motion.li>
              <motion.a
                href="https://suystha7.bio.link/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleNav}
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-amber-600/20 to-yellow-600/20 
                                         border border-amber-500 rounded-xl hover:from-amber-600/30 hover:to-yellow-600/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Profiles
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
