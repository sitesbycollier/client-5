import { NavigationItem } from "./NavigationItem";

export const NavigationMenu = () => {
  return (
    <div className="self-start caret-transparent block col-end-2 col-start-1 row-end-2 row-start-1 h-8 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto relative no-underline w-[840px] mt-[25px] mb-[7px] left-[77px]">
      <nav
        aria-label="Site"
        className="bg-[position:0px_0px] caret-transparent flex flex-col h-full absolute no-underline w-full inset-0"
      >
        <ul className="bg-[position:0px_0px] caret-transparent h-full list-none absolute text-center no-underline text-nowrap w-full pl-0">
          <NavigationItem
            href="https://www.snapmagicmedia.com/"
            label="HOME"
            itemVariant="w-28"
            wrapperVariant="pr-[15px]"
            innerVariant="left-0 right-[15px]"
          />
          <NavigationItem
            href="https://www.snapmagicmedia.com/book-a-shoot"
            label="Book a Shoot"
            itemVariant="w-[175px]"
            wrapperVariant="px-[15px]"
            innerVariant="inset-x-[15px]"
          />
          <NavigationItem
            href="https://www.snapmagicmedia.com/commercial"
            label="Commercial"
            itemVariant="w-[167px]"
            wrapperVariant="px-[15px]"
            innerVariant="inset-x-[15px]"
          />
          <NavigationItem
            href="https://www.snapmagicmedia.com/photography"
            label="Photography A-La-Carte"
            itemVariant="w-[251px]"
            wrapperVariant="px-[15px]"
            innerVariant="inset-x-[15px]"
          />
          <NavigationItem
            href="https://www.snapmagicmedia.com/contact"
            label="CONTACT"
            itemVariant="w-[135px]"
            wrapperVariant="pl-[15px]"
            innerVariant="left-[15px] right-0"
          />
        </ul>
        <div className="bg-[position:0px_0px] caret-transparent hidden no-underline">
          Use tab to navigate through the menu items.
        </div>
      </nav>
    </div>
  );
};
