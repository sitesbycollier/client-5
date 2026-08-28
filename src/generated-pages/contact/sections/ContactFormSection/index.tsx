import { ContactForm } from "./components/ContactForm";

export const ContactFormSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[840px] mt-[35px] mb-[23px] left-[58px]">
            <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-[840px]">
              <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
