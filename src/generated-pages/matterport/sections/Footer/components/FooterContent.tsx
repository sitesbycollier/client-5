import { FooterBrandMedia } from "./FooterBrandMedia";
import { ContactInfo } from "./ContactInfo";
import { EmailCallToAction } from "./EmailCallToAction";

export const FooterContent = () => {
  return (
    <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(6,min-content)_1fr] no-underline w-full">
      <FooterBrandMedia variant="facebook-like" />
      <FooterBrandMedia variant="brand-image" />
      <ContactInfo />
      <EmailCallToAction />
      <FooterBrandMedia variant="embedded-content" />
      <FooterBrandMedia variant="default" />
      <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
    </div>
  );
};
