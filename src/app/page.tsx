"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { ArrowUp } from "lucide-react";
import Header from "@/sections/Header";
import { Spinner } from "@/components/Spinner";

// Lazy-loaded sections
const HeroSection = lazy(() => import("@/sections/Hero"));
const ProjectsSection = lazy(() => import("@/sections/Projects"));
const TapeSection = lazy(() => import("@/sections/Tape"));
const AboutSection = lazy(() => import("@/sections/About"));
const TestimonialsSection = lazy(() => import("@/sections/Testimonials"));
const ContactSection = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/sections/Footer"));

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-y-auto scrollbar">
      <Header />

      <Suspense
        fallback={
          <div className="text-center py-10">
            <Spinner />
          </div>
        }
      >
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </Suspense>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all animate-bounce"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}
