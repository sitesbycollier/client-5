export const ContactSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[860px] mt-[10px] mb-[30px] left-[60px]">
            <h2 className="text-[30px] leading-[36px] text-slate-900 font-avenir_lt_w01_85_heavy1475544">
              Our Team Is Ready To Help
            </h2>
            <p className="text-[18px] leading-[28px] text-slate-600 mt-3 font-helvetica_w01_roman">
              Keep your existing brand and logo, with a cleaner contact flow
              that matches your updated site style.
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-[17px] text-slate-800 font-helvetica_w01_roman">
                Email:{" "}
                <a
                  href="mailto:SnapMagicMedia@gmail.com?subject=SnapMagicMedia%20Question"
                  className="underline text-slate-900"
                >
                  SnapMagicMedia@gmail.com
                </a>
              </p>
              <p className="text-[17px] text-slate-800 font-helvetica_w01_roman">
                Call or Text:{" "}
                <a href="tel:+14093834143" className="underline text-slate-900">
                  409-383-4143
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
