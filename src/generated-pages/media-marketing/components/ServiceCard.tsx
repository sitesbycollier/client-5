export type ServiceCardProps = {
  imageSrc: string;
  imageAlt: string;
  imageWrapperVariant: string;
  imageClassVariant: string;
  title: string;
  titleWrapperVariant: string;
  titleInnerVariant: string;
  descriptionWrapperVariant: string;
  children: React.ReactNode;
  imageHref?: string;
  buttonWrapperVariant: string;
  buttonText: string;
  buttonAriaLabel: string;
  buttonHref?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="bg-[position:0px_0px] shadow-[rgba(0,0,0,0.1)_0px_4px_10px_0px] caret-transparent relative no-underline w-[306px] overflow-clip">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-white bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] no-underline w-full">
          <div
            className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[306px] left-0 ${props.imageWrapperVariant}`}
          >
            {props.imageHref ? (
              <a
                href={props.imageHref}
                className="bg-[position:0px_0px] box-border caret-transparent text-blue-700 block h-full no-underline w-full overflow-hidden"
              >
                <img
                  sizes="306px"
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className={`bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] no-underline align-baseline w-full overflow-hidden ${props.imageClassVariant}`}
                />
              </a>
            ) : (
              <div className="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden">
                <img
                  sizes="306px"
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className={`bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] no-underline align-baseline w-full overflow-hidden ${props.imageClassVariant}`}
                />
              </div>
            )}
          </div>
          <div
            className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[180px] -left-px ${props.titleWrapperVariant}`}
          >
            <div className="bg-white bg-[position:0px_0px] caret-transparent absolute no-underline inset-0"></div>
            <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-[180px]">
              <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
                <div
                  className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] break-words relative no-underline mt-2 left-[17px] ${props.titleInnerVariant}`}
                >
                  <h4 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-xl break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
                    <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                      <span className="bg-[position:0px_0px] caret-transparent tracking-[1.6px] break-words no-underline">
                        <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                          <span className="bg-[position:0px_0px] caret-transparent text-slate-500 break-words no-underline">
                            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-open_sans">
                              {props.title}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-h-[68px] min-w-[auto] break-words relative no-underline w-[268px] ${props.descriptionWrapperVariant}`}
          >
            {props.children}
          </div>
          <div
            className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[213px] ${props.buttonWrapperVariant}`}
            role={props.buttonHref ? undefined : "button"}
          >
            {props.buttonHref ? (
              <a
                href={props.buttonHref}
                aria-label={props.buttonAriaLabel}
                className="items-center bg-teal-400 bg-[position:0px_0px] box-border caret-transparent text-blue-700 flex justify-center min-w-full absolute no-underline w-max inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-blue-700 before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-blue-700 after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
              >
                <span className="bg-[position:0px_0px] caret-transparent text-white block text-[15px] leading-[21px] min-h-[auto] min-w-[auto] relative no-underline text-nowrap font-helvetica_w01_roman">
                  {props.buttonText}
                </span>
              </a>
            ) : (
              <div
                aria-label={props.buttonAriaLabel}
                className="items-center bg-teal-400 bg-[position:0px_0px] box-border caret-transparent flex justify-center min-w-full absolute no-underline w-max inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-black before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-black after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
              >
                <span className="bg-[position:0px_0px] caret-transparent text-white block text-[15px] leading-[21px] min-h-[auto] min-w-[auto] relative no-underline text-nowrap font-helvetica_w01_roman">
                  {props.buttonText}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
