export type NavigationItemProps = {
  href: string;
  label: string;
  itemVariant: string;
  wrapperVariant: string;
  innerVariant: string;
};

export const NavigationItem = (props: NavigationItemProps) => {
  return (
    <li
      className={`bg-[position:0px_0px] box-border caret-transparent inline-block h-8 relative no-underline text-nowrap ${props.itemVariant}`}
    >
      <a
        href={props.href}
        className="bg-[position:0px_0px] caret-transparent text-blue-700 inline-block h-full no-underline text-nowrap w-full"
      >
        <div
          className={`bg-[position:0px_0px] caret-transparent no-underline text-nowrap ${props.wrapperVariant}`}
        >
          <div
            className={`bg-white bg-[position:0px_0px] shadow-[rgba(0,0,0,0.6)_0px_1px_4px_0px] caret-transparent absolute no-underline text-nowrap overflow-hidden rounded-[10px] inset-y-0 ${props.innerVariant}`}
          >
            <div className="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)] bg-top bg-repeat-x caret-transparent h-full no-underline text-nowrap w-full rounded-[10px]">
              <div className="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGuCAYAAABRKGwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABNSURBVHja7IyxDcBACANt/0DZf7hA6qAHpXql8BUnjAzIzEsAlgDkW/Exlqn07s1ZjF/aiC7Csk5pkYQxxvwLapLGXZm06WmM7M7iGQB7rSiuF/oKBQAAAABJRU5ErkJggg==)] bg-bottom bg-repeat-x caret-transparent h-full no-underline text-nowrap w-full rounded-[10px]"></div>
            </div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent relative no-underline text-nowrap">
            <p className="bg-[position:0px_0px] caret-transparent text-zinc-800 inline-block text-base leading-8 no-underline text-nowrap px-2.5 font-wfont_387fbb_f948eb222b064376a33aa3bcb7abad2e">
              {props.label}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};
