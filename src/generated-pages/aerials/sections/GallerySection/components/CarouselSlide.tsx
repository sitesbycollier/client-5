export type CarouselSlideProps = {
  slideClassName: string;
  imageUrl: string;
};

export const CarouselSlide = (props: CarouselSlideProps) => {
  return (
    <div
      className={`bg-[position:0px_0px] box-border caret-transparent text-[11px] h-[452px] outline-[3px] absolute no-underline text-nowrap align-top w-[872px] overflow-hidden top-0 font-helveticaneuew01_45ligh ${props.slideClassName}`}
    >
      <div
        aria-label="image"
        role="button"
        className="bg-[position:0px_0px] caret-transparent h-px pointer-events-none absolute no-underline text-nowrap w-px z-[-1] overflow-hidden"
      ></div>
      <div className="bg-[position:0px_0px] caret-transparent no-underline text-nowrap">
        <div className="bg-[position:0px_0px] caret-transparent h-[452px] relative no-underline text-nowrap w-[872px] overflow-hidden">
          <div className="bg-center bg-no-repeat bg-cover caret-transparent h-[452px] object-cover absolute no-underline text-nowrap w-[872px] overflow-hidden left-0 top-0">
            <picture className="caret-transparent outline-[3px] no-underline text-nowrap">
              <img
                src={props.imageUrl}
                alt=""
                className="bg-center bg-no-repeat bg-cover caret-transparent h-[452px] object-cover absolute no-underline text-nowrap align-baseline w-[872px] overflow-hidden left-0 top-0"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
