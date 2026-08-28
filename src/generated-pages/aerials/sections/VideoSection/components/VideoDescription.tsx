export type VideoDescriptionProps = {
  description: string;
  variantClassName: string;
};

export const VideoDescription = (props: VideoDescriptionProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[310px] mb-2.5 ${props.variantClassName}`}
    >
      <p className="bg-[position:0px_0px] caret-transparent text-gray-800 text-xl break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
        <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
          {props.description}
        </span>
      </p>
    </div>
  );
};
