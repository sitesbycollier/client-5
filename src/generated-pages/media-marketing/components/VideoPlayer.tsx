export type VideoPlayerProps = {
  containerVariant: string;
  ariaLabel: string;
  posterSrc: string;
  posterVariant: string;
  videoSrc: string;
  showTopSpacer: boolean;
  showVideoTitle: boolean;
  videoTitle: string;
  showTitlePlaceholder: boolean;
  progressVariant: string;
  showSecondaryProgress: boolean;
  secondaryProgressVariant: string;
  timelineWrapperVariant: string;
  timelineInnerVariant: string;
  timelineSecondBarVariant: string;
  timelineFourthBarVariant: string;
  timelineEndVariant: string;
  controlsRowVariant: string;
  playButtonAriaLabel: string;
  playIconOneSrc: string;
  playIconTwoSrc: string;
  playIconThreeSrc: string;
  playIconFourSrc: string;
  volumeIconOneSrc: string;
  volumeIconTwoSrc: string;
  volumeIconThreeSrc: string;
  volumeIconFourSrc: string;
  volumeIconFiveSrc: string;
  volumeIconSixSrc: string;
  timeWrapperVariant: string;
  timeTextVariant: string;
  currentTime: string;
  durationTime: string;
  rightControlsVariant: string;
  pipIconOneSrc: string;
  pipIconTwoSrc: string;
  pipIconThreeSrc: string;
  pipIconFourSrc: string;
  downloadIconOneSrc: string;
  downloadIconTwoSrc: string;
  fullscreenIconOneSrc: string;
  fullscreenIconTwoSrc: string;
  showWatchOnSite: boolean;
  watchOnSiteIconOneSrc: string;
  watchOnSiteIconTwoSrc: string;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline mb-2.5 ${props.containerVariant}`}
    >
      <div
        aria-label={props.ariaLabel}
        className="bg-[position:0px_0px] shadow-[rgba(0,0,0,0.6)_0px_1px_4px_0px] caret-transparent h-full absolute no-underline w-full top-0"
      >
        <div className="bg-[position:0px_0px] caret-transparent h-full min-h-full min-w-full outline-[3px] relative no-underline w-full z-0 overflow-hidden font-helveticaneuew01_45ligh">
          <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] pointer-events-none absolute no-underline z-[100] inset-0"></div>
          <div className="items-center bg-black bg-[position:0px_0px] caret-transparent flex flex-col h-full justify-center outline-[3px] absolute no-underline w-full z-50 inset-0">
            <img
              src={props.posterSrc}
              className={`bg-[position:0px_0px] caret-transparent blur-[14px] outline-[3px] absolute no-underline align-baseline z-0 inset-0 ${props.posterVariant}`}
            />
            <video
              preload="none"
              autoPlay
              playsInline
              src={props.videoSrc}
              muted
              className="shadow-[rgba(0,0,0,0.2)_0px_0px_20px_0px] caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline align-baseline w-full z-[1]"
            ></video>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent flex flex-col outline-[3px] absolute no-underline inset-0">
            <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline z-[60]">
              {props.showTopSpacer ? (
                <div className="bg-[position:0px_0px] caret-transparent outline-[3px] no-underline bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.3)_25%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.03)_76%,rgba(0,0,0,0))] bg-size-[100%_182px] h-[181px] pointer-events-none absolute top-0 inset-x-0"></div>
              ) : null}
              <div className="items-center bg-[position:0px_0px] caret-transparent flex outline-[3px] relative no-underline ml-[15px] mt-[15px]">
                <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                  <div className="bg-neutral-400 bg-[position:0px_0px] caret-transparent h-0 opacity-0 outline-[3px] relative no-underline invisible w-0">
                    <button
                      aria-label="Sync to live"
                      disabled={true}
                      className="bg-transparent bg-[position:0px_0px] box-content caret-transparent text-white text-xs leading-[14px] outline-[3px] text-center no-underline uppercase py-[5px]"
                    >
                      Live
                    </button>
                  </div>
                </div>
                {props.showVideoTitle ? (
                  <div className="bg-[position:0px_0px] caret-transparent grow h-0 max-w-[calc(100%_-_200px)] opacity-0 outline-[3px] no-underline invisible w-0">
                    <div className="bg-[position:0px_0px] caret-transparent text-white text-sm leading-[15px] outline-[3px] no-underline text-ellipsis text-nowrap overflow-hidden">
                      {props.videoTitle}
                    </div>
                  </div>
                ) : null}
                {props.showTitlePlaceholder ? (
                  <div className="bg-[position:0px_0px] caret-transparent grow max-w-[calc(100%_-_200px)] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                    <div className="bg-[position:0px_0px] caret-transparent text-white text-sm h-0 leading-[15px] opacity-0 outline-[3px] no-underline text-ellipsis text-nowrap invisible w-0 overflow-hidden"></div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="bg-[position:0px_0px] caret-transparent grow-[2] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline">
              <div className="bg-[position:0px_0px] caret-transparent flex outline-[3px] absolute no-underline mt-2.5 mb-1.5 mx-2.5 inset-0"></div>
            </div>
            <div className="bg-[position:0px_0px] caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] no-underline z-[60]">
              {props.showSecondaryProgress ? (
                <div
                  className={`bg-[position:0px_0px] caret-transparent outline-[3px] no-underline ${props.secondaryProgressVariant}`}
                ></div>
              ) : null}
              <div className={props.progressVariant}>
                <div className="bg-[position:0px_0px] caret-transparent outline-[3px] relative no-underline w-full h-1.5">
                  <div className="bg-[position:0px_0px] caret-transparent outline-[3px] no-underline h-1.5 scale-y-[0.34]">
                    <div className="bg-[position:0px_0px] caret-transparent outline-[3px] no-underline bg-white/30 h-1.5 absolute w-full"></div>
                    <div className={props.timelineSecondBarVariant}></div>
                    <div className="bg-white/50 bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] absolute no-underline"></div>
                    <div className={props.timelineFourthBarVariant}></div>
                    <div className="bg-[position:0px_0px] caret-transparent h-full outline-[3px] overflow-x-hidden overflow-y-auto absolute no-underline w-full"></div>
                  </div>
                  <div className="bg-[position:0px_0px] caret-transparent outline-[3px] no-underline h-4 opacity-0 relative top-[-11px] w-full z-[5]"></div>
                  <div className={props.timelineEndVariant}></div>
                </div>
              </div>
              <div className="bg-[position:0px_0px] caret-transparent flex grow-[2] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full">
                <div className={props.controlsRowVariant}>
                  <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-[7px] mr-2">
                    <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-start outline-[3px] relative no-underline">
                      <button
                        aria-label={props.playButtonAriaLabel}
                        type="button"
                        className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                      >
                        <div className={props.timelineWrapperVariant}>
                          <img
                            src={props.playIconOneSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.playIconTwoSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                        <div className={props.timelineInnerVariant}>
                          <img
                            src={props.playIconThreeSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.playIconFourSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-[13px]">
                    <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-start outline-[3px] relative no-underline">
                      <button
                        aria-label="Unmute"
                        type="button"
                        className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                      >
                        <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                          <img
                            src={props.volumeIconOneSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.volumeIconTwoSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                        <div className="bg-[position:0px_0px] caret-transparent hidden outline-[3px] no-underline">
                          <img
                            src={props.volumeIconThreeSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.volumeIconFourSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                        <div className="bg-[position:0px_0px] caret-transparent hidden outline-[3px] no-underline">
                          <img
                            src={props.volumeIconFiveSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.volumeIconSixSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                      </button>
                      <div
                        aria-label="Volume control"
                        value="0"
                        className="bg-[position:0px_0px] caret-transparent h-[25px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] relative no-underline w-0 ml-0.5"
                      >
                        <div className="bg-white/30 bg-[position:0px_0px] caret-transparent h-0.5 outline-[3px] absolute no-underline w-full top-[11.5px]"></div>
                        <div className="bg-white bg-[position:0px_0px] caret-transparent h-0.5 outline-[3px] absolute no-underline w-[0%] top-[11.5px] after:accent-auto after:bg-white after:caret-transparent after:text-black after:block after:text-[10px] after:not-italic after:normal-nums after:font-normal after:h-2 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:top-[-3px] after:visible after:w-2 after:rounded-[50%] after:border-separate after:-right-1 after:font-helveticaneuew01_45ligh"></div>
                        <div className="bg-[position:0px_0px] caret-transparent h-[25px] opacity-0 outline-[3px] relative no-underline w-full z-[5]"></div>
                      </div>
                    </div>
                  </div>
                  <div className={props.timeWrapperVariant}>
                    <div className="items-center bg-[position:0px_0px] caret-transparent text-white flex shrink-0 h-[25px] outline-[3px] no-underline">
                      <span className={props.timeTextVariant}>
                        {props.currentTime}
                      </span>
                      <span
                        className={`${props.timeTextVariant} ml-[5px] before:accent-auto before:caret-transparent before:text-white before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:mr-1 before:border-separate before:font-helveticaneuew01_45ligh`}
                      >
                        {props.durationTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={props.rightControlsVariant}>
                  <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-2">
                    <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] relative no-underline">
                      <button
                        aria-label="Play Picture-in-Picture"
                        type="button"
                        className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                      >
                        <div className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                          <img
                            src={props.pipIconOneSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.pipIconTwoSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                        <div className="bg-[position:0px_0px] caret-transparent hidden outline-[3px] no-underline">
                          <img
                            src={props.pipIconThreeSrc}
                            alt="Icon"
                            className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                          />
                          <img
                            src={props.pipIconFourSrc}
                            alt="Icon"
                            className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[position:0px_0px] caret-transparent hidden outline-[3px] no-underline mr-2">
                    <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] relative no-underline">
                      <button
                        aria-label="Download video"
                        type="button"
                        className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                      >
                        <img
                          src={props.downloadIconOneSrc}
                          alt="Icon"
                          className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                        />
                        <img
                          src={props.downloadIconTwoSrc}
                          alt="Icon"
                          className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                        />
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
                          src={props.fullscreenIconOneSrc}
                          alt="Icon"
                          className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                        />
                        <img
                          src={props.fullscreenIconTwoSrc}
                          alt="Icon"
                          className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {props.showWatchOnSite ? (
                  <div className="bg-[position:0px_0px] caret-transparent hidden h-9 outline-[3px] no-underline mr-[9px]">
                    <div className="items-center bg-[position:0px_0px] caret-transparent flex justify-center outline-[3px] relative no-underline z-[3]">
                      <button
                        aria-label="Watch on site"
                        type="button"
                        className="items-center bg-transparent bg-[position:0px_0px] box-content caret-transparent flex h-[26px] justify-center leading-[11.5px] min-h-[26px] min-w-[26px] outline-[3px] text-center no-underline w-[26px] p-0"
                      >
                        <img
                          src={props.watchOnSiteIconOneSrc}
                          alt="Icon"
                          className="caret-transparent outline-[3px] no-underline align-baseline w-full"
                        />
                        <img
                          src={props.watchOnSiteIconTwoSrc}
                          alt="Icon"
                          className="caret-transparent hidden outline-[3px] no-underline align-baseline w-full"
                        />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
