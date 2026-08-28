import { ServiceCard } from "./components/ServiceCard";
import { ServiceDescription } from "./components/ServiceDescription";

export const ServicesSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[980px] -left-1.5">
            <div className="bg-white bg-[position:0px_0px] caret-transparent absolute no-underline inset-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-[980px]">
              <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] no-underline w-full">
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] relative no-underline w-[964px] mt-2 mb-[7px] left-2">
                  <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-[964px]">
                    <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] no-underline w-full">
                      <ServiceCard
                        contentType="image"
                        containerVariant="row-end-2 row-start-1 h-[186px] w-[181px] mt-1 mb-0.5 left-0"
                        imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_6cdc02b2698943efbb649a91b46bacbe~mv2.jpg"
                        imageAlt="Button Photography.jpg"
                        imageClassVariant="aspect-[auto_181_/_186] [mask-position:0px_50%]"
                      />
                      <ServiceCard
                        contentType="link"
                        containerVariant="row-end-3 row-start-2 h-10 w-[149px] mt-px left-1.5"
                        href="https://www.snapmagicmedia.com/photography"
                        ariaLabel="Photography"
                        label="Photography"
                        labelClassVariant="text-base leading-[22.4px]"
                      />
                      <ServiceCard
                        contentType="video"
                        containerVariant="row-end-2 row-start-1 h-[180px] w-[200px] my-1.5 left-[188px]"
                        videoAriaLabel="Your Video Title Video Player"
                        videoTitle="Your Video Title"
                        videoPosterSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_deaab30c97904faa83124d0e5f983992f000.jpg"
                        videoSrc="https://video.wixstatic.com/video/360fdc_deaab30c97904faa83124d0e5f983992/1080p/mp4/file.mp4"
                      />
                      <ServiceCard
                        contentType="link"
                        containerVariant="row-end-3 row-start-2 h-10 w-[161px] mt-px left-52"
                        href="https://www.snapmagicmedia.com/video"
                        ariaLabel="Videography"
                        label="Videography"
                        labelClassVariant="text-base leading-[22.4px]"
                      />
                      <ServiceCard
                        contentType="image"
                        containerVariant="row-end-2 row-start-1 h-[180px] w-[181px] mt-[7px] mb-[5px] left-[399px]"
                        imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_8ce120e8a17341858af55c2359b98cc9~mv2.jpg"
                        imageAlt="Button Aerial.jpg"
                        imageClassVariant="aspect-[auto_181_/_180] [mask-position:0px_50%]"
                      />
                      <ServiceCard
                        contentType="link"
                        containerVariant="row-end-3 row-start-2 h-10 w-[173px] mb-px left-[399px]"
                        href="https://www.snapmagicmedia.com/aerials"
                        ariaLabel="Aerial Images and Video"
                        label="Aerial Images and Video"
                        labelClassVariant="text-sm leading-[19.6px]"
                      />
                      <ServiceCard
                        contentType="image"
                        containerVariant="row-end-2 row-start-1 h-[180px] w-[181px] mt-[7px] mb-[5px] left-[593px]"
                        imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_5d2abc8620cf41a3a936500ab381e7f2~mv2.jpg"
                        imageAlt="3D Digital Twin.JPG"
                        imageClassVariant="aspect-[auto_181_/_180] [mask-image:url(data:image/svg+xml,%3Csvg%20preserveAspectRatio=%27none%27%20data-bbox=%2720%2020%20160%20160%27%20viewBox=%2720%2020%20160%20160%27%20height=%27200%27%20width=%27200%27%20xmlns=%27http://www.w3.org/2000/svg%27%20data-type=%27shape%27%3E%3Cg%3E%3Cpath%20d=%27M180%2020v160H20V20h160z%27/%3E%3C/g%3E%3C/svg%3E%0A)]"
                      />
                      <ServiceCard
                        contentType="link"
                        containerVariant="row-end-3 row-start-2 h-10 w-[142px] mb-px left-[613px]"
                        href="https://www.snapmagicmedia.com/matterport"
                        ariaLabel="Digital Twin"
                        label="Digital Twin"
                        labelClassVariant="text-base leading-[22.4px]"
                      />
                      <ServiceCard
                        contentType="image"
                        containerVariant="row-end-2 row-start-1 h-[186px] w-[181px] mb-1.5 left-[783px]"
                        imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_8bc08506bd7749da88b45f582ee5c702~mv2.jpg"
                        imageAlt="Staged Video.JPG"
                        imageClassVariant="aspect-[auto_181_/_186] [mask-image:url(data:image/svg+xml,%3Csvg%20preserveAspectRatio=%27none%27%20data-bbox=%2720%2020%20160%20160%27%20viewBox=%2720%2020%20160%20160%27%20height=%27200%27%20width=%27200%27%20xmlns=%27http://www.w3.org/2000/svg%27%20data-type=%27shape%27%3E%3Cg%3E%3Cpath%20d=%27M180%2020v160H20V20h160z%27/%3E%3C/g%3E%3C/svg%3E%0A)]"
                      />
                      <ServiceCard
                        contentType="link"
                        containerVariant="row-end-3 row-start-2 h-10 w-[142px] mt-px left-[802px]"
                        href="https://www.snapmagicmedia.com/media-marketing"
                        ariaLabel="Marketing"
                        label="Marketing"
                        labelClassVariant="text-base leading-[22.4px]"
                      />
                    </div>
                  </div>
                </div>
                <ServiceDescription
                  classNameVariant="row-end-3 mb-2.5 left-3.5"
                  descriptions={[
                    "Prices starting at $175.00 for up to 2000 sq. ft.\u00A0",
                    "Check prices based on services needed and square footage of home.\u00A0",
                  ]}
                />
                <ServiceDescription
                  classNameVariant="row-end-3 mb-5 left-[222px]"
                  descriptions={[
                    "Prices starting at $300.00 for 90 sec video�",
                    "*   Agent Promos",
                    "** Full Cinematic Video Productions also available",
                    "***  AI Video with 20 images and voice over $60.00",
                  ]}
                />
                <ServiceDescription
                  classNameVariant="row-end-3 mb-[38px] left-[419px]"
                  descriptions={[
                    "Prices starting at $140.00 for aerial still images when photography ordered at same time.\u00A0",
                    "Other aerial services may be purchased.",
                    "�",
                  ]}
                />
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-h-[auto] min-w-[auto] break-words relative no-underline w-[310px] mb-4 left-6">
                  <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-xs leading-[18px] break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                      *some locations may incur a small travel charge
                    </span>
                  </p>
                </div>
                <ServiceDescription
                  classNameVariant="row-end-3 mb-2.5 left-[621px]"
                  descriptions={[
                    "Prices starting at $225.00 for up to 2000 sq. ft. �",
                  ]}
                />
                <ServiceDescription
                  classNameVariant="row-end-5 left-[810px]"
                  descriptions={[
                    "Most of our services include a free property website with multiple video, social media and print assets",
                    "Other Marketing services are available on the Marketing Page\u200b",
                    "Contact us for a quote.",
                    "\u200b",
                    "\u200b",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
