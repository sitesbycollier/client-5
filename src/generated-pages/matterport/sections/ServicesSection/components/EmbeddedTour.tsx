export const EmbeddedTour = () => {
  return (
    <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-9 row-start-8 h-[450px] justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[545px] left-[33px]">
      <div className="caret-transparent outline-[3px] no-underline">
        <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
          <iframe
            title="Embedded Content"
            name="htmlComp-iframe"
            src="https://my.matterport.com/show/?m=R25KMXyQXXV"
            className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
