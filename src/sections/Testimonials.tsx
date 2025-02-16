import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { testimonials } from "@/data";
import { Fragment } from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about me"
          description=" Don't just take my word for it. See what my clients have to say
        about my work"
        />

        <div className="mt-12 lg:mt-24 flex overflow-x-clip mask-gradient-t py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => {
              return (
                <Fragment key={idx}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm md:text-base mt-4 md:mt-6">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;