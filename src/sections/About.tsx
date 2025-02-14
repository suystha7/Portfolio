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

          <div className="mt-20">
            <Card className="h-[320px]">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={BookImage} alt="book" />
              </div>
            </Card>

            <Card className="h-[320px] p-0">
              <CardHeader
                title="My Toolbox"
                description="  Explore the technologies & tools I use to craft execptional
                  digital experiences"
                className="px-6 pt-6"
              />
              <ToolboxItem items={toolboxItems} className="mt-6" />
              <ToolboxItem
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>

            <Card>
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests & hobbies beyond the digital relam"
              />
              <div>
                {myHobbies.map((myHobby) => (
                  <div key={myHobby.title}>
                    <span>{myHobby.title}</span>
                    <span>{myHobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <Image src={MapImage} alt="map image" />
              <Image src={SmileEmoji} alt="smile" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
