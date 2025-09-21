import Responsive from "../../../../layout/responsive";
import DesktopAgentLink from "./desktop";
import MobileAgentLink from "./mobile";

interface BuddyLinkProps {
  image: string;
  label: string;
  url: string;
}

export default function BuddyLink(props: BuddyLinkProps) {
  const { image, label, url } = props;
  return (
    <Responsive
      desktop={<DesktopAgentLink image={image} label={label} url={url} />}
      mobile={<MobileAgentLink image={image} label={label} url={url} />}
    />
  );
}
