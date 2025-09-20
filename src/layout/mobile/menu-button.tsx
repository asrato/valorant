interface MobileMenuButtonProps {
  onClick: () => void;
  open: boolean;
}

export default function MobileMenuButton(props: MobileMenuButtonProps) {
  const { onClick, open } = props;

  return (
    <button
      className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative"
      onClick={onClick}
    >
      <span
        className={`transition-all duration-500 w-3 h-0.5 bg-valorant-black block left-1/2 -translate-x-1/2 absolute ${
          open ? "rotate-45 top-1/2 -translate-y-1/2" : "rotate-0 top-[7px]"
        }`}
      />
      <span
        className={`transition-all duration-500 w-3 h-0.5 bg-valorant-black block left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`transition-all duration-500 w-3 h-0.5 bg-valorant-black block left-1/2 -translate-x-1/2 absolute ${
          open
            ? "-rotate-45 bottom-1/2 translate-y-1/2"
            : "rotate-0 bottom-[7px]"
        }`}
      />
    </button>
  );
}
