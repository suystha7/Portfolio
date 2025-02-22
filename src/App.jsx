import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { motion, useScroll, useSpring } from "framer-motion";
import Loading from "./components/Loading";
import Experience from "./components/Experience";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const preloadResources = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Loading error:", error);
        setLoading(false);
      }
    };

    preloadResources();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Cursor />
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      {/* <Experience /> */}
      {/* <CodingStats /> */}
      <Contact />
      <Footer />
    </div>
  );
}
