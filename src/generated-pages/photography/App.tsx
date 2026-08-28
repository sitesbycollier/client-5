import { PageShell } from "./components/layout/PageShell";

export const App = () => {
  return (
    <body className="accent-auto bg-[position:0px_0px] caret-transparent text-black block text-[10px] not-italic normal-nums font-normal h-full tracking-[normal] leading-[normal] list-outside list-disc overflow-x-auto overflow-y-scroll pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-arial">
      <div className="caret-transparent hidden text-[11px] leading-[11px] text-left no-underline font-lucida_grande">
        <div className="bg-[position:0px_0px] caret-transparent h-0 absolute no-underline top-[-10000px] w-0 overflow-hidden">
          <div className="bg-[position:0px_0px] caret-transparent no-underline"></div>
        </div>
      </div>
      <img
        src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/icon-1-3.svg"
        alt="Icon"
        className="caret-transparent hidden outline-[3px] no-underline align-baseline"
      />
      <PageShell />
    </body>
  );
};
