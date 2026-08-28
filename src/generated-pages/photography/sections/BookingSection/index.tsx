import { BookingForm } from "./components/BookingForm";

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
              Residential
            </h2>
            <p className="text-[16px] leading-[24px] text-slate-600 mt-2 font-helvetica_w01_roman">
              One smooth booking flow for residential shoots with package costs,
              service add-ons, and signup details in one place.
            </p>
            <p className="text-[14px] leading-[22px] text-slate-500 mt-1 font-helvetica_w01_roman">
              Ask about Pay at Closing during signup.
            </p>
          </div>

          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-full">
            <BookingForm />
            <div className="ml-[calc(50%_-_490px)] w-[940px] mt-8 mb-10 left-5 relative">
              <h3 className="text-[24px] leading-[30px] font-avenir_lt_w01_85_heavy1475544 text-slate-900 mb-4">
                Residential Portfolio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_5d48ef81be3446b280bc965371cd3777~mv2.jpg"
                  alt="Residential portfolio one"
                  className="h-[220px] w-full object-cover rounded-xl"
                />
                <img
                  src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_6cdc02b2698943efbb649a91b46bacbe~mv2-1.jpg"
                  alt="Residential portfolio two"
                  className="h-[220px] w-full object-cover rounded-xl"
                />
                <img
                  src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_8ce120e8a17341858af55c2359b98cc9~mv2-1.jpg"
                  alt="Residential portfolio three"
                  className="h-[220px] w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
