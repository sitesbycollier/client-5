import { HeroVideo } from "@/sections/HeroSection/components/HeroVideo";
import { HeroMedia } from "@/sections/HeroSection/components/HeroMedia";
import { HeroServicesList } from "@/sections/HeroSection/components/HeroServicesList";
import { SocialLinks } from "@/components/SocialLinks";
import { EmbeddedMap } from "@/components/EmbeddedMap";

export const HeroSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-white bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(5,min-content)_1fr] no-underline w-full">
          <HeroVideo />
          <HeroMedia />
          <HeroServicesList />
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[560px] mb-4 left-[357px]">
            <h6 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[21px] leading-[29.4px] break-words pointer-events-auto text-right no-underline font-avenir_lt_w01_85_heavy1475544">
              409-383-4143 or
              <br className="caret-transparent outline-[3px] break-words no-underline" />
              email me at{" "}
              <span className="bg-[position:0px_0px] caret-transparent break-words underline">
                <a
                  href="mailto://Snapmagicmedia@gmail.com?subject=Have%20a%20listing%2C%20need%20a%20quote"
                  className="bg-[position:0px_0px] caret-transparent break-words no-underline"
                >
                  Snapmagicmedia@gmail.com
                </a>
              </span>
              .
            </h6>
          </div>
          <SocialLinks />
          <EmbeddedMap />
        </div>
      </div>
    </section>
  );
};
