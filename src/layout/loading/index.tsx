import Responsive from "../responsive";
import DesktopLoading from "./desktop";
import MobileLoading from "./mobile";

interface LoadingLayoutProps {
  className?: string;
  text?: string;
}

export default function LoadingLayout(props: LoadingLayoutProps) {
  return (
    <Responsive
      desktop={<DesktopLoading {...props} />}
      mobile={<MobileLoading {...props} />}
    />
  );
}
