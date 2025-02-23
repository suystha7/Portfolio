import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r 
                    from-transparent via-amber-500/50 to-transparent" />

      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-yellow-900/30 
                    backdrop-blur-sm -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Brand Section */} 
          <div className="text-center md:text-left space-y-4">
            <motion.h3
              animate={{
                backgroundPosition: ['0%', '200%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 
                       bg-[200%_auto] bg-clip-text text-transparent"
            >
              Suyog Shrestha
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Crafting Digital Experiences with Passion
            </p>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="mt-2 text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
      />
    </footer>
  );
};

export default Footer;