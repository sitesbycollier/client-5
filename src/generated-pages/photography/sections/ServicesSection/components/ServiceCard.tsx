export type ServiceCardProps = {
  rootVariant: string;
  type: string;
  imageSrc?: string;
  imageAlt?: string;
  imageVariant?: string;
  videoAriaLabel?: string;
  videoTitle?: string;
  videoPosterSrc?: string;
  videoSrc?: string;
  videoThumbnailSrc?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  if (props.type === "video") {
    return (
      <div
        className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline ${props.rootVariant}`}
      >
        <div
          aria-label={props.videoAriaLabel}
          className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full absolute top-0"
        >
          <div className="bg-[position:0px_0px] caret-transparent h-full min-h-full min-w-full outline-[3px] relative no-underline w-full z-0 overflow-hidden font-helveticaneuew01_45ligh">
            <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] pointer-events-none absolute no-underline z-[100] inset-0"></div>
            <div className="items-center bg-black bg-[position:0px_0px] caret-transparent flex flex-col h-full justify-center outline-[3px] absolute no-underline w-full z-50 inset-0">
              <img
                src={props.videoPosterSrc}
                className="aspect-[auto_200_/_180] bg-[position:0px_0px] caret-transparent blur-[14px] h-[180px] outline-[3px] absolute no-underline align-baseline w-[200px] z-0 inset-0"
              />
              <video
                preload="none"
                playsInline={true}
                src={props.videoSrc}
                className="shadow-[rgba(0,0,0,0.2)_0px_0px_20px_0px] caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline align-baseline w-full z-[1]"
              ></video>
            </div>
            <div className="bg-[position:0px_0px] caret-transparent flex flex-col outline-[3px] absolute no-underline inset-0">
              <div className="bg-[position:0px_0px] caret-transparent h-0 opacity-0 outline-[3px] relative no-underline invisible w-0 z-[60]">
                <div className="items-center bg-[position:0px_0px] caret-transparent flex outline-[3px] relative no-underline ml-3 mt-3">
                  <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                    <div className="bg-neutral-400 bg-[position:0px_0px] caret-transparent h-0 opacity-0 outline-[3px] relative no-underline w-0">
                      <button
                        aria-label="Sync to live"
                        disabled={true}
                        className="bg-transparent bg-[position:0px_0px] box-content caret-transparent text-white leading-3 outline-[3px] text-center no-underline uppercase py-[5px]"
                      >
                        Live
                      </button>
                    </div>
                  </div>
                  <div className="bg-[position:0px_0px] caret-transparent grow h-0 max-w-[calc(100%_-_200px)] opacity-0 outline-[3px] no-underline w-0">
                    <div className="bg-[position:0px_0px] caret-transparent text-white text-xs leading-[13px] outline-[3px] no-underline text-ellipsis text-nowrap overflow-hidden">
                      {props.videoTitle}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[position:0px_0px] caret-transparent grow-[2] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline">
                <div className="bg-[position:0px_0px] caret-transparent flex outline-[3px] absolute no-underline mt-2.5 mb-1.5 mx-2.5 inset-0"></div>
              </div>
              <div className="bg-[position:0px_0px] caret-transparent flex flex-col h-0 opacity-0 outline-[3px] no-underline invisible w-0 z-[60]">
                <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline px-3 top-0.5">
                  <div className="bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] relative no-underline w-full">
                    <div className="bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] no-underline scale-y-[0.34]"></div>
                    <div className="bg-[position:0px_0px] caret-transparent h-4 opacity-0 outline-[3px] relative no-underline top-[-11px] w-full z-[5]"></div>
                  </div>
                </div>
                <div className="bg-[position:0px_0px] caret-transparent flex grow-[2] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
                  <div className="items-center bg-[position:0px_0px] caret-transparent flex basis-[0%] grow h-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
                    <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-1 mr-2">
                      <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-start outline-[3px] relative no-underline">
                        <button
                          aria-label="Play"
                          type="button"
                          className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                        >
                          <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                            <img
                              src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-2-3.svg"
                              alt="Icon"
                              className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-[13px]">
                      <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-start outline-[3px] relative no-underline">
                        <button
                          aria-label="Mute"
                          type="button"
                          className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                        >
                          <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                            <img
                              src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-10-2.svg"
                              alt="Icon"
                              className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                            />
                          </div>
                        </button>
                        <div
                          aria-label="Volume control"
                          value="100"
                          className="bg-[position:0px_0px] caret-transparent h-[25px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] relative no-underline w-0 ml-0.5"
                        >
                          <div className="bg-[position:0px_0px] caret-transparent h-[25px] opacity-0 outline-[3px] relative no-underline w-full z-[5]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center bg-[position:0px_0px] caret-transparent flex basis-[0%] grow h-9 justify-end max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
                    <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-2">
                      <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] relative no-underline">
                        <button
                          aria-label="Play Picture-in-Picture"
                          type="button"
                          className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                        >
                          <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                            <img
                              src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-12-2.svg"
                              alt="Icon"
                              className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-[7px]">
                      <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] relative no-underline">
                        <button
                          aria-label="Enter full screen"
                          type="button"
                          className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                        >
                          <img
                            src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-18-3.svg"
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black bg-center bg-no-repeat bg-cover caret-transparent h-full absolute no-underline w-full left-0 top-0">
            <div className="caret-transparent block h-full outline-[3px] no-underline w-full">
              <img
                alt=""
                src={props.videoThumbnailSrc}
                className="bg-[position:0px_0px] caret-transparent inline h-[180px] max-w-[max(1440px,100%)] object-cover no-underline align-baseline w-[200px]"
              />
            </div>
            <div className="items-center bg-black/30 bg-[position:0px_0px] caret-transparent flex flex-col h-full justify-center absolute no-underline w-full top-0 hover:bg-black/40">
              <button
                aria-label="Play video"
                className="bg-transparent bg-[position:0px_0px] caret-transparent block text-[13.3333px] h-[50px] min-h-[auto] min-w-[auto] text-center no-underline w-[50px] p-0 font-arial"
              >
                <img
                  src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-23-2.svg"
                  alt="Icon"
                  className="caret-transparent inline outline-[3px] no-underline align-baseline"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline ${props.rootVariant}`}
    >
      <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full box-border overflow-hidden">
        <img
          sizes="181px"
          src={props.imageSrc}
          alt={props.imageAlt}
          className={`bg-[position:0px_0px] caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden ${props.imageVariant}`}
        />
      </div>
    </div>
  );
};
