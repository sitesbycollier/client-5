export type NavigationMenuItemProps = {
  href: string;
  label: string;
  liVariant: string;
  outerVariant: string;
  innerVariant: string;
  iconVariant: string;
  markerVariant: string;
  textVariant: string;
};

export const NavigationMenuItem = (props: NavigationMenuItemProps) => {
  return (
    <li
      className={`bg-[position:0px_0px] box-border caret-transparent inline-block h-8 relative no-underline text-nowrap ${props.liVariant}`}
    >
      <a
        href={props.href}
        className="bg-[position:0px_0px] caret-transparent text-blue-700 inline-block h-full no-underline text-nowrap w-full"
      >
        <div
          className={`bg-[position:0px_0px] caret-transparent no-underline text-nowrap ${props.outerVariant}`}
        >
          <div
            className={`bg-[position:0px_0px] shadow-[rgba(0,0,0,0.6)_0px_1px_4px_0px] caret-transparent absolute no-underline text-nowrap overflow-hidden rounded-[10px] inset-y-0 ${props.innerVariant}`}
          >
            <div
              className={`bg-top bg-repeat-x caret-transparent h-full no-underline text-nowrap w-full rounded-[10px] ${props.iconVariant}`}
            >
              <div
                className={`bg-bottom bg-repeat-x caret-transparent h-full no-underline text-nowrap w-full rounded-[10px] ${props.markerVariant}`}
              ></div>
            </div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent relative no-underline text-nowrap">
            <p
              className={`bg-[position:0px_0px] caret-transparent inline-block text-base leading-8 no-underline text-nowrap px-2.5 font-wfont_387fbb_f948eb222b064376a33aa3bcb7abad2e ${props.textVariant}`}
            >
              {props.label}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};
