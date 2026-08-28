import { VideoDescription } from "./components/VideoDescription";
import { VideoEmbed } from "./components/VideoEmbed";

export type VideoSectionProps = {
  sectionVariantClassName: string;
  description: string;
  descriptionVariantClassName: string;
  embedContainerVariant: string;
  embedSrc: string;
  contentOrder: string;
};

export const VideoSection = (props: VideoSectionProps) => {
  const descriptionElement = (
    <VideoDescription
      description={props.description}
      variantClassName={props.descriptionVariantClassName}
    />
  );

  const embedElement = (
    <VideoEmbed
      containerVariant={props.embedContainerVariant}
      src={props.embedSrc}
    />
  );

  return (
    <section
      className={`self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0 ${props.sectionVariantClassName}`}
    >
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          {props.contentOrder === "embedFirst"
            ? embedElement
            : descriptionElement}
          {props.contentOrder === "embedFirst"
            ? descriptionElement
            : embedElement}
        </div>
      </div>
    </section>
  );
};
