export type VideoExamplesProps = {
  variantClassName: string;
  contentType: string;
  iframeSrc: string;
  titleText: string;
  disclosureText: string;
};

export const VideoExamples = (props: VideoExamplesProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] relative no-underline ${props.variantClassName}`}
    >
      {props.contentType === "text" ? (
        <>
          <p className="bg-[position:0px_0px] caret-transparent text-zinc-600 text-xs leading-[16.8px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
              <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-wfont_000751_cbc4b09dfd124499b92ac94412c67005">
                  {props.titleText}
                </span>
              </span>
            </span>
          </p>
          <p className="bg-[position:0px_0px] caret-transparent text-zinc-600 text-xs leading-[16.8px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
              <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-wfont_000751_cbc4b09dfd124499b92ac94412c67005">
                  {props.disclosureText}
                </span>
              </span>
            </span>
          </p>
        </>
      ) : (
        <div className="caret-transparent outline-[3px] no-underline">
          <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
            <iframe
              title="Embedded Content"
              name="htmlComp-iframe"
              src={props.iframeSrc}
              className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
