import ValorantLogo from "../../assets/icons/valorant.svg?react";
import Menu from "./menu";
import DesktopMenuButton from "./menu-button";

interface DesktopNavbarProps {
  onToggle: () => void;
  open: boolean;
}

export default function DesktopNavbar(props: DesktopNavbarProps) {
  const { onToggle, open } = props;

  return (
    <>
      <Menu shown={open} toggleFn={onToggle} />
      <nav className="z-50 fixed top-0 left-0 h-20 w-full px-8 flex flex-row items-center justify-center bg-valorant-black">
        <div className="w-full h-full max-w-5xl flex flex-row items-center justify-between gap-2">
          <ValorantLogo className="w-12 h-12 fill-white" />
          <DesktopMenuButton open={open} onClick={onToggle} />
        </div>
      </nav>
    </>
  );
}
