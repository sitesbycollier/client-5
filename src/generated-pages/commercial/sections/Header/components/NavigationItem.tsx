export type NavigationItemProps = {
  itemClassName: string;
  href: string;
  wrapperClassName: string;
  innerClassName: string;
  iconClassName: string;
  iconInnerClassName: string;
  textClassName: string;
  label: string;
};

export const NavigationItem = (props: NavigationItemProps) => {
  return (
    <li
      className={`bg-[position:0px_0px] box-border caret-transparent inline-block h-8 relative no-underline text-nowrap ${props.itemClassName}`}
    >
      <a
        href={props.href}
        className="bg-[position:0px_0px] caret-transparent text-blue-700 inline-block h-full no-underline text-nowrap w-full"
      >
        <div
          className={`bg-[position:0px_0px] caret-transparent no-underline text-nowrap ${props.wrapperClassName}`}
        >
          <div
            className={`bg-[position:0px_0px] shadow-[rgba(0,0,0,0.6)_0px_1px_4px_0px] caret-transparent absolute no-underline text-nowrap overflow-hidden rounded-[10px] inset-y-0 ${props.innerClassName}`}
          >
            <div
              className={`bg-top bg-repeat-x caret-transparent h-full no-underline text-nowrap w-full rounded-[10px] ${props.iconClassName}`}
            >
              <div
                className={`bg-bottom bg-repeat-x caret-transparent h-full no-underline text-nowrap w-full rounded-[10px] ${props.iconInnerClassName}`}
              ></div>
            </div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent relative no-underline text-nowrap">
            <p
              className={`bg-[position:0px_0px] caret-transparent inline-block text-base leading-8 no-underline text-nowrap px-2.5 font-wfont_387fbb_f948eb222b064376a33aa3bcb7abad2e ${props.textClassName}`}
            >
              {props.label}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};
