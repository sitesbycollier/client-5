export type CarouselControlsProps = {
  ariaLabel: string;
  buttonVariant: string;
  iconSrc: string;
  iconClassName: string;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  return (
    <button
      aria-label={props.ariaLabel}
      className={`items-center bg-transparent caret-transparent flex text-[13.3333px] h-[39px] justify-center opacity-90 absolute text-center no-underline text-nowrap top-[calc(50%_-_19.5px)] w-[23px] p-0 font-arial ${props.buttonVariant}`}
    >
      <img src={props.iconSrc} alt="Icon" className={props.iconClassName} />
    </button>
  );
};
