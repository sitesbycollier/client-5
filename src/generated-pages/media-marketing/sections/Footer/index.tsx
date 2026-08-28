import { FooterEmbeds } from "./components/FooterEmbeds";
import { FooterContact } from "./components/FooterContact";

export const Footer = () => {
  return (
    <footer className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 min-h-[auto] relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent absolute no-underline w-full inset-0"></div>
      <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent ml-[calc(50%_-_490px)] absolute no-underline w-[980px] inset-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(6,min-content)_1fr] no-underline w-full">
              <FooterEmbeds
                variant="facebookLike"
                title="Facebook Like"
                ariaLabel="Facebook Like"
                src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.snapmagicmedia.com&layout=standard&show_faces=false&action=like&colorscheme=light&send=false&locale=en_US"
                name=""
              />
              <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 h-[117px] justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[391px] mb-10 left-0">
                <div className="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden">
                  <img
                    sizes="391px"
                    src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_b94a527054ad49639debda577163b012~mv2.png"
                    alt="web-01.png"
                    className="aspect-[auto_391_/_117] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
                  />
                </div>
              </div>
              <FooterContact
                containerVariantClass="row-end-4 row-start-3 min-h-[121px] w-[349px] mb-[19px]"
                headingVariantClass="text-lg leading-[30.6px]"
                contentVariantClass="tracking-[1.8px] no-underline"
              >
                <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-madefor_text_bold">
                    <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                      <span className="bg-[position:0px_0px] caret-transparent text-black break-words no-underline">
                        Linda Beber, Photographer/Owner
                        <br className="caret-transparent outline-[3px] break-words no-underline" />
                        Hot Springs, AR 71901
                        <br className="caret-transparent outline-[3px] break-words no-underline" />
                        Mobile/Office: 409-383-4143
                        <br className="caret-transparent outline-[3px] break-words no-underline" />
                        SnapMagicMedia@gmail.com
                      </span>
                    </span>
                  </span>
                </span>
              </FooterContact>
              <FooterContact
                containerVariantClass="row-end-5 row-start-4 min-h-[auto] w-[310px] mb-2.5"
                headingVariantClass="text-[25px] leading-[35px]"
                contentVariantClass="underline"
              >
                <a
                  href="mailto://snapmagicmedia@gmail.com?subject=I%20have%20a%20Question"
                  className="bg-[position:0px_0px] caret-transparent break-words no-underline"
                >
                  Email Linda Now
                </a>
              </FooterContact>
              <FooterEmbeds
                variant="embeddedContent"
                title="Embedded Content"
                ariaLabel=""
                src="https://www-snapmagicmedia-com.filesusr.com/html/360fdc_f6434878fa136725208a6ae4e8c89dda.html"
                name="htmlComp-iframe"
              />
              <FooterEmbeds
                variant="default"
                title="fb:page Facebook Social Plugin"
                ariaLabel=""
                src=""
                name="f6db3ba09b8d32ed3"
              />
              <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
