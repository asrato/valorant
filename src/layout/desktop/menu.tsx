import { Link, useLocation } from "react-router";
import { navbarOptions } from "../../data/navbar-options";

interface MenuProps {
  shown: boolean;
  toggleFn: () => void;
}

export default function Menu(props: MenuProps) {
  const { shown, toggleFn } = props;

  const location = useLocation();

  return (
    <div
      className={`z-40 top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl fixed flex flex-col items-end transition-all duration-500 pointer-events-none ${
        shown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-fit overflow-hidden flex flex-col items-end bg-valorant-black pointer-events-auto">
        {navbarOptions.map((option, index) => (
          <Link
            className={`text-right text-white w-full underline decoration-2 underline-offset-4 px-8 uppercase py-4 font-monument tracking-widest text-base border-b-gray-100/10 ${
              location.pathname === option.link
                ? "decoration-valorant-red"
                : "decoration-transparent"
            } ${
              index === navbarOptions.length - 1 ? "border-b-0" : "border-b"
            }`}
            key={option.name}
            onClick={toggleFn}
            to={option.link}
          >
            {option.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
