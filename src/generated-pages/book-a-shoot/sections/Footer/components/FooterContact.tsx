export type FooterContactProps = {
  variant: string;
  rootVariantClass: string;
  headingVariantClass: string;
  textVariantClass: string;
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  contactName: string;
  contactLocation: string;
  contactPhone: string;
  contactEmail: string;
  emailHref: string;
  emailText: string;
};

export const FooterContact = (props: FooterContactProps) => {
  if (props.variant === "image") {
    return (
      <div
        className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-w-[auto] relative no-underline ${props.rootVariantClass}`}
      >
        <div className="bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden">
          <img
            sizes={props.imageSizes}
            src={props.imageSrc}
            alt={props.imageAlt}
            className="aspect-[auto_391_/_117] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
          />
        </div>
      </div>
    );
  }

  if (props.variant === "email") {
    return (
      <div
        className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-w-[auto] relative no-underline ${props.rootVariantClass}`}
      >
        <h5
          className={`bg-[position:0px_0px] caret-transparent text-gray-800 break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544 ${props.headingVariantClass}`}
        >
          <span
            className={`bg-[position:0px_0px] caret-transparent break-words ${props.textVariantClass}`}
          >
            <a
              href={props.emailHref}
              className="bg-[position:0px_0px] caret-transparent break-words no-underline"
            >
              {props.emailText}
            </a>
          </span>
        </h5>
      </div>
    );
  }

  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-w-[auto] relative no-underline ${props.rootVariantClass}`}
    >
      <h5
        className={`bg-[position:0px_0px] caret-transparent text-gray-800 break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544 ${props.headingVariantClass}`}
      >
        <span
          className={`bg-[position:0px_0px] caret-transparent break-words ${props.textVariantClass}`}
        >
          <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-madefor_text_bold">
              <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                <span className="bg-[position:0px_0px] caret-transparent text-black break-words no-underline">
                  {props.contactName}
                  <br className="caret-transparent outline-[3px] break-words no-underline" />
                  {props.contactLocation}
                  <br className="caret-transparent outline-[3px] break-words no-underline" />
                  {props.contactPhone}
                  <br className="caret-transparent outline-[3px] break-words no-underline" />
                  {props.contactEmail}
                </span>
              </span>
            </span>
          </span>
        </span>
      </h5>
    </div>
  );
};
