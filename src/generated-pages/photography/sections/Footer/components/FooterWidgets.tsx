export type FooterWidgetsProps = {
  variant: string;
  containerTitle?: string;
  containerAriaLabel?: string;
  iframeTitle?: string;
  iframeAriaLabel?: string;
  iframeSrc?: string;
  iframeName?: string;
};

export const FooterWidgets = (props: FooterWidgetsProps) => {
  if (props.variant === "embeddedContent") {
    return (
      <div className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline bg-[position:0px_0px] row-end-7 row-start-6 h-[89px] min-h-[auto] min-w-[auto] w-[177px] mb-[37px] left-[18px]">
        <div className="caret-transparent no-underline outline-[3px]">
          <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
            <iframe
              title={props.iframeTitle}
              name={props.iframeName}
              src={props.iframeSrc}
              className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "facebookPage") {
    return (
      <div className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline bg-[position:0px_0px] row-end-8 row-start-2 h-[600px] max-h-[2000px] max-w-[500px] min-h-[575px] min-w-[280px] w-[499px] left-[415px] right-0 inset-y-0">
        <div className="caret-transparent no-underline bg-[position:0px_0px] inline-block h-full relative">
          <span className="bg-[position:0px_0px] caret-transparent inline-block h-0 relative text-justify no-underline align-top w-0 overflow-hidden">
            <iframe
              name={props.iframeName}
              title={props.iframeTitle}
              className="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline align-baseline w-0"
            ></iframe>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      title={props.containerTitle}
      aria-label={props.containerAriaLabel}
      className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline block row-end-2 row-start-1 h-10 min-h-[auto] min-w-[auto] outline-[3px] w-[250px] mt-2.5 mb-[9px] left-0"
    >
      <iframe
        title={props.iframeTitle}
        aria-label={props.iframeAriaLabel}
        src={props.iframeSrc}
        className="bg-[position:0px_0px] caret-transparent h-full no-underline align-baseline w-full"
      ></iframe>
    </div>
  );
};
