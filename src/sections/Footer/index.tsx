import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { FooterEmailLink } from "@/sections/Footer/components/FooterEmailLink";
import { FooterSocialEmbed } from "@/sections/Footer/components/FooterSocialEmbed";
import { FooterMapEmbed } from "@/sections/Footer/components/FooterMapEmbed";

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
              <FooterLogo />
              <FooterContact />
              <FooterEmailLink />
              <FooterSocialEmbed />
              <FooterMapEmbed />
              <div className="bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-2 h-[474px] min-h-[auto] min-w-[auto] pointer-events-auto no-underline invisible w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
