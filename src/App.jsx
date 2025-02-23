import { useState, useEffect, Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Loading from "./components/Loading";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
const Cursor = lazy(() => import("./components/Cursor"));
const Experience = lazy(() => import("./components/Experience"));

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
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Suspense fallback={<Loading />}>
        <Cursor />
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
