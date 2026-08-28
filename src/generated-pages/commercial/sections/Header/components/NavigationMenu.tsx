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
            itemClassName="w-28"
            href="https://www.snapmagicmedia.com/"
            wrapperClassName="pr-[15px]"
            innerClassName="bg-white left-0 right-[15px]"
            iconClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            iconInnerClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            textClassName="text-zinc-800"
            label="HOME"
          />
          <NavigationItem
            itemClassName="w-[175px]"
            href="https://www.snapmagicmedia.com/book-a-shoot"
            wrapperClassName="px-[15px]"
            innerClassName="bg-white inset-x-[15px]"
            iconClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            iconInnerClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            textClassName="text-zinc-800"
            label="Book a Shoot"
          />
          <NavigationItem
            itemClassName="w-[167px]"
            href="https://www.snapmagicmedia.com/commercial"
            wrapperClassName="px-[15px]"
            innerClassName="bg-zinc-300 inset-x-[15px]"
            iconClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABUSURBVHja7IwxDsAgDAMv5jN9Jh8v7saACOpUdcgNlg+ZAFwCJGAI8IyRtVTTiTe79M2NoiiKf9F7B9sIqKj4NGI2ZRpHXdqya5tvOl55oSHgfgYA2rIjMpojycEAAAAASUVORK5CYII=)]"
            iconInnerClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABUSURBVHja7IwxDsAgDAMv5jN9Jh8v7saACOpUdcgNlg+ZAFwCJGAI8IyRtVTTiTe79M2NoiiKf9F7B9sIqKj4NGI2ZRpHXdqya5tvOl55oSHgfgYA2rIjMpojycEAAAAASUVORK5CYII=)]"
            textClassName="text-gray-800"
            label="Commercial"
          />
          <NavigationItem
            itemClassName="w-[251px]"
            href="https://www.snapmagicmedia.com/photography"
            wrapperClassName="px-[15px]"
            innerClassName="bg-white inset-x-[15px]"
            iconClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            iconInnerClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            textClassName="text-zinc-800"
            label="Photography A-La-Carte"
          />
          <NavigationItem
            itemClassName="w-[135px]"
            href="https://www.snapmagicmedia.com/contact"
            wrapperClassName="pl-[15px]"
            innerClassName="bg-white left-[15px] right-0"
            iconClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            iconInnerClassName="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)]"
            textClassName="text-zinc-800"
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
