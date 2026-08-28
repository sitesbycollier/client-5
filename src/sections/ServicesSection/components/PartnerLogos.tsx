export type PartnerLogosProps = {
  containerVariant: string;
  wrapperType: "div" | "a";
  wrapperClassName: string;
  href?: string;
  imageSizes: string;
  imageUrl: string;
  imageAlt: string;
  imageClassName: string;
};

export const PartnerLogos = (props: PartnerLogosProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline ${props.containerVariant}`}
    >
      {props.wrapperType === "a" ? (
        <a href={props.href} className={props.wrapperClassName}>
          <img
            sizes={props.imageSizes}
            src={props.imageUrl}
            alt={props.imageAlt}
            className={props.imageClassName}
          />
        </a>
      ) : (
        <div className={props.wrapperClassName}>
          <img
            sizes={props.imageSizes}
            src={props.imageUrl}
            alt={props.imageAlt}
            className={props.imageClassName}
          />
        </div>
      )}
    </div>
  );
};
