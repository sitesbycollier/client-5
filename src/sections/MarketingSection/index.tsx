import { MarketingContent } from "@/sections/MarketingSection/components/MarketingContent";

export const MarketingSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-7 row-start-6 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(2,min-content)_1fr] no-underline w-full">
          <div
            role="region"
            aria-label="Marketing"
            className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[90px] justify-self-stretch min-h-[auto] min-w-[auto] relative no-underline text-nowrap w-full overflow-hidden mb-px left-0"
          >
            <div className="bg-[position:0px_0px] caret-transparent no-underline text-nowrap"></div>
            <span className="bg-[position:0px_0px] caret-transparent hidden no-underline text-nowrap">
              Marketing
            </span>
          </div>
          <section className="self-start bg-[position:0px_0px] caret-transparent flex col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full mb-2.5 left-0">
            <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
              <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
              <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
            </div>
            <div className="bg-[position:0px_0px] caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] relative no-underline w-full mx-auto">
              <div className="bg-[position:0px_0px] caret-transparent basis-[0%] grow-[980] min-h-[auto] relative no-underline w-full left-0 top-0">
                <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
                  <div className="bg-gray-800 bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
                  <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
                </div>
                <div className="bg-[position:0px_0px] caret-transparent min-h-[5px] pointer-events-none no-underline w-full">
                  <div className="bg-[position:0px_0px] caret-transparent no-underline"></div>
                </div>
              </div>
            </div>
          </section>
          <MarketingContent />
        </div>
      </div>
    </section>
  );
};
