export type PortfolioLinkProps = {
  containerVariant: string;
  mediaVariant: string;
  imageUrl?: string;
  imageAlt?: string;
  imageSizes?: string;
  imageVariant?: string;
  href?: string;
  ariaLabel?: string;
  linkText?: string;
};

export const PortfolioLink = (props: PortfolioLinkProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline ${props.containerVariant}`}
    >
      <div
        className={`bg-[position:0px_0px] caret-transparent no-underline ${props.mediaVariant}`}
      >
        {props.imageUrl &&
        props.imageAlt &&
        props.imageSizes &&
        props.imageVariant ? (
          <img
            sizes={props.imageSizes}
            src={props.imageUrl}
            alt={props.imageAlt}
            className={`bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden ${props.imageVariant}`}
          />
        ) : null}
      </div>
      {props.href && props.ariaLabel && props.linkText ? (
        <>
          <div className="bg-[url(data:image/png;base64,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)] bg-[position:100%_0px] bg-no-repeat bottom-[-26px] caret-transparent h-[26px] pointer-events-none absolute no-underline w-[165px] -right-5"></div>
          <a
            href={props.href}
            aria-label={props.ariaLabel}
            className="items-center bg-white bg-[position:0px_0px] shadow-[rgba(0,0,0,0.6)_0px_1px_4px_0px] box-border caret-transparent text-blue-700 flex justify-center min-w-full absolute no-underline w-max inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-blue-700 before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-blue-700 after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
          >
            <span className="bg-[position:0px_0px] caret-transparent text-black block text-[25px] leading-[35px] min-h-[auto] min-w-[auto] relative no-underline text-nowrap font-avenir_lt_w01_85_heavy1475544">
              {props.linkText}
            </span>
          </a>
        </>
      ) : null}
    </div>
  );
};
