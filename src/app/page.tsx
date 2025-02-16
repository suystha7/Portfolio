"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import { Spinner } from "@/components/Spinner";
import Footer from "@/components/Footer";
import Tape from "@/components/Tape";

const HeroSection = lazy(() => import("@/containers/Hero"));
const ProjectsSection = lazy(() => import("@/containers/Projects"));
const AboutSection = lazy(() => import("@/containers/About"));
const TestimonialsSection = lazy(() => import("@/containers/Testimonials"));
const ContactSection = lazy(() => import("@/containers/Contact"));

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
        <Tape />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </Suspense>

      <Footer />

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
