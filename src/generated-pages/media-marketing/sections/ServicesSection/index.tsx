import { ServiceCard } from "../../components/ServiceCard";
import { VideoPlayer } from "../../components/VideoPlayer";

export const ServicesSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[980px] mt-[45px] mb-[9px] -left-1">
            <div
              role="list"
              className="bg-[position:0px_0px] caret-transparent flex flex-wrap justify-center relative no-underline mt-[-12.5px] mr-[-12.5px] mb-[-12.5px] ml-[-12.5px]"
            >
              <div className="bg-[position:0px_0px] caret-transparent flex flex-col min-h-[auto] min-w-[auto] no-underline">
                <div
                  role="listitem"
                  className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] no-underline m-[12.5px]"
                >
                  <ServiceCard
                    imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/cb4d36596015ecc12d2b8a73c98feb62.jpg"
                    imageAlt="Website on Laptop"
                    imageWrapperVariant="h-[226px] mb-[-30px]"
                    imageClassVariant="aspect-[auto_306_/_226]"
                    title="Websites"
                    titleWrapperVariant="mb-[19px]"
                    titleInnerVariant="w-[159px] mb-[7px]"
                    descriptionWrapperVariant="mb-[30px] left-4"
                    buttonWrapperVariant="h-[21px] mb-[42px] left-[43px]"
                    buttonText="Let's Talk -Complete form above"
                    buttonAriaLabel="Let's Talk -Complete form above"
                  >
                    <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] leading-[25.5px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                      <span className="bg-[position:0px_0px] caret-transparent text-slate-500 break-words no-underline">
                        Stunning contemporary websites with features to tell the
                        story of your business and compel viewers to take the
                        next step in the buying process or use your service.
                        {" "}
                      </span>
                    </p>
                  </ServiceCard>
                </div>
              </div>
              <div className="bg-[position:0px_0px] caret-transparent flex flex-col min-h-[auto] min-w-[auto] no-underline">
                <div
                  role="listitem"
                  className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] no-underline m-[12.5px]"
                >
                  <ServiceCard
                    imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/73c818d494564f33883b5a2ffa08fb46.jpg"
                    imageAlt="Digital social media"
                    imageWrapperVariant="h-[226px] mb-[-30px]"
                    imageClassVariant="aspect-[auto_306_/_226]"
                    title="Social Media Marketing"
                    titleWrapperVariant="mb-[19px]"
                    titleInnerVariant="w-[159px] mb-[7px]"
                    descriptionWrapperVariant="mb-[30px] left-4"
                    buttonWrapperVariant="h-[21px] mb-[42px] left-[43px]"
                    buttonText="Let's Talk -Complete form above"
                    buttonAriaLabel="Let's Talk -Complete form above"
                  >
                    <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] leading-[25.5px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                      <span className="bg-[position:0px_0px] caret-transparent text-slate-500 break-words no-underline">
                        Consistent messaging and engaging posts and video for
                        each platform your clients often engage in based on your
                        ideal client goals.{"\u00A0"}
                      </span>
                    </p>
                  </ServiceCard>
                </div>
              </div>
              <div className="bg-[position:0px_0px] caret-transparent flex flex-col min-h-[auto] min-w-[auto] no-underline">
                <div
                  role="listitem"
                  className="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] no-underline m-[12.5px]"
                >
                  <ServiceCard
                    imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_3f2d06b6a50b46b686c351ed960dc147~mv2.jpg"
                    imageAlt="Luxury Home Realtor Video"
                    imageWrapperVariant="h-[226px] mb-[-30px]"
                    imageClassVariant="aspect-[auto_306_/_226]"
                    title="Video Production"
                    titleWrapperVariant="mb-[19px]"
                    titleInnerVariant="w-[159px] mb-[7px]"
                    descriptionWrapperVariant="mb-[30px] left-4"
                    imageHref="https://www.snapmagicmedia.com/"
                    buttonWrapperVariant="h-[21px] mb-[42px] left-[43px]"
                    buttonText="Let's Talk -Complete form above"
                    buttonAriaLabel="Let's Talk -Complete form above"
                  >
                    <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] leading-[25.5px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                      <span className="bg-[position:0px_0px] caret-transparent text-slate-500 break-words no-underline">
                        Product or Business Video Explainers, Advertisements and
                        Social Media Promotions
                      </span>
                    </p>
                    <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] leading-[25.5px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                      <span className="bg-[position:0px_0px] caret-transparent text-slate-500 break-words no-underline">
                        <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                          {"\u200B"}
                        </span>
                      </span>
                    </p>
                  </ServiceCard>
                </div>
              </div>
            </div>
          </div>
          <VideoPlayer
            containerVariant="row-end-2 row-start-1 h-[196px] w-[306px] mt-[23px] left-[670px]"
            ariaLabel=" Video Player"
            posterSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/image-2-1.png"
            posterVariant="aspect-[auto_306_/_196] h-[196px] w-[306px]"
            videoSrc="https://video.wixstatic.com/video/360fdc_b91029dbce3a480da734c5c1eb9ee066/720p/mp4/file.mp4"
            showTopSpacer={true}
            showVideoTitle={false}
            videoTitle=""
            showTitlePlaceholder={true}
            progressVariant="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline px-[15px] top-0.5"
            showSecondaryProgress={true}
            secondaryProgressVariant="bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.03)_24%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.3)_75%,rgba(0,0,0,0.4))] bg-size-[100%_182px] h-[181px] pointer-events-none absolute bottom-0 inset-x-0"
            timelineWrapperVariant="bg-[position:0px_0px] caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline"
            timelineInnerVariant="bg-[position:0px_0px] caret-transparent hidden outline-[3px] no-underline"
            timelineSecondBarVariant="bg-white/30 bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] absolute no-underline w-[44.66%]"
            timelineFourthBarVariant="bg-white bg-[position:0px_0px] caret-transparent h-1.5 outline-[3px] absolute no-underline origin-[0px_0px] w-full scale-x-[0.003]"
            timelineEndVariant="bg-[position:0px_0px] caret-transparent outline-[3px] absolute no-underline top-[-3px] translate-x-[0.911px] z-[7] -left-1.5"
            controlsRowVariant="items-center bg-[position:0px_0px] caret-transparent flex basis-[0%] grow h-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full"
            playButtonAriaLabel="Play"
            playIconOneSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-23-4.svg"
            playIconTwoSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-24-2.svg"
            playIconThreeSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-25.svg"
            playIconFourSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-26-2.svg"
            volumeIconOneSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-27-1.svg"
            volumeIconTwoSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-28-2.svg"
            volumeIconThreeSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-29-1.svg"
            volumeIconFourSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-30-1.svg"
            volumeIconFiveSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-31.svg"
            volumeIconSixSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-32-2.svg"
            timeWrapperVariant="bg-[position:0px_0px] caret-transparent hidden outline-[3px] no-underline mr-[18px]"
            timeTextVariant="bg-[position:0px_0px] caret-transparent block text-xs leading-3 outline-[3px] no-underline"
            currentTime="00:00"
            durationTime="00:50"
            rightControlsVariant="items-center bg-[position:0px_0px] caret-transparent flex basis-[0%] grow h-9 justify-end max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full"
            pipIconOneSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-33-1.svg"
            pipIconTwoSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-34-2.svg"
            pipIconThreeSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-35-1.svg"
            pipIconFourSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-36.svg"
            downloadIconOneSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-37.svg"
            downloadIconTwoSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-17.svg"
            fullscreenIconOneSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-38.svg"
            fullscreenIconTwoSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-39-2.svg"
            showWatchOnSite={true}
            watchOnSiteIconOneSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-40.svg"
            watchOnSiteIconTwoSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-41.svg"
          />
        </div>
      </div>
    </section>
  );
};
