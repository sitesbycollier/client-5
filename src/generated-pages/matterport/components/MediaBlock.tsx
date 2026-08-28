export type MediaBlockProps = {
  rootVariant: string;
  contentVariant?: string;
  sizes: string;
  src: string;
  alt: string;
  imageVariant: string;
};

export const MediaBlock = (props: MediaBlockProps) => {
  return (
    <div
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline ${props.rootVariant}`}
    >
      <div
        className={`bg-[position:0px_0px] box-border caret-transparent h-full no-underline w-full overflow-hidden ${props.contentVariant ?? ""}`}
      >
        <img
          sizes={props.sizes}
          src={props.src}
          alt={props.alt}
          className={`bg-[position:0px_0px] caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden ${props.imageVariant}`}
        />
      </div>
    </div>
  );
};
