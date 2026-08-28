export const ContactForm = () => {
  return (
    <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-3 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[390px] mt-4 mb-[50px] left-[564px]">
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-[390px]">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <form className="self-start bg-neutral-100 bg-[position:0px_0px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[390px] left-0">
            <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-[390px]">
              <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(5,min-content)_1fr] no-underline w-full">
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] break-words relative no-underline w-[310px] mb-[42px] left-0">
                  <h5 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[25px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-futura_lt_w01_light">
                      <span className="bg-[position:0px_0px] caret-transparent text-gray-700 break-words no-underline">
                        <span className="bg-[position:0px_0px] caret-transparent text-3xl break-words no-underline">
                          Contact Us
                        </span>
                      </span>
                    </span>
                  </h5>
                </div>
                <div className="self-start bg-[position:0px_0px] caret-transparent flex flex-col col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[25px] min-w-[auto] pointer-events-auto relative no-underline w-[390px] mb-[17px] left-0">
                  <div className="bg-[position:0px_0px] caret-transparent h-[61px] min-h-[auto] min-w-[auto] relative no-underline">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      maxLength="100"
                      defaultValue=""
                      className="appearance-none bg-orange-200 shadow-[rgb(255,140,107)_-4.24px_4.24px_0px_0px] box-border caret-transparent text-sm font-bold leading-[19.6px] max-w-full min-h-[61px] outline-[3px] no-underline text-ellipsis w-full border pl-10 pr-[3px] py-[3px] border-solid border-transparent font-futura_lt_w01_book"
                    />
                  </div>
                </div>
                <div className="self-start bg-[position:0px_0px] caret-transparent flex flex-col col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-h-[25px] min-w-[auto] pointer-events-auto relative no-underline w-[390px] mb-[17px] left-0">
                  <div className="bg-[position:0px_0px] caret-transparent h-[61px] min-h-[auto] min-w-[auto] relative no-underline">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required={true}
                      maxLength="250"
                      defaultValue=""
                      className="appearance-none bg-orange-200 shadow-[rgb(255,140,107)_-4.24px_4.24px_0px_0px] box-border caret-transparent text-sm font-bold leading-[19.6px] max-w-full min-h-[61px] outline-[3px] no-underline text-ellipsis w-full border pl-10 pr-[3px] py-[3px] border-solid border-transparent font-futura_lt_w01_book"
                    />
                  </div>
                </div>
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[390px] mb-[30px] left-0">
                  <label className="bg-[position:0px_0px] caret-transparent hidden no-underline"></label>
                  <textarea
                    placeholder="Add a message"
                    className="appearance-none bg-orange-200 shadow-[rgb(255,140,107)_-4.24px_4.24px_0px_0px] box-border caret-transparent block text-sm font-bold h-[110px] leading-[19.6px] max-w-full min-w-full outline-[3px] resize-none no-underline pl-10 pr-2.5 pt-[10.5px] pb-[3px] border-transparent font-futura_lt_w01_book"
                  ></textarea>
                </div>
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-6 row-start-5 h-[49px] justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[193px] mb-[30px] left-[98px]">
                  <button
                    aria-label="Submit"
                    className="items-center bg-neutral-100 bg-[position:0px_0px] shadow-[rgb(255,140,107)_-11.31px_11.31px_0px_0px] caret-transparent flex text-[13.3333px] justify-center min-w-full absolute no-underline w-max border-red-400 p-0 rounded-bl rounded-br rounded-tl rounded-tr border-[3px] inset-0 font-arial before:accent-auto before:self-stretch before:caret-transparent before:text-black before:block before:grow before:text-[13.3333px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-black after:block after:grow after:text-[13.3333px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
                  >
                    <span className="bg-[position:0px_0px] caret-transparent text-gray-700 block text-[15px] font-bold leading-[21px] min-h-[auto] min-w-[auto] relative no-underline text-nowrap font-futura_lt_w01_book">
                      Submit
                    </span>
                  </button>
                </div>
                <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-7 row-start-6 justify-self-start min-h-[auto] min-w-[auto] break-words relative no-underline invisible w-[352px] left-[19px]">
                  <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[17px] break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-futura_lt_w01_light">
                      <span className="bg-[position:0px_0px] caret-transparent text-teal-500 break-words no-underline">
                        Thanks for submitting!
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
