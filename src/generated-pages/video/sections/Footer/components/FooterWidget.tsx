export type FooterWidgetProps = {
  variantClassName: string;
  title?: string;
  ariaLabel?: string;
  iframeTitle?: string;
  iframeAriaLabel?: string;
  iframeSrc?: string;
  iframeName?: string;
  iframeClassName: string;
  contentType: string;
  innerWrapperClassName?: string;
};

export const FooterWidget = (props: FooterWidgetProps) => {
  return (
    <div
      title={props.title}
      aria-label={props.ariaLabel}
      className={`self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline ${props.variantClassName}`}
    >
      {props.contentType === "facebookLike" ? (
        <iframe
          title={props.iframeTitle}
          aria-label={props.iframeAriaLabel}
          src={props.iframeSrc}
          className={props.iframeClassName}
        ></iframe>
      ) : props.contentType === "embeddedContent" ? (
        <div
          className={`caret-transparent no-underline ${props.innerWrapperClassName}`}
        >
          <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
            <iframe
              title={props.iframeTitle}
              name={props.iframeName}
              src={props.iframeSrc}
              className={props.iframeClassName}
            ></iframe>
          </div>
        </div>
      ) : (
        <div
          className={`caret-transparent no-underline ${props.innerWrapperClassName}`}
        >
          <span className="bg-[position:0px_0px] caret-transparent inline-block h-0 relative text-justify no-underline align-top w-0 overflow-hidden">
            <iframe
              name={props.iframeName}
              title={props.iframeTitle}
              className={props.iframeClassName}
            ></iframe>
          </span>
        </div>
      )}
    </div>
  );
};
