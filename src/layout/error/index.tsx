import Responsive from "../responsive";
import DesktopError from "./desktop";
import MobileError from "./mobile";

interface ErrorLayoutProps {
  className?: string;
  text?: string;
}

export default function ErrorLayout(props: ErrorLayoutProps) {
  return (
    <Responsive
      desktop={<DesktopError {...props} />}
      mobile={<MobileError {...props} />}
    />
  );
}
