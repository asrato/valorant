import Responsive from "../../../../layout/responsive";
import DesktopAgentImage from "./desktop";
import MobileAgentImage from "./mobile";

interface AgentImageProps {
  image: string;
}

export default function AgentImage(props: AgentImageProps) {
  return (
    <Responsive
      desktop={<DesktopAgentImage {...props} />}
      mobile={<MobileAgentImage {...props} />}
    />
  );
}
