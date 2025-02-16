import Star from "@/assets/icons/star.svg";
import { words } from "@/data";
import { Fragment } from "react";

const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex mask-gradient-t">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] ">
            {[...new Array(2)].fill(0).map((_, idx) => {
              return (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex items-center gap-4">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <Star className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;