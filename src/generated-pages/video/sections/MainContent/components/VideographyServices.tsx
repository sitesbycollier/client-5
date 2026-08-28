import { ServiceIntro } from "./ServiceIntro";
import { OrderButton } from "../../../components/OrderButton";
import { VideoServicesGallery } from "./VideoServicesGallery";

export const VideographyServices = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-white bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] no-underline w-full">
          <ServiceIntro
            containerVariant="row-end-2 row-start-1 min-h-[auto] w-[800px] mt-[77px] mb-10"
            contentType="heading"
            title="Videography Services"
            paragraphs={[]}
          />
          <ServiceIntro
            containerVariant="row-end-3 row-start-2 min-h-1.5 w-[805px] mb-[30px]"
            contentType="paragraph"
            title=""
            paragraphs={[
              "What do you need to showcase your property?   ",
              "Imagine a prospective buyer searching online for the perfect home. It's essential to highlight the location, neighborhood, and both exterior and interior features that will capture their attention through video. ",
              " ",
              "Our videographer will ensure your property stands out!stand out!  ",
            ]}
          />
          <OrderButton />
          <VideoServicesGallery />
        </div>
      </div>
    </section>
  );
};
