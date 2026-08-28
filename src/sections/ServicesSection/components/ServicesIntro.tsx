import { OrderCallToAction } from "@/sections/ServicesSection/components/OrderCallToAction";
import { PartnerLogos } from "@/sections/ServicesSection/components/PartnerLogos";

export const ServicesIntro = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-[980px] mt-[58px] mb-[9px] left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] relative no-underline w-full mx-auto">
        <div className="bg-[position:0px_0px] caret-transparent basis-[0%] grow-[980] min-h-[auto] relative no-underline w-full left-0 top-0">
          <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
            <div className="bg-neutral-100 bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
          </div>
          <div className="bg-[position:0px_0px] caret-transparent flex pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] mb-[-9px] min-h-[auto] min-w-[auto] no-underline w-full">
              <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[961px] mt-[45px] mb-3.5 left-[9px]">
                <h2 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[47px] break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
                  <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                      <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                        <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-roboto_bold">
                          WE CREATE MEDIA MAGIC
                        </span>
                      </span>
                    </span>
                  </span>
                </h2>
              </div>
              <OrderCallToAction />
              <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[261px] mb-0.5 left-[375px]">
                <h5 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-sm break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
                  <span className="bg-[position:0px_0px] caret-transparent text-black break-words no-underline">
                    <span className="bg-[position:0px_0px] caret-transparent tracking-[5.6px] break-words no-underline">
                      <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                        Authorized Provider 
                      </span>
                    </span>
                  </span>
                </h5>
              </div>
              <PartnerLogos
                containerVariant="h-[70px] w-[280px] mt-[9px] mb-2.5 left-[79px]"
                wrapperType="div"
                wrapperClassName="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden"
                imageSizes="280px"
                imageUrl="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_eba5ca082a224c71bb2fbacd821a4dd8~mv2.png"
                imageAlt="Matterport-Logo-Multicolor.png"
                imageClassName="aspect-[auto_280_/_70] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
              />
              <PartnerLogos
                containerVariant="h-14 w-[245px] mt-2.5 mb-[23px] left-96"
                wrapperType="a"
                wrapperClassName="bg-[position:0px_0px] box-border caret-transparent text-blue-700 block h-full no-underline w-full overflow-hidden"
                href="http://www.zillow.com/"
                imageSizes="245px"
                imageUrl="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_47ed6e2ff6bf4f27a954c2b1486a3576~mv2.png"
                imageAlt="ZillowCertifiedPhotographerBadge_Blue_Ho"
                imageClassName="aspect-[auto_245_/_56] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
              />
              <PartnerLogos
                containerVariant="h-[89px] w-56 left-[680px]"
                wrapperType="div"
                wrapperClassName="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden"
                imageSizes="224px"
                imageUrl="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_b111c74f0cd9489fa3c3410820fce82f~mv2.png"
                imageAlt="cubicasa-fp-half-01.png"
                imageClassName="aspect-[auto_224_/_89] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
