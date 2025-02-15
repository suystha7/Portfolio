import React, { Fragment } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

export const ToolboxItem = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <>
      <div className={twMerge("flex mask-gradient-t", className)}>
        <div
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemsWrapperClassName
          )}
        >
          {[...new Array(2)].fill(0).map((_, idx) => {
            return (
              <Fragment key={idx}>
                {items.map((toolboxItem) => (
                  <div
                    key={toolboxItem.title}
                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                  >
                    <TechIcon component={toolboxItem.iconType} />
                    <span className="font-semibold">{toolboxItem.title}</span>
                  </div>
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
