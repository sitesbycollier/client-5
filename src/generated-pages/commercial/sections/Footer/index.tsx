import { FooterContact } from "./components/FooterContact";
import { FooterEmail } from "./components/FooterEmail";
import { FooterEmbed } from "./components/FooterEmbed";

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
              <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 h-[117px] justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[391px] mb-10 left-0">
                <div className="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden">
                  <img
                    sizes="391px"
                    src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_b94a527054ad49639debda577163b012~mv2-1-1.png"
                    alt="web-01.png"
                    className="aspect-[auto_391_/_117] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
                  />
                </div>
              </div>
              <FooterContact />
              <FooterEmail />
              <FooterEmbed
                rootVariant="row-end-7 row-start-6 h-[89px] min-h-[auto] min-w-[auto] w-[177px] mb-[37px] left-[18px]"
                containerVariant="outline-[3px]"
                contentType="div"
                iframeTitle="Embedded Content"
                iframeName="htmlComp-iframe"
                iframeSrc="https://www-snapmagicmedia-com.filesusr.com/html/360fdc_f6434878fa136725208a6ae4e8c89dda.html"
                iframeClassName="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
              />
              <FooterEmbed
                rootVariant="row-end-8 row-start-2 h-[600px] max-h-[2000px] max-w-[500px] min-h-[575px] min-w-[280px] w-[499px] left-[415px] right-0 inset-y-0"
                containerVariant="bg-[position:0px_0px] inline-block h-full relative"
                contentType="span"
                iframeTitle="fb:page Facebook Social Plugin"
                iframeName="f01632a2e95f3cb8d"
                iframeSrc=""
                iframeClassName="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline align-baseline w-0"
              />
              <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
