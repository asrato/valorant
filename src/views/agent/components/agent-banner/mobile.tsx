export default function MobileAgentBanner() {
  return (
    <div className="w-dvw -left-5 top-28 h-40 bg-valorant-black overflow-hidden absolute">
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
