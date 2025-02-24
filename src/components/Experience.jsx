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
    <div className="relative min-h-screen py-20 px-4" id="experience">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-yellow-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-4 text-center">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have worked with these amazing organizations and learned a lot
            from them. I am always excited to learn and explore more!
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-center place-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {experiences.map((experience, index) => (
            <Reveal key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex-none w-[300px] sm:w-[350px] md:w-[400px] border border-amber-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-amber-700/10"
              >
                <h2 className="text-gray-100 text-base md:text-[21px] font-bold">
                  {experience.company}
                </h2>
                <p className="text-gray-300 text-base">{experience.period}</p>
                <p className="text-gray-200 mt-4 text-lg font-semibold">
                  {experience.position}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
