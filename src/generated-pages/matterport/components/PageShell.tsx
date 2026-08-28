import { Header } from "../sections/Header/index";
import { MainContent } from "../sections/MainContent/index";
import { OverlayEmbeds } from "./OverlayEmbeds";
import { Footer } from "../sections/Footer/index";

export const PageShell = () => {
  return (
    <div className="bg-[position:0px_0px] caret-transparent relative no-underline">
      <div className="bg-[position:0px_0px] caret-transparent no-underline">
        <div
          role="region"
          aria-label="top of page"
          className="bg-[position:0px_0px] caret-transparent h-0 outline-[3px] pointer-events-none no-underline text-nowrap overflow-hidden"
        >
          <span className="bg-[position:0px_0px] caret-transparent hidden no-underline text-nowrap">
            top of page
          </span>
        </div>
        <div className="bg-[position:0px_0px] caret-transparent no-underline">
          <div className="bg-[position:0px_0px] caret-transparent no-underline">
            <div className="bg-[position:0px_0px] caret-transparent h-full min-h-[1000px] min-w-[980px] absolute no-underline w-full top-0">
              <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
                <div className="bg-gray-800 bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
                <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[position:0px_0px] caret-transparent min-h-full min-w-[980px] relative no-underline w-full mx-auto top-0">
          <div className="items-start bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[max-content_max-content_min-content_max-content] no-underline w-full left-0">
            <Header />
            <MainContent />
            <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 min-h-[auto] min-w-[auto] no-underline w-full">
              <div className="bg-[position:0px_0px] box-border caret-transparent pointer-events-none no-underline w-full">
                <div className="bg-[position:0px_0px] caret-transparent no-underline">
                  <div className="bg-[position:0px_0px] caret-transparent hidden ml-[calc(50%_-_490px)] pointer-events-auto absolute no-underline left-0 top-[15px]"></div>
                </div>
              </div>
            </div>
            <OverlayEmbeds />
            <Footer />
          </div>
        </div>
        <div
          role="region"
          aria-label="bottom of page"
          className="bg-[position:0px_0px] caret-transparent h-0 pointer-events-none no-underline text-nowrap overflow-hidden"
        >
          <span className="bg-[position:0px_0px] caret-transparent hidden no-underline text-nowrap">
            bottom of page
          </span>
        </div>
      </div>
    </div>
  );
};
