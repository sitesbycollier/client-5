import { VideoPlayer } from "./components/VideoPlayer";

export const VideoSection = () => {
  return (
    <section className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start min-h-[auto] min-w-[980px] pointer-events-auto relative no-underline w-full left-0">
      <div className="bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%] absolute no-underline w-full overflow-hidden left-0 top-0">
        <div className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline w-full top-0"></div>
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline"></div>
      </div>
      <div className="bg-[position:0px_0px] caret-transparent pointer-events-none relative no-underline w-full">
        <div className="bg-[position:0px_0px] caret-transparent grid grid-cols-[100%] grid-rows-[1fr] no-underline w-full">
          <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] break-words relative no-underline w-[310px] mt-[269px] mb-9 left-[295px]">
            <h6 className="bg-[position:0px_0px] caret-transparent text-gray-800 text-[21px] break-words pointer-events-auto text-center no-underline font-avenir_lt_w01_85_heavy1475544">
              <span className="bg-[position:0px_0px] caret-transparent break-words no-underline">
                Panoramic Aerial of Business
              </span>
            </h6>
          </div>
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};
