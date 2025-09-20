import Responsive from "../responsive";
import DesktopTitle from "./desktop";
import MobileTitle from "./mobile";

interface TitleProps {
  content: string;
  goBack?: { label: string; to: string };
}

export default function Title(props: TitleProps) {
  return (
    <Responsive
      desktop={<DesktopTitle {...props} />}
      mobile={<MobileTitle {...props} />}
    />
  );
}
