export type FooterContactProps = {
  containerVariantClass: string;
  headingVariantClass: string;
  contentVariantClass: string;
  children: React.ReactNode;
};

export const FooterContact = (props: FooterContactProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-w-[auto] break-words relative no-underline left-[21px] ${props.containerVariantClass}`}
    >
      <h5
        className={`bg-[position:0px_0px] caret-transparent text-gray-800 break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544 ${props.headingVariantClass}`}
      >
        <span
          className={`bg-[position:0px_0px] caret-transparent break-words ${props.contentVariantClass}`}
        >
          {props.children}
        </span>
      </h5>
    </div>
  );
};
