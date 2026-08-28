import { FooterContact } from "./components/FooterContact";
import { FooterMap } from "./components/FooterMap";

export const Footer = () => {
  return (
    <footer className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 min-h-[auto] relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent absolute no-underline w-full inset-0"></div>
      <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent ml-[calc(50%_-_490px)] absolute no-underline w-[980px] inset-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(6,min-content)_1fr] no-underline w-full">
              <div
                title="Facebook Like"
                aria-label="Facebook Like"
                className="self-start caret-transparent block col-end-2 col-start-1 row-end-2 row-start-1 h-10 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto relative no-underline w-[250px] mt-2.5 mb-[9px] left-0"
              >
                <iframe
                  title="Facebook Like"
                  aria-label="Facebook Like"
                  src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.snapmagicmedia.com&layout=standard&show_faces=false&action=like&colorscheme=light&send=false&locale=en_US"
                  className="bg-[position:0px_0px] caret-transparent h-full no-underline align-baseline w-full"
                ></iframe>
              </div>
              <FooterContact
                variant="image"
                rootVariantClass="row-end-3 row-start-2 h-[117px] min-h-[auto] pointer-events-auto w-[391px] mb-10 left-0"
                headingVariantClass=""
                textVariantClass=""
                imageSrc="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_b94a527054ad49639debda577163b012~mv2.png"
                imageAlt="web-01.png"
                imageSizes="391px"
                contactName=""
                contactLocation=""
                contactPhone=""
                contactEmail=""
                emailHref=""
                emailText=""
              />
              <FooterContact
                variant="default"
                rootVariantClass="row-end-4 row-start-3 min-h-[121px] break-words w-[349px] mb-[19px] left-[21px]"
                headingVariantClass="text-lg leading-[30.6px]"
                textVariantClass="tracking-[1.8px] no-underline"
                imageSrc=""
                imageAlt=""
                imageSizes=""
                contactName="Linda Beber, Photographer/Owner"
                contactLocation="Hot Springs, AR 71901"
                contactPhone="Mobile/Office: 409-383-4143"
                contactEmail="SnapMagicMedia@gmail.com"
                emailHref=""
                emailText=""
              />
              <FooterContact
                variant="email"
                rootVariantClass="row-end-5 row-start-4 min-h-[auto] break-words w-[310px] mb-2.5 left-[21px]"
                headingVariantClass="text-[25px] leading-[35px]"
                textVariantClass="underline"
                imageSrc=""
                imageAlt=""
                imageSizes=""
                contactName=""
                contactLocation=""
                contactPhone=""
                contactEmail=""
                emailHref="mailto://snapmagicmedia@gmail.com?subject=I%20have%20a%20Question"
                emailText="Email Linda Now"
              />
              <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-7 row-start-6 h-[89px] justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[177px] mb-[37px] left-[18px]">
                <div className="caret-transparent outline-[3px] no-underline">
                  <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
                    <iframe
                      title="Embedded Content"
                      name="htmlComp-iframe"
                      src="https://www-snapmagicmedia-com.filesusr.com/html/360fdc_f6434878fa136725208a6ae4e8c89dda.html"
                      className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
                    ></iframe>
                  </div>
                </div>
              </div>
              <FooterMap />
              <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
