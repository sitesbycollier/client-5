import { HeroSection } from "../HeroSection/index";
import { GallerySection } from "../GallerySection/index";
import { VideoSection } from "../VideoSection/index";

export const MainContent = () => {
  return (
    <main className="self-stretch caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 min-h-[auto] outline-[3px] relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full overflow-x-clip relative no-underline w-full left-0">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[1fr] grid-rows-[1fr] h-full no-underline">
          <div className="self-stretch bg-[position:0px_0px] caret-transparent col-end-1 col-start-1 row-end-1 row-start-1 h-full justify-self-stretch min-h-[500px] relative no-underline left-0">
            <div className="bg-[position:0px_0px] caret-transparent ml-[calc(50%_-_490px)] absolute no-underline w-[980px] inset-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
              <div className="bg-[position:0px_0px] caret-transparent pointer-events-none no-underline">
                <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
                  <div className="bg-[position:0px_0px] box-border caret-transparent grid grid-cols-[100%] grid-rows-[repeat(5,min-content)_1fr] min-h-[500px] no-underline w-full">
                    <HeroSection />
                    <GallerySection />
                    <VideoSection
                      sectionVariantClassName="row-end-4 row-start-3"
                      description="Cinematic Fly-Around Video of Property For Sale with Points of Interest Highlighted"
                      descriptionVariantClassName="mt-[159px] left-[83px]"
                      embedContainerVariant="h-[277px] w-[480px] mt-[58px] mb-[31px] left-[458px]"
                      embedSrc="https://player.vimeo.com/video/266811326?autoplay=false&muted=false&loop=false&byline=true&portrait=true&title=true"
                      contentOrder="descriptionFirst"
                    />
                    <VideoSection
                      sectionVariantClassName="row-end-5 row-start-4"
                      description="Cinematic Features Interiors and Aerial Video of Property "
                      descriptionVariantClassName="mt-[127px] left-[584px]"
                      embedContainerVariant="h-[291px] w-[504px] mt-8 mb-[38px] left-[30px]"
                      embedSrc="https://player.vimeo.com/video/293581938?autoplay=false&muted=false&loop=false&byline=true&portrait=true&title=true"
                      contentOrder="embedFirst"
                    />
                    <VideoSection
                      sectionVariantClassName="row-end-6 row-start-5"
                      description="Fly Around Video with Marketing overlay"
                      descriptionVariantClassName="mt-[143px] left-[92px]"
                      embedContainerVariant="h-[277px] w-[480px] mt-[38px] mb-[26px] left-[477px]"
                      embedSrc="https://player.vimeo.com/video/232589486?autoplay=false&muted=false&loop=false&byline=false&portrait=false&title=false"
                      contentOrder="descriptionFirst"
                    />
                    <VideoSection
                      sectionVariantClassName="row-end-7 row-start-6"
                      description="Commercial Application on Construction Job Site"
                      descriptionVariantClassName="mt-[140px] left-[569px]"
                      embedContainerVariant="h-[277px] w-[480px] mt-[26px] left-[22px]"
                      embedSrc="https://player.vimeo.com/video/267454249?autoplay=false&muted=false&loop=false&byline=false&portrait=false&title=false"
                      contentOrder="embedFirst"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
