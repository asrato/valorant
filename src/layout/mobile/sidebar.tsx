import { Link, useLocation } from "react-router";
import { navbarOptions } from "../../data/navbar-options";

interface SidebarProps {
  shown: boolean;
  toggleFn: () => void;
}

export default function Sidebar(props: SidebarProps) {
  const { shown, toggleFn } = props;

  const location = useLocation();

  return (
    <div
      className={`z-50 fixed top-0 bg-valorant-black h-[calc(100dvh-60px)] w-4/5 max-w-md transition-all duration-500 flex flex-col items-center justify-start ${
        shown ? "right-0" : "-right-full"
      }`}
    >
      {navbarOptions.map((option) => {
        return (
          <Link
            className={`px-8 uppercase py-4 w-full font-monument tracking-widest text-lg border-b-gray-100/10 border-b-[1px] ${
              location.pathname === option.link
                ? "bg-valorant-red"
                : "bg-transparent text-white"
            }`}
            key={option.name}
            onClick={toggleFn}
            to={option.link}
          >
            {option.name}
          </Link>
        );
      })}
    </div>
  );
}
