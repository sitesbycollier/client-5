export type VideoServiceCardProps = {
  rootVariantClass: string;
  heroImageSrc: string;
  videoSrc: string;
  iframeSrc: string;
  iframeTitle: string;
  posterImageSrc: string;
  posterImageVariantClass: string;
  title: string;
  playIconSrc: string;
  muteIconSrc: string;
  pictureInPictureIconSrc: string;
  fullscreenIconSrc: string;
  overlayPlayIconSrc: string;
};

export const VideoServiceCard = (props: VideoServiceCardProps) => {
  const isIframe = props.iframeSrc !== "";

  return (
    <div
      role="listitem"
      className={`bg-[position:0px_0px] caret-transparent absolute no-underline w-[300px] overflow-clip ${props.rootVariantClass}`}
    >
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[290px] justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[286px] mb-8 left-0">
            <div className="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden">
              <img
                sizes="286px"
                src={props.heroImageSrc}
                alt="pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash 2.png"
                className="aspect-[auto_286_/_290] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
              />
            </div>
          </div>
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[317px] justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[300px] mb-[5px] left-0">
            <div
              aria-label="Your Video Title Video Player"
              className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"
            >
              {isIframe ? (
                <iframe
                  title={props.iframeTitle}
                  src={props.iframeSrc}
                  className="bg-[position:0px_0px] caret-transparent inline h-full no-underline align-baseline w-full"
                ></iframe>
              ) : (
                <div className="bg-[position:0px_0px] caret-transparent h-full min-h-full min-w-full outline-[3px] relative no-underline w-full z-0 overflow-hidden font-helveticaneuew01_45ligh">
                  <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] pointer-events-none absolute no-underline z-[100] inset-0"></div>
                  <div className="items-center bg-black bg-[position:0px_0px] caret-transparent flex flex-col h-full justify-center outline-[3px] absolute no-underline w-full z-50 inset-0">
                    <img
                      src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/image-1-4.png"
                      className="aspect-[auto_300_/_317] bg-[position:0px_0px] caret-transparent blur-[14px] h-[317px] outline-[3px] absolute no-underline align-baseline w-[300px] z-0 inset-0"
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
                      <div className="items-center bg-[position:0px_0px] caret-transparent flex outline-[3px] relative no-underline ml-[15px] mt-[15px]">
                        <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                          <div className="bg-neutral-400 bg-[position:0px_0px] caret-transparent h-0 opacity-0 outline-[3px] relative no-underline w-0">
                            <button
                              aria-label="Sync to live"
                              disabled={true}
                              className="bg-transparent bg-[position:0px_0px] box-content caret-transparent text-white text-xs leading-[14px] outline-[3px] text-center no-underline uppercase py-[5px]"
                            >
                              Live
                            </button>
                          </div>
                        </div>
                        <div className="bg-[position:0px_0px] caret-transparent grow h-0 max-w-[calc(100%_-_200px)] opacity-0 outline-[3px] no-underline w-0">
                          <div className="bg-[position:0px_0px] caret-transparent text-white text-xs leading-[13px] outline-[3px] no-underline text-ellipsis text-nowrap overflow-hidden">
                            Your Video Title
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[position:0px_0px] caret-transparent grow-[2] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline">
                      <div className="bg-[position:0px_0px] caret-transparent flex outline-[3px] absolute no-underline mt-2.5 mb-1.5 mx-2.5 inset-0"></div>
                    </div>
                    <div className="bg-[position:0px_0px] caret-transparent flex flex-col h-0 opacity-0 outline-[3px] no-underline invisible w-0 z-[60]">
                      <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline px-[15px] top-0.5">
                        <div className="bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] relative no-underline w-full">
                          <div className="bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] no-underline scale-y-[0.34]"></div>
                          <div className="bg-[position:0px_0px] caret-transparent h-4 opacity-0 outline-[3px] relative no-underline top-[-11px] w-full z-[5]"></div>
                        </div>
                      </div>
                      <div className="bg-[position:0px_0px] caret-transparent flex grow-[2] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
                        <div className="items-center bg-[position:0px_0px] caret-transparent flex basis-[0%] grow h-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
                          <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-[7px] mr-2">
                            <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-start outline-[3px] relative no-underline">
                              <button
                                aria-label="Play"
                                type="button"
                                className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                              >
                                <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                                  <img
                                    src={props.playIconSrc}
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
                                    src={props.muteIconSrc}
                                    alt="Icon"
                                    className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                                  />
                                </div>
                              </button>
                              <div
                                aria-label="Volume control"
                                {...{ value: "100" }}
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
                                    src={props.pictureInPictureIconSrc}
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
                                  src={props.fullscreenIconSrc}
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
                  <div className="bg-black bg-center bg-no-repeat bg-cover caret-transparent h-full absolute no-underline w-full left-0 top-0">
                    <div className="caret-transparent block h-full outline-[3px] no-underline w-full">
                      <img
                        alt=""
                        src={props.posterImageSrc}
                        className={`bg-[position:0px_0px] caret-transparent inline h-[317px] object-cover no-underline align-baseline w-[300px] ${props.posterImageVariantClass}`}
                      />
                    </div>
                    <div className="items-center bg-black/30 bg-[position:0px_0px] caret-transparent flex flex-col h-full justify-center absolute no-underline w-full top-0 hover:bg-black/40">
                      <button
                        aria-label="Play video"
                        className="bg-transparent bg-[position:0px_0px] caret-transparent block text-[13.3333px] h-[50px] min-h-[auto] min-w-[auto] text-center no-underline w-[50px] p-0 font-arial"
                      >
                        <img
                          src={props.overlayPlayIconSrc}
                          alt="Icon"
                          className="caret-transparent inline outline-[3px] no-underline align-baseline"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[279px] mb-[18px] left-[21px]">
            <div className="bg-neutral-100 bg-[position:0px_0px] caret-transparent absolute no-underline inset-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-[279px]">
              <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] break-words relative no-underline w-[237px] mt-[7px] mb-2 left-[21px]">
                  <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-xl leading-7 break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                      {props.title}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
