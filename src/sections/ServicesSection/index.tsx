import { ServicesIntro } from "@/sections/ServicesSection/components/ServicesIntro";

export const ServicesSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div
            role="region"
            aria-label="SERVICES"
            className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[90px] justify-self-stretch min-h-[auto] min-w-[auto] relative no-underline text-nowrap w-full overflow-hidden mt-[22px] mb-2.5 left-0"
          >
            <div className="bg-[position:0px_0px] caret-transparent no-underline text-nowrap"></div>
            <span className="bg-[position:0px_0px] caret-transparent hidden no-underline text-nowrap">
              SERVICES
            </span>
          </div>
          <ServicesIntro />
        </div>
      </div>
    </section>
  );
};
