import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import { myHobbies, toolboxItems } from "@/data";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";

export const AboutSection = () => {
  return (
    <div>
      <section className="py-20 lg:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about me who I am, what I do and what inspires me"
          />

          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              <Card className="h-[320px] md:col-span-2">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspective"
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={BookImage} alt="book" />
                </div>
              </Card>

              <Card className="h-[320px] md:col-span-3">
                <CardHeader
                  title="My Toolbox"
                  description="  Explore the technologies & tools I use to craft execptional
                  digital experiences"
                  className=""
                />
                <ToolboxItem items={toolboxItems} className="" />
                <ToolboxItem
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="-translate-x-1/2"
                />
              </Card>
            </div>

            <div className="md:grid md:grid-cols-5 md:gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests & hobbies beyond the digital relam"
                  className="px-6 py-6"
                />
                <div className="relative flex-1">
                  {myHobbies.map((myHobby) => (
                    <div
                      key={myHobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: myHobby.left,
                        top: myHobby.top,
                      }}
                    >
                      <span className="font-medium text-gray-950">
                        {myHobby.title}
                      </span>
                      <span>{myHobby.emoji}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="h-[320px] relative md:col-span-2">
                <Image
                  src={MapImage}
                  alt="map image"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute  after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
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
