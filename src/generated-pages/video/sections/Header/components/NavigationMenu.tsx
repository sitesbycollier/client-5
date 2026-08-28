import { NavigationMenuItem } from "./NavigationMenuItem";

export const NavigationMenu = () => {
  return (
    <div className="self-start caret-transparent block col-end-2 col-start-1 row-end-2 row-start-1 h-8 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto relative no-underline w-[840px] mt-[25px] mb-[7px] left-[77px]">
      <nav
        aria-label="Site"
        className="bg-[position:0px_0px] caret-transparent flex flex-col h-full absolute no-underline w-full inset-0"
      >
        <ul className="bg-[position:0px_0px] caret-transparent h-full list-none absolute text-center no-underline text-nowrap w-full pl-0">
          <NavigationMenuItem
            itemClassName="w-28"
            href="https://www.snapmagicmedia.com/"
            wrapperClassName="pr-[15px]"
            innerClassName="left-0 right-[15px]"
            label="HOME"
          />
          <NavigationMenuItem
            itemClassName="w-[175px]"
            href="https://www.snapmagicmedia.com/book-a-shoot"
            wrapperClassName="px-[15px]"
            innerClassName="inset-x-[15px]"
            label="Book a Shoot"
          />
          <NavigationMenuItem
            itemClassName="w-[167px]"
            href="https://www.snapmagicmedia.com/commercial"
            wrapperClassName="px-[15px]"
            innerClassName="inset-x-[15px]"
            label="Commercial"
          />
          <NavigationMenuItem
            itemClassName="w-[251px]"
            href="https://www.snapmagicmedia.com/photography"
            wrapperClassName="px-[15px]"
            innerClassName="inset-x-[15px]"
            label="Photography A-La-Carte"
          />
          <NavigationMenuItem
            itemClassName="w-[135px]"
            href="https://www.snapmagicmedia.com/contact"
            wrapperClassName="pl-[15px]"
            innerClassName="left-[15px] right-0"
            label="CONTACT"
          />
        </ul>
        <div className="bg-[position:0px_0px] caret-transparent hidden no-underline">
          Use tab to navigate through the menu items.
        </div>
      </nav>
    </div>
  );
};
