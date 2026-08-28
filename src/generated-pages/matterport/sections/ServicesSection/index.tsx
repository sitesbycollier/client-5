import { ServicesList } from "./components/ServicesList";
import { MediaBlock } from "../../components/MediaBlock";
import { QuoteCallout } from "./components/QuoteCallout";
import { EmbeddedTour } from "./components/EmbeddedTour";

export const ServicesSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(7,min-content)_1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] border-t-neutral-500 box-border caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[5px] justify-self-stretch min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline origin-[50%_1.5px] w-full mb-[11px] border-t-[3px] left-0"></div>
          <ServicesList />
          <MediaBlock
            rootVariant="row-end-3 row-start-2 h-[237px] w-[489px] mb-[33px] left-[444px]"
            sizes="489px"
            src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_cd35430eccd24c62b944923e1c071f65~mv2.png"
            alt="Desktop_Mobile_VR-1-1024x498.png"
            imageVariant="aspect-[auto_489_/_237] [mask-position:0px_50%]"
          />
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[379px] mb-[5px] left-[499px]">
            <h6 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[21px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                Commercial Properties and Buildings
              </span>
            </h6>
          </div>
          <MediaBlock
            rootVariant="row-end-5 row-start-4 h-[407px] w-[277px] mt-[34px] mb-[31px] left-[69px] before:accent-auto before:bg-[url(data:image/png;base64,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)] before:bg-[position:0px_0px] before:bg-no-repeat before:bottom-[-26px] before:caret-transparent before:text-black before:block before:text-[10px] before:not-italic before:normal-nums before:font-normal before:h-[26px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[165px] before:border-separate before:-left-5 before:font-arial after:accent-auto after:bg-[url(data:image/png;base64,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)] after:bg-[position:100%_0px] after:bg-no-repeat after:bottom-[-26px] after:caret-transparent after:text-black after:block after:text-[10px] after:not-italic after:normal-nums after:font-normal after:h-[26px] after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[165px] after:border-separate after:-right-5 after:font-arial"
            contentVariant="bg-gray-800 shadow-[rgba(0,0,0,0.5)_0px_0px_3px_0px] border-gray-800 rounded-[3px] border-2 border-solid"
            sizes="273px"
            src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_59547249934b45f3bb4a7ffebd20c5ad~mv2_d_2048_1471_s_2.jpg"
            alt="Blueprints.jpg"
            imageVariant="aspect-[auto_273_/_403] [mask-position:0px_50%] rounded-[1px]"
          />
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-7 row-start-4 justify-self-start ml-[calc(50%_-_490px)] min-h-[524px] min-w-[auto] break-words relative no-underline w-[556px] mb-7 left-[411px]">
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] leading-[23.8px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
               
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    As-Built surveys for retailers, architectural and design
                    firms, planning and management companies, and other
                    construction professionals.  
                  </span>
                </span>
              </span>
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
               
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    Employing cutting edge technology, we are shifting the
                    paradigm in delivering customized As-Built solutions that
                    meet the specific needs of each client.
                  </span>
                </span>
              </span>
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    �
                  </span>
                </span>
              </span>
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    What makes us different?   We supplement our field work by
                    utilizing 3D reality scanning to capture spatial and
                    photographic data and measurements to generate registered
                    point clouds.  
                  </span>
                </span>
              </span>
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
               
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    These point clouds are imported into AutoCad or AutoDesk
                    Revit to produce accurate as-built drawings with 3D visual
                    reference points and documentation that is second to none in
                    the industry.  
                  </span>
                </span>
              </span>
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
               
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    Our data capture process saves time by reducing the
                    requirement of manual measurements by 80%, limits the need
                    for timely and costly return visits, and speeds up the
                    as-built drawing process significantly.  
                  </span>
                </span>
              </span>
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
               
            </p>
            <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    The result is the timely delivery of as-built drawings that
                    are accurate, informative, interactive, and cost efficient.
                  </span>
                </span>
              </span>
            </p>
          </div>
          <QuoteCallout />
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-8 row-start-7 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[404px] mt-[17px] mb-[60px] left-[33px]">
            <h6 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[21px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent text-white break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                    Inspection - Floor Plans - Remodels
                    <br className="caret-transparent outline-[3px] break-words no-underline" />
                    Systems - Electrical - Plumbing - HVAC - take a look from
                    the inside out with a working Model of your property in 3
                    Dimensions.
                  </span>
                </span>
              </span>
            </h6>
          </div>
          <MediaBlock
            rootVariant="row-end-8 row-start-7 h-[265px] mb-[-63px] w-[499px] left-[462px]"
            sizes="499px"
            src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_971deec673dc4ec3940e030f9c16bfd9~mv2.jpg"
            alt="092816.jpg"
            imageVariant="aspect-[auto_499_/_265] [mask-position:0px_50%]"
          />
          <EmbeddedTour />
          <MediaBlock
            rootVariant="row-end-9 row-start-8 h-[367px] w-[307px] mt-20 mb-[3px] left-[633px]"
            sizes="307px"
            src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_8f1b114b2e844374835c04f5490bc9a7~mv2.jpg"
            alt="Services.jpg"
            imageVariant="aspect-[auto_307_/_367] [mask-image:url(data:image/svg+xml,%3Csvg%20preserveAspectRatio=%27none%27%20data-bbox=%2720%2020%20160%20160%27%20viewBox=%2720%2020%20160%20160%27%20height=%27200%27%20width=%27200%27%20xmlns=%27http://www.w3.org/2000/svg%27%20data-type=%27shape%27%3E%3Cg%3E%3Cpath%20d=%27M180%2020v160H20V20h160z%27/%3E%3C/g%3E%3C/svg%3E%0A)]"
          />
        </div>
      </div>
    </section>
  );
};
