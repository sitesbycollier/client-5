export type FooterContactProps = {
  containerVariant: string;
  headingVariant: string;
  textWrapperVariant: string;
  contentVariant: string;
  contactName: string;
  location: string;
  phoneLabel: string;
  phoneNumber: string;
  emailAddress: string;
  emailHref: string;
  emailLinkText: string;
};

export const FooterContact = (props: FooterContactProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-w-[auto] break-words relative no-underline left-[21px] ${props.containerVariant}`}
    >
      <h5
        className={`bg-[position:0px_0px] caret-transparent text-gray-800 break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544 ${props.headingVariant}`}
      >
        <span
          className={`bg-[position:0px_0px] caret-transparent break-words ${props.textWrapperVariant}`}
        >
          {props.contentVariant === "email" ? (
            <a
              href={props.emailHref}
              className="bg-[position:0px_0px] caret-transparent break-words no-underline"
            >
              {props.emailLinkText}
            </a>
          ) : (
            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
              <span className="bg-[position:0px_0px] caret-transparent break-words no-underline font-madefor_text_bold">
                <span className="bg-[position:0px_0px] caret-transparent font-bold break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent text-black break-words no-underline">
                    {props.contactName}
                    <br className="caret-transparent outline-[3px] break-words no-underline" />
                    {props.location}
                    <br className="caret-transparent outline-[3px] break-words no-underline" />
                    {props.phoneLabel}: {props.phoneNumber}
                    <br className="caret-transparent outline-[3px] break-words no-underline" />
                    {props.emailAddress}
                  </span>
                </span>
              </span>
            </span>
          )}
        </span>
      </h5>
    </div>
  );
};
