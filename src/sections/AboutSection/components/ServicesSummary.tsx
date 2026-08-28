import { ServicesList } from "@/sections/AboutSection/components/ServicesList";
import { AboutText } from "@/sections/AboutSection/components/AboutText";

export const ServicesSummary = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] relative no-underline w-full mx-auto">
        <div className="bg-[position:0px_0px] caret-transparent basis-[0%] grow-[470] min-h-[auto] relative no-underline w-full left-0 top-0">
          <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
            <div className="bg-white bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] min-h-[1046px] no-underline w-full">
              <div
                title="2024 Logo.jpg"
                className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[332px] justify-self-start ml-[calc(100%_-_470px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[353px] mt-[116px] mb-[29px] left-[71px]"
              >
                <div className="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden">
                  <img
                    sizes="353px"
                    src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_f1f5f3eda7ee4e62b0be06013e94eec4~mv2-1.jpg"
                    alt=""
                    className="aspect-[auto_353_/_332] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
                  />
                </div>
              </div>
              <ServicesList />
            </div>
          </div>
        </div>
        <div className="bg-[position:0px_0px] caret-transparent basis-[0%] grow-[510] min-h-[auto] relative no-underline w-full left-0 top-0">
          <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
            <div className="bg-white bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
              <AboutText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
