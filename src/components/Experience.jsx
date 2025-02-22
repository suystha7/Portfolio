import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Spyders Lab Pvt. Ltd.",
    period: "Sept 2022 - Dec 2022",
    position: "Frontend Developer Intern",
  },
  {
    company: "Open Source ASCOL",
    period: "Sept 2023 - Dec 2024",
    position: "Executive Member",
  },
  {
    company: "Leo Club of Kathmandu Nepalaya",
    period: "Aug 2023 - Present",
    position: "Joint Secretary",
  },
  {
    company: "Tukilogic Pvt. Ltd.",
    period: "Aug 2024 - Present",
    position: "Jr. Frontend Developer",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent mb-4">
        Work Experience
      </h2>
      <motion.div
        className="flex space-x-8 overflow-x-auto flex-wrap gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }} // For staggered animation effect on the child items
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="flex-none w-[300px] sm:w-[350px] md:w-[400px] border border-indigo-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-indigo-700/10"
            >
              <h2 className="text-gray-100 text-xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.position}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
