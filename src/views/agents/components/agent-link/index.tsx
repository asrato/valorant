import Responsive from "../../../../layout/responsive";
import DesktopAgentLink from "./desktop";
import MobileAgentLink from "./mobile";

interface AgentLinkProps {
  image: string;
  label: string;
  url: string;
}

export default function AgentLink(props: AgentLinkProps) {
  const { image, label, url } = props;
  return (
    <Responsive
      desktop={<DesktopAgentLink image={image} label={label} url={url} />}
      mobile={<MobileAgentLink image={image} label={label} url={url} />}
    />
  );
}
