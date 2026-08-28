import { FooterWidget } from "./components/FooterWidget";
import { FooterLogo } from "./components/FooterLogo";
import { FooterContact } from "./components/FooterContact";
import { FooterEmailLink } from "./components/FooterEmailLink";

export const Footer = () => {
  return (
    <footer className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 min-h-[auto] relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent absolute no-underline w-full inset-0"></div>
      <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent ml-[calc(50%_-_490px)] absolute no-underline w-[980px] inset-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent relative no-underline w-full">
          <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
            <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(6,min-content)_1fr] no-underline w-full">
              <FooterWidget
                title="Facebook Like"
                ariaLabel="Facebook Like"
                variantClassName="block row-end-2 row-start-1 h-10 min-h-[auto] min-w-[auto] outline-[3px] w-[250px] mt-2.5 mb-[9px] left-0"
                iframeTitle="Facebook Like"
                iframeAriaLabel="Facebook Like"
                iframeSrc="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.snapmagicmedia.com&layout=standard&show_faces=false&action=like&colorscheme=light&send=false&locale=en_US"
                iframeClassName="bg-[position:0px_0px] caret-transparent h-full no-underline align-baseline w-full"
                contentType="facebookLike"
              />
              <FooterLogo />
              <FooterContact />
              <FooterEmailLink />
              <FooterWidget
                variantClassName="bg-[position:0px_0px] row-end-7 row-start-6 h-[89px] min-h-[auto] min-w-[auto] w-[177px] mb-[37px] left-[18px]"
                iframeTitle="Embedded Content"
                iframeSrc="https://www-snapmagicmedia-com.filesusr.com/html/360fdc_f6434878fa136725208a6ae4e8c89dda.html"
                iframeName="htmlComp-iframe"
                iframeClassName="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
                contentType="embeddedContent"
                innerWrapperClassName="outline-[3px]"
              />
              <FooterWidget
                variantClassName="bg-[position:0px_0px] row-end-8 row-start-2 h-[600px] max-h-[2000px] max-w-[500px] min-h-[575px] min-w-[280px] w-[499px] left-[415px] right-0 inset-y-0"
                iframeTitle="fb:page Facebook Social Plugin"
                iframeName="f67de731a93c08807"
                iframeClassName="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline align-baseline w-0"
                contentType="facebookPage"
                innerWrapperClassName="bg-[position:0px_0px] inline-block h-full relative"
              />
              <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
