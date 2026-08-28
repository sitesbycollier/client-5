export type FooterEmbedProps = {
  rootVariant: string;
  containerVariant: string;
  contentType: string;
  iframeTitle: string;
  iframeName: string;
  iframeSrc: string;
  iframeClassName: string;
};

export const FooterEmbed = (props: FooterEmbedProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline ${props.rootVariant}`}
    >
      <div
        className={`caret-transparent no-underline ${props.containerVariant}`}
      >
        {props.contentType === "div" ? (
          <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
            <iframe
              title={props.iframeTitle}
              name={props.iframeName}
              src={props.iframeSrc}
              className={props.iframeClassName}
            ></iframe>
          </div>
        ) : (
          <span className="bg-[position:0px_0px] caret-transparent inline-block h-0 relative text-justify no-underline align-top w-0 overflow-hidden">
            <iframe
              name={props.iframeName}
              title={props.iframeTitle}
              className={props.iframeClassName}
            ></iframe>
          </span>
        )}
      </div>
    </div>
  );
};
