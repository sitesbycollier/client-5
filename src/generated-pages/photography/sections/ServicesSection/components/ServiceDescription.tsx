export type ServiceDescriptionProps = {
  classNameVariant: string;
  lines: string[];
};

export const ServiceDescription = (props: ServiceDescriptionProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-start-2 justify-self-start min-h-[auto] min-w-[auto] break-words relative no-underline w-[149px] ${props.classNameVariant}`}
    >
      {props.lines.map((line, index) => (
        <p
          className="bg-[position:0px_0px] caret-transparent text-gray-800 text-xs leading-[18px] break-words pointer-events-auto no-underline font-avenir_lt_w01_85_heavy1475544"
          key={index}
        >
          <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
            {line}
          </span>
        </p>
      ))}
    </div>
  );
};
