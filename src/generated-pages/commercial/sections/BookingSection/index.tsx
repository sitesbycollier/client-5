import { BookingEmbed } from "./components/BookingEmbed";

export const BookingSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-white bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[min-content_min-content] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline w-[940px] mt-4 mb-4 left-5">
            <h2 className="text-[34px] leading-[40px] font-avenir_lt_w01_85_heavy1475544 text-slate-900">
              Commercial
            </h2>
            <p className="text-[16px] leading-[24px] text-slate-600 mt-2 font-helvetica_w01_roman">
              Booking flow for commercial shoots with pricing, service options,
              and signup details in one place.
            </p>
            <p className="text-[14px] leading-[22px] text-slate-500 mt-1 font-helvetica_w01_roman">
              Ask about pay-at-closing or staged billing during signup.
            </p>
          </div>

          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-full">
            <BookingEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};
