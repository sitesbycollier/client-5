export type HiddenBootstrapProps = {
  variant: string;
};

export const HiddenBootstrap = (props: HiddenBootstrapProps) => {
  if (props.variant === "icon") {
    return (
      <img
        src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-1-7.svg"
        alt="Icon"
        className="caret-transparent hidden outline-[3px] no-underline align-baseline"
      />
    );
  }

  if (props.variant === "topOfPage") {
    return (
      <div
        role="region"
        aria-label="top of page"
        className="caret-transparent no-underline bg-[position:0px_0px] h-0 outline-[3px] pointer-events-none text-nowrap overflow-hidden"
      >
        <span className="bg-[position:0px_0px] caret-transparent hidden no-underline text-nowrap">
          top of page
        </span>
      </div>
    );
  }

  return (
    <div className="caret-transparent no-underline hidden text-[11px] leading-[11px] text-left font-lucida_grande">
      <div className="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline top-[-10000px] w-0 overflow-hidden">
        <div className="bg-[position:0px_0px] caret-transparent no-underline"></div>
      </div>
    </div>
  );
};
