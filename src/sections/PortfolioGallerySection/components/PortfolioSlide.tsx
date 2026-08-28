export type PortfolioSlideProps = {
  rootVariant: string;
  mediaType: string;
  ariaLabel: string;
  mediaUrl: string;
  alt: string;
  caption?: React.ReactNode;
};

export const PortfolioSlide = (props: PortfolioSlideProps) => {
  return (
    <div
      className={`bg-[position:0px_0px] box-border caret-transparent text-[11px] h-[551px] outline-[3px] absolute no-underline text-nowrap align-top w-[980px] overflow-hidden top-0 font-helveticaneuew01_45ligh md:h-[720px] md:w-screen ${props.rootVariant}`}
    >
      <div
        aria-label={props.ariaLabel}
        role="img"
        className="bg-[position:0px_0px] caret-transparent h-px pointer-events-none absolute no-underline text-nowrap w-px z-[-1] overflow-hidden"
      ></div>
      <div className="caret-transparent no-underline text-nowrap bg-[position:0px_0px]">
        <div className="bg-[position:0px_0px] caret-transparent h-[551px] relative no-underline text-nowrap w-[980px] overflow-hidden md:h-[720px] md:w-screen">
          {props.mediaType === "video" ? (
            <div className="caret-transparent no-underline text-nowrap bg-[position:0px_0px]">
              <div className="bg-center bg-no-repeat bg-cover caret-transparent h-[551px] object-cover absolute text-center no-underline text-nowrap w-[980px] overflow-hidden left-0 top-0 md:h-[720px] md:w-screen">
                <div className="bg-[position:0px_0px] caret-transparent h-full object-cover absolute no-underline text-nowrap w-full overflow-hidden left-0 top-0">
                  <video
                    src={props.mediaUrl}
                    preload="metadata"
                    type="video/mp4"
                    playsInline
                    className="caret-transparent min-h-full min-w-full outline-[3px] absolute no-underline text-nowrap align-baseline w-[calc(100%_+_1px)] m-auto -inset-full"
                  ></video>
                </div>
              </div>
              <div className="items-end bg-[position:0px_0px] caret-transparent flex h-[551px] absolute no-underline text-nowrap w-[980px] left-0 top-0 md:h-[720px] md:w-screen">
                <div className="bg-[position:0px_0px] box-border caret-transparent h-[551px] min-h-[auto] min-w-[auto] relative no-underline w-[980px] z-[15] overflow-hidden p-[30px] left-0 top-0 md:h-[720px] md:w-screen before:accent-auto before:bg-transparent before:box-border before:caret-transparent before:text-black before:block before:text-[11px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-helveticaneuew01_45ligh">
                  <div className="bg-[position:0px_0px] caret-transparent h-full no-underline">
                    <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
                      <div className="bg-[position:0px_0px] box-border caret-transparent flex flex-col h-full justify-center no-underline">
                        {props.caption ? (
                          <div className="content-end items-start bg-[position:0px_0px] box-border caret-transparent flex flex-col h-full justify-end min-h-[auto] min-w-[auto] text-left no-underline">
                            <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] no-underline w-full">
                              <div className="bg-[position:0px_0px] caret-transparent text-neutral-100 flow-root text-[10px] leading-3 no-underline overflow-hidden font-avenir_lt_w01_35_light1475496">
                                {props.caption}
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="bg-[position:0px_0px] caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline z-[16] -mx-2.5 left-0 top-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="caret-transparent no-underline text-nowrap bg-center bg-no-repeat bg-cover h-[551px] object-cover absolute w-[980px] overflow-hidden left-0 top-0 md:h-[720px] md:w-screen">
                <picture className="caret-transparent outline-[3px] no-underline text-nowrap">
                  <img
                    src={props.mediaUrl}
                    alt={props.alt}
                    className="bg-center bg-no-repeat bg-cover caret-transparent h-[551px] object-cover absolute no-underline text-nowrap align-baseline w-[980px] overflow-hidden left-0 top-0 md:h-[720px] md:w-screen"
                  />
                </picture>
              </div>
              <div className="items-end bg-[position:0px_0px] caret-transparent flex h-[551px] absolute no-underline text-nowrap w-[980px] left-0 top-0 md:h-[720px] md:w-screen">
                <div className="bg-[position:0px_0px] box-border caret-transparent h-[551px] min-h-[auto] min-w-[auto] relative no-underline w-[980px] z-[15] overflow-hidden p-[30px] left-0 top-0 md:h-[720px] md:w-screen before:accent-auto before:bg-transparent before:box-border before:caret-transparent before:text-black before:block before:text-[11px] before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-helveticaneuew01_45ligh">
                  <div className="bg-[position:0px_0px] caret-transparent h-full no-underline">
                    <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
                      <div className="bg-[position:0px_0px] box-border caret-transparent flex flex-col h-full justify-center no-underline">
                        {props.caption ? (
                          <div className="content-end items-start bg-[position:0px_0px] box-border caret-transparent flex flex-col h-full justify-end min-h-[auto] min-w-[auto] text-left no-underline">
                            <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] no-underline w-full">
                              <div className="bg-[position:0px_0px] caret-transparent text-neutral-100 flow-root text-[10px] leading-3 no-underline overflow-hidden font-avenir_lt_w01_35_light1475496">
                                {props.caption}
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="bg-[position:0px_0px] caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline z-[16] -mx-2.5 left-0 top-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
