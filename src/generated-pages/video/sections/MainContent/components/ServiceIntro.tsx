export type ServiceIntroProps = {
  containerVariant: string;
  contentType: string;
  title: string;
  paragraphs: string[];
};

export const ServiceIntro = (props: ServiceIntroProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-w-[auto] break-words relative no-underline left-[22px] ${props.containerVariant}`}
    >
      {props.contentType === "heading" ? (
        <h2 className="bg-[position:0px_0px] caret-transparent text-cyan-700 text-[56px] leading-[78.4px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544">
          <span className="bg-[position:0px_0px] caret-transparent text-black break-words no-underline">
            <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
              {props.title}
            </span>
          </span>
        </h2>
      ) : (
        <>
          {props.paragraphs.map((paragraph, index) => (
            <p
              className="bg-[position:0px_0px] caret-transparent text-gray-800 text-base leading-[28.8px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544"
              key={`${paragraph}-${index}`}
            >
              {paragraph.trim() === "" ? (
                paragraph
              ) : (
                <span className="bg-[position:0px_0px] caret-transparent text-black break-words no-underline">
                  <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                    {paragraph}
                  </span>
                </span>
              )}
            </p>
          ))}
        </>
      )}
    </div>
  );
};
