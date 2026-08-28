import { DesktopNavigation } from "./components/DesktopNavigation";

export const Header = () => {
  return (
    <header className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 min-h-[auto] sticky no-underline w-full z-50 left-0 top-0">
      <div className="bg-[position:0px_0px] caret-transparent absolute no-underline w-full inset-0"></div>
      <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent ml-[calc(50%_-_490px)] absolute no-underline w-[980px] inset-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
              <DesktopNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
