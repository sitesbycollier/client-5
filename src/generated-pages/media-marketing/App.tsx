import { HiddenPageAssets } from "./components/HiddenPageAssets";
import { PageShell } from "./components/PageShell";

export const App = () => {
  return (
    <body className="accent-auto bg-[position:0px_0px] caret-transparent text-black block text-[10px] not-italic normal-nums font-normal h-full tracking-[normal] leading-[normal] list-outside list-disc overflow-x-auto overflow-y-scroll pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-arial">
      <HiddenPageAssets variant="container" />
      <HiddenPageAssets variant="icon" />
      <PageShell />
    </body>
  );
};
