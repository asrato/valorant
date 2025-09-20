import ValorantLogo from "../../assets/icons/valorant.svg?react";
import MobileMenuButton from "./menu-button";

interface MobileNavbarProps {
  onToggle: () => void;
  open: boolean;
}

export default function MobileNavbar(props: MobileNavbarProps) {
  const { onToggle, open } = props;

  return (
    <nav className="z-50 px-8 py-4 fixed bottom-0 left-0 w-dvw bg-valorant-black flex flex-row justify-between items-center gap-8">
      <ValorantLogo className="w-7 h-7 fill-white" />
      <MobileMenuButton open={open} onClick={onToggle} />
    </nav>
  );
}
