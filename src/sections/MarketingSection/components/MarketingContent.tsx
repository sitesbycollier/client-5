import { MarketingVideo } from "@/sections/MarketingSection/components/MarketingVideo";
import { MarketingCallToAction } from "@/sections/MarketingSection/components/MarketingCallToAction";

export const MarketingContent = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent flex col-end-2 col-start-1 row-end-4 row-start-1 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full mt-2 left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] relative no-underline w-full mx-auto">
        <div className="bg-[position:0px_0px] caret-transparent basis-[0%] grow-[980] min-h-[auto] relative no-underline w-full left-0 top-0">
          <div className="bg-[position:0px_0px] box-border caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
            <div className="bg-neutral-100 bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] no-underline w-full">
              <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[528px] mt-[47px] mb-[22px] left-[195px]">
                <h2 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[34px] break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
                  <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                      <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-roboto_bold">
                        MARKETING MAGIC
                      </span>
                    </span>
                  </span>
                </h2>
              </div>
              <MarketingVideo />
              <MarketingCallToAction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
