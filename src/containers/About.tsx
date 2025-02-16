"use client";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import { educationTimeline, myHobbies, toolboxItems } from "@/data";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import { motion } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div>
      <section className="py-20 lg:py-28" id="about">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about me who I am, what I do and what inspires me"
          />

          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Education"
                  description="A journey through my academic milestones and the knowledge gained along the way"
                />
                <div className="w-full mt-2 md:mt-0">
                  <div className="space-y-2">
                    {educationTimeline.map((edu) => (
                      <div
                        key={edu.degree}
                        className="flex flex-col items-start gap-4 px-6 py-2"
                      >
                        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 tracking-widest text-transparent bg-clip-text gap-2">
                          <span className="font-semibold uppercase">
                            {edu.university}
                          </span>
                          <div className="text-sm text-white/60 mt-2">
                            <span className=""> {edu.degree}</span>
                            <span className="mx-2"> | </span>
                            <span>{edu.years}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="  Explore the technologies & tools I use to craft execptional
                  digital experiences"
                  className=""
                />
                <ToolboxItem
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItem
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests & hobbies beyond the digital relam"
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {myHobbies.map((myHobby) => (
                    <motion.div
                      key={myHobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: myHobby.left,
                        top: myHobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {myHobby.title}
                      </span>
                      <span>{myHobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
                <Image
                  src={MapImage}
                  alt="map image"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute  after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={SmileEmoji} alt="smile" className="size-20" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
