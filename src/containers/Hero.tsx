"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Orbit } from "@/components/Orbit";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="home">
      <div className="absolute inset-0 mask-gradient">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <Orbit />
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="memoji" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl font-serif text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.
            </p>
          </div>

          {/* Down Arrow Button */}
          <div className="mt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="relative flex flex-col items-center justify-center p-2 bg-transparent border-0 cursor-pointer"
            >
              <ArrowDown className="text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all" />
              <span className="text-white text-sm mt-2">Scroll Down</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
