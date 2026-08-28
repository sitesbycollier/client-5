import { FooterWidgets } from "./components/FooterWidgets";
import { FooterLogo } from "./components/FooterLogo";
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
              <FooterWidgets
                variant="facebookLike"
                containerTitle="Facebook Like"
                containerAriaLabel="Facebook Like"
                iframeTitle="Facebook Like"
                iframeAriaLabel="Facebook Like"
                iframeSrc="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.snapmagicmedia.com&layout=standard&show_faces=false&action=like&colorscheme=light&send=false&locale=en_US"
              />
              <FooterLogo />
              <FooterContact
                containerVariant="row-end-4 row-start-3 min-h-[121px] w-[349px] mb-[19px]"
                headingVariant="text-lg leading-[30.6px]"
                textWrapperVariant="tracking-[1.8px] no-underline"
                contentVariant="contact"
                contactName="Linda Beber, Photographer/Owner"
                location="Hot Springs, AR 71901"
                phoneLabel="Mobile/Office"
                phoneNumber="409-383-4143"
                emailAddress="SnapMagicMedia@gmail.com"
                emailHref="mailto:SnapMagicMedia@gmail.com"
                emailLinkText="SnapMagicMedia@gmail.com"
              />
              <FooterContact
                containerVariant="row-end-5 row-start-4 min-h-[auto] w-[310px] mb-2.5"
                headingVariant="text-[25px] leading-[35px]"
                textWrapperVariant="underline"
                contentVariant="email"
                contactName=""
                location=""
                phoneLabel=""
                phoneNumber=""
                emailAddress=""
                emailHref="mailto://snapmagicmedia@gmail.com?subject=I%20have%20a%20Question"
                emailLinkText="Email Linda Now"
              />
              <FooterWidgets
                variant="embeddedContent"
                iframeTitle="Embedded Content"
                iframeSrc="https://www-snapmagicmedia-com.filesusr.com/html/360fdc_f6434878fa136725208a6ae4e8c89dda.html"
                iframeName="htmlComp-iframe"
              />
              <FooterWidgets
                variant="facebookPage"
                iframeName="fd68ab8ff858fb37f"
                iframeTitle="fb:page Facebook Social Plugin"
              />
              <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
