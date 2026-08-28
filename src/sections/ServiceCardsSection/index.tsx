import { ServiceCard } from "@/sections/ServiceCardsSection/components/ServiceCard";
import { ServiceLink } from "@/sections/ServiceCardsSection/components/ServiceLink";

export const ServiceCardsSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-5 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[980px] mt-4 mb-[22px] left-0">
            <div className="bg-white bg-[position:0px_0px] caret-transparent absolute no-underline inset-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent min-h-[264px] pointer-events-none no-underline w-full">
              <div className="bg-[position:0px_0px] caret-transparent no-underline"></div>
            </div>
          </div>
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] relative no-underline w-[964px] mt-[27px] mb-[42px] left-1.5">
            <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-[964px]">
              <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] no-underline w-full">
                <ServiceCard
                  variant="image"
                  outerClassName="h-[186px] w-[181px] mt-1 mb-0.5 left-0"
                  imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_6cdc02b2698943efbb649a91b46bacbe~mv2.jpg"
                  imageAlt="Button Photography.jpg"
                  imageClassName="aspect-[auto_181_/_186] [mask-position:0px_50%]"
                  videoTitle=""
                  videoPreviewSrc=""
                  videoSrc=""
                  videoPosterSrc=""
                />
                <ServiceLink
                  containerVariant="w-[149px] mt-px left-1.5"
                  href="https://www.snapmagicmedia.com/photography"
                  label="Photography"
                  textVariant="text-base leading-[22.4px]"
                />
                <ServiceCard
                  variant="video"
                  outerClassName="h-[180px] w-[200px] my-1.5 left-[188px]"
                  imageSrc=""
                  imageAlt=""
                  imageClassName=""
                  videoTitle="Your Video Title"
                  videoPreviewSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/image-2.png"
                  videoSrc="https://video.wixstatic.com/video/360fdc_deaab30c97904faa83124d0e5f983992/1080p/mp4/file.mp4"
                  videoPosterSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_deaab30c97904faa83124d0e5f983992f000.jpg"
                />
                <ServiceLink
                  containerVariant="w-[161px] mt-px left-52"
                  href="https://www.snapmagicmedia.com/video"
                  label="Videography"
                  textVariant="text-base leading-[22.4px]"
                />
                <ServiceCard
                  variant="image"
                  outerClassName="h-[180px] w-[181px] mt-[7px] mb-[5px] left-[399px]"
                  imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_8ce120e8a17341858af55c2359b98cc9~mv2.jpg"
                  imageAlt="Button Aerial.jpg"
                  imageClassName="aspect-[auto_181_/_180] [mask-position:0px_50%]"
                  videoTitle=""
                  videoPreviewSrc=""
                  videoSrc=""
                  videoPosterSrc=""
                />
                <ServiceLink
                  containerVariant="w-[173px] mb-px left-[399px]"
                  href="https://www.snapmagicmedia.com/aerials"
                  label="Aerial Images and Video"
                  textVariant="text-sm leading-[19.6px]"
                />
                <ServiceCard
                  variant="image"
                  outerClassName="h-[180px] w-[181px] mt-[7px] mb-[5px] left-[593px]"
                  imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_5d2abc8620cf41a3a936500ab381e7f2~mv2.jpg"
                  imageAlt="3D Digital Twin.JPG"
                  imageClassName="aspect-[auto_181_/_180] [mask-image:url(data:image/svg+xml,%3Csvg%20preserveAspectRatio=%27none%27%20data-bbox=%2720%2020%20160%20160%27%20viewBox=%2720%2020%20160%20160%27%20height=%27200%27%20width=%27200%27%20xmlns=%27http://www.w3.org/2000/svg%27%20data-type=%27shape%27%3E%3Cg%3E%3Cpath%20d=%27M180%2020v160H20V20h160z%27/%3E%3C/g%3E%3C/svg%3E%0A)]"
                  videoTitle=""
                  videoPreviewSrc=""
                  videoSrc=""
                  videoPosterSrc=""
                />
                <ServiceLink
                  containerVariant="w-[142px] mb-px left-[613px]"
                  href="https://www.snapmagicmedia.com/matterport"
                  label="Digital Twin"
                  textVariant="text-base leading-[22.4px]"
                />
                <ServiceCard
                  variant="image"
                  outerClassName="h-[186px] w-[181px] mb-1.5 left-[783px]"
                  imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_8bc08506bd7749da88b45f582ee5c702~mv2.jpg"
                  imageAlt="Staged Video.JPG"
                  imageClassName="aspect-[auto_181_/_186] [mask-image:url(data:image/svg+xml,%3Csvg%20preserveAspectRatio=%27none%27%20data-bbox=%2720%2020%20160%20160%27%20viewBox=%2720%2020%20160%20160%27%20height=%27200%27%20width=%27200%27%20xmlns=%27http://www.w3.org/2000/svg%27%20data-type=%27shape%27%3E%3Cg%3E%3Cpath%20d=%27M180%2020v160H20V20h160z%27/%3E%3C/g%3E%3C/svg%3E%0A)]"
                  videoTitle=""
                  videoPreviewSrc=""
                  videoSrc=""
                  videoPosterSrc=""
                />
                <ServiceLink
                  containerVariant="w-[142px] mt-px left-[802px]"
                  href="https://www.snapmagicmedia.com/media-marketing"
                  label="Marketing"
                  textVariant="text-base leading-[22.4px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
