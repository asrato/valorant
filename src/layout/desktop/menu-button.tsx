interface DesktopMenuButtonProps {
  onClick: () => void;
  open: boolean;
}

export default function DesktopMenuButton(props: DesktopMenuButtonProps) {
  const { onClick, open } = props;

  return (
    <button
      className="cursor-pointer w-8 h-8 bg-white rounded-full flex items-center justify-center relative"
      onClick={onClick}
    >
      <span
        className={`transition-all duration-500 w-4 h-0.5 bg-valorant-black block left-1/2 -translate-x-1/2 absolute ${
          open ? "rotate-45 top-1/2 -translate-y-1/2" : "rotate-0 top-[10px]"
        }`}
      />
      <span
        className={`transition-all duration-500 w-4 h-0.5 bg-valorant-black block left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`transition-all duration-500 w-4 h-0.5 bg-valorant-black block left-1/2 -translate-x-1/2 absolute ${
          open
            ? "-rotate-45 bottom-1/2 translate-y-1/2"
            : "rotate-0 bottom-[10px]"
        }`}
      />
    </button>
  );
}
