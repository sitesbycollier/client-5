import { IntroSection } from "../IntroSection/index";
import { ServicesSection } from "../ServicesSection/index";

export const MainContent = () => {
  return (
    <main className="self-stretch caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 min-h-[auto] outline-[3px] relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full overflow-x-clip relative no-underline w-full left-0">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[1fr] grid-rows-[1fr] h-full no-underline">
          <div className="self-stretch bg-[position:0px_0px] caret-transparent col-end-1 col-start-1 row-end-1 row-start-1 h-full justify-self-stretch min-h-10 relative no-underline left-0">
            <div className="bg-[position:0px_0px] caret-transparent ml-[calc(50%_-_490px)] absolute no-underline w-[980px] inset-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
              <div className="bg-[position:0px_0px] caret-transparent pointer-events-none no-underline">
                <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
                  <div className="bg-[position:0px_0px] box-border caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] min-h-10 no-underline w-full">
                    <IntroSection />
                    <ServicesSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
