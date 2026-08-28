export type PackageCardProps = {
  rootVariant: string;
  ariaLabel: string;
  videoSrc: string;
  videoClassName: string;
  imageSrc?: string;
  imageSizes?: string;
  imageClassName?: string;
  bottomVariant: string;
  contentVariant: string;
};

export const PackageCard = (props: PackageCardProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline ${props.rootVariant}`}
    >
      <div
        role="button"
        aria-label={props.ariaLabel}
        className="bg-[position:0px_0px] caret-transparent absolute no-underline -m-1 border-4 border-solid inset-0"
      >
        <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline rotate-[0.010000004184217528deg] w-full overflow-hidden left-0 top-0">
          <div className="bg-[position:0px_0px] caret-transparent h-full no-underline">
            <div className="caret-transparent block h-full outline-[3px] absolute no-underline w-full top-0">
              <video
                playsInline
                preload="auto"
                muted
                loop
                autoPlay
                src={props.videoSrc}
                className={props.videoClassName}
              ></video>
              {props.imageSrc ? (
                <img
                  sizes={props.imageSizes}
                  src={props.imageSrc}
                  alt=""
                  className={props.imageClassName}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[position:0px_0px] caret-transparent h-full pointer-events-none relative no-underline ${props.bottomVariant}`}
      >
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] h-full no-underline w-full">
          <div
            className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] opacity-80 pointer-events-auto relative no-underline ${props.contentVariant}`}
          >
            <div className="bg-[position:0px_0px] caret-transparent no-underline">
              <div className="bg-[position:0px_0px] caret-transparent opacity-0 no-underline scale-95">
                <img
                  src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-2-1.svg"
                  alt="Icon"
                  className="caret-transparent inline h-full outline-[3px] no-underline align-baseline w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
