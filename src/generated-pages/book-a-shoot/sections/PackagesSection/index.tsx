import { PackageCard } from "./components/PackageCard";
import { PackagePrice } from "./components/PackagePrice";

export type PackagesSectionProps = {
  componentType: string;
  containerVariant?: string;
  headingVariant?: string;
  headingText?: string;
  headingTextAfterBreak?: string;
  headingInnerVariant?: string;
  headingFontClassName?: string;
  title?: string;
  href?: string;
  imageSrc?: string;
  imageSizes?: string;
  imageAlt?: string;
  imageClassName?: string;
  rootVariant?: string;
  ariaLabel?: string;
  videoSrc?: string;
  videoClassName?: string;
  bottomVariant?: string;
  contentVariant?: string;
  price?: string;
  linkVariant?: string;
  priceVariant?: string;
};

export const PackagesSection = (props: PackagesSectionProps) => {
  if (props.componentType === "packageCard") {
    return (
      <PackageCard
        rootVariant={props.rootVariant ?? ""}
        ariaLabel={props.ariaLabel ?? ""}
        videoSrc={props.videoSrc ?? ""}
        videoClassName={props.videoClassName ?? ""}
        {...(props.imageSrc ? { imageSrc: props.imageSrc } : {})}
        {...(props.imageSizes ? { imageSizes: props.imageSizes } : {})}
        {...(props.imageClassName
          ? { imageClassName: props.imageClassName }
          : {})}
        bottomVariant={props.bottomVariant ?? ""}
        contentVariant={props.contentVariant ?? ""}
      />
    );
  }

  if (props.componentType === "packagePrice") {
    return (
      <PackagePrice
        containerVariant={props.containerVariant ?? ""}
        price={props.price ?? ""}
        linkVariant={props.linkVariant ?? ""}
        priceVariant={props.priceVariant ?? ""}
      />
    );
  }

  if (props.componentType === "bookButton") {
    return (
      <div
        title={props.title ?? ""}
        className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] relative no-underline ${props.containerVariant ?? ""}`}
      >
        <a
          href={props.href ?? ""}
          className="bg-[position:0px_0px] box-border caret-transparent text-blue-700 block h-full no-underline w-full overflow-hidden"
        >
          <img
            sizes={props.imageSizes ?? ""}
            src={props.imageSrc ?? ""}
            alt={props.imageAlt ?? ""}
            className={props.imageClassName ?? ""}
          />
        </a>
      </div>
    );
  }

  if (props.componentType === "floorPlan") {
    return (
      <div
        className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] relative no-underline ${props.containerVariant ?? ""}`}
      >
        <div className="bg-zinc-600 bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full border-zinc-600 overflow-hidden border-[5px] border-solid">
          <img
            sizes={props.imageSizes ?? ""}
            src={props.imageSrc ?? ""}
            alt={props.imageAlt ?? ""}
            className={props.imageClassName ?? ""}
          />
        </div>
      </div>
    );
  }

  if (props.componentType === "packageHeading") {
    return (
      <div
        className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] relative no-underline ${props.containerVariant ?? ""}`}
      >
        <h2
          className={`bg-[position:0px_0px] caret-transparent text-gray-800 break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544 ${props.headingVariant ?? ""}`}
        >
          <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
              <span
                className={`bg-[position:0px_0px] caret-transparent break-words no-underline ${props.headingInnerVariant ?? ""}`}
              >
                <span
                  className={`bg-[position:0px_0px] caret-transparent break-words no-underline ${props.headingFontClassName ?? ""}`}
                >
                  {props.headingText ?? ""}
                </span>
              </span>
            </span>
          </span>
        </h2>
      </div>
    );
  }

  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] relative no-underline ${props.containerVariant ?? ""}`}
    >
      <h2
        className={`bg-[position:0px_0px] caret-transparent text-gray-800 break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544 ${props.headingVariant ?? ""}`}
      >
        <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
          <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
            <span
              className={`bg-[position:0px_0px] caret-transparent break-words no-underline ${props.headingFontClassName ?? ""}`}
            >
              {props.headingText ?? ""}
              {props.headingTextAfterBreak ? (
                <>
                  <br className="caret-transparent outline-[3px] break-words no-underline" />
                  {props.headingTextAfterBreak}
                </>
              ) : null}
            </span>
          </span>
        </span>
      </h2>
    </div>
  );
};
