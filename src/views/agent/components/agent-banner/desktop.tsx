export default function DesktopAgentBanner() {
  const afterClasses =
    "after:bg-valorant-red after:absolute after:w-8 after:h-8 after:border-transparent after:border-l after:-bottom-4 after:-right-4 after:rotate-45";
  const beforeClasses =
    "before:bg-valorant-red before:absolute before:w-8 before:h-8 before:border-transparent before:border-r before:-top-4 before:-left-4 before:rotate-45";

  return (
    <div
      className={`overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-portrait bg-valorant-black ${afterClasses} ${beforeClasses}`}
    >
      <div className="aspect-square h-36 border-[1px] border-valorant-red rounded-full flex items-center justify-center absolute -left-20 -top-10">
        <div className="aspect-square h-4/5 border-[1px] border-valorant-red rounded-full" />
      </div>
      <div className="aspect-square h-20 border-[1px] border-valorant-red rounded-full flex items-center justify-center absolute -right-10 -bottom-10">
        <div className="aspect-square h-11/12 border-[1px] border-valorant-red rounded-full" />
      </div>
      <div className="w-24 h-1 rounded absolute bottom-0 left-14 rotate-45 bg-valorant-red" />
      <div className="w-24 h-1 rounded absolute top 3-0 right-12 rotate-45 bg-valorant-red" />
    </div>
  );
}
