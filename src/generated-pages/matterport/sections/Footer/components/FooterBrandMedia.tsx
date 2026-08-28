export type FooterBrandMediaProps = {
  variant: string;
};

export const FooterBrandMedia = (props: FooterBrandMediaProps) => {
  if (props.variant === "facebook-like") {
    return (
      <div
        title="Facebook Like"
        aria-label="Facebook Like"
        className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline block row-end-2 row-start-1 h-10 min-h-[auto] min-w-[auto] outline-[3px] w-[250px] mt-2.5 mb-[9px] left-0"
      >
        <iframe
          title="Facebook Like"
          aria-label="Facebook Like"
          src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.snapmagicmedia.com&layout=standard&show_faces=false&action=like&colorscheme=light&send=false&locale=en_US"
          className="bg-[position:0px_0px] caret-transparent h-full no-underline align-baseline w-full"
        ></iframe>
      </div>
    );
  }

  if (props.variant === "brand-image") {
    return (
      <div className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline bg-[position:0px_0px] row-end-3 row-start-2 h-[117px] min-h-[auto] min-w-[auto] w-[391px] mb-10 left-0">
        <div className="caret-transparent no-underline bg-[position:0px_0px] box-border h-full w-full overflow-hidden">
          <img
            sizes="391px"
            src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_b94a527054ad49639debda577163b012~mv2.png"
            alt="web-01.png"
            className="aspect-[auto_391_/_117] bg-[position:0px_0px] caret-transparent h-full [mask-position:0px_50%] [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover no-underline align-baseline w-full overflow-hidden"
          />
        </div>
      </div>
    );
  }

  if (props.variant === "embedded-content") {
    return (
      <div className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline bg-[position:0px_0px] row-end-7 row-start-6 h-[89px] min-h-[auto] min-w-[auto] w-[177px] mb-[37px] left-[18px]">
        <div className="caret-transparent no-underline outline-[3px]">
          <div className="bg-[position:0px_0px] caret-transparent h-full no-underline w-full">
            <iframe
              title="Embedded Content"
              name="htmlComp-iframe"
              src="https://www-snapmagicmedia-com.filesusr.com/html/360fdc_f6434878fa136725208a6ae4e8c89dda.html"
              className="bg-[position:0px_0px] caret-transparent h-full absolute no-underline align-baseline w-full"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="self-start caret-transparent col-end-2 col-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto relative no-underline bg-[position:0px_0px] row-end-8 row-start-2 h-[600px] max-h-[2000px] max-w-[500px] min-h-[575px] min-w-[280px] w-[499px] left-[415px] right-0 inset-y-0">
      <div className="caret-transparent no-underline bg-[position:0px_0px] inline-block h-full relative">
        <span className="bg-[position:0px_0px] caret-transparent inline-block h-0 relative text-justify no-underline align-top w-0 overflow-hidden">
          <iframe
            name="f0e005d86c311b8e7"
            title="fb:page Facebook Social Plugin"
            className="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline align-baseline w-0"
          ></iframe>
        </span>
      </div>
    </div>
  );
};
