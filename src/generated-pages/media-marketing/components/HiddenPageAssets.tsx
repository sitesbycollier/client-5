export type HiddenPageAssetsProps = {
  variant: "container" | "icon";
};

export const HiddenPageAssets = (props: HiddenPageAssetsProps) => {
  if (props.variant === "icon") {
    return (
      <img
        src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-1-8.svg"
        alt="Icon"
        className="caret-transparent hidden outline-[3px] no-underline align-baseline"
      />
    );
  }

  return (
    <div className="caret-transparent hidden text-[11px] leading-[11px] text-left no-underline font-lucida_grande">
      <div className="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline top-[-10000px] w-0 overflow-hidden">
        <div className="bg-[position:0px_0px] caret-transparent no-underline"></div>
      </div>
    </div>
  );
};
