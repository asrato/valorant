import Responsive from "../../../../layout/responsive";
import DesktopAgentBackground from "./desktop";
import MobileAgentBackground from "./mobile";

interface AgentBackgroundProps {
  image: string;
}

export default function AgentBackground(props: AgentBackgroundProps) {
  return (
    <Responsive
      desktop={<DesktopAgentBackground {...props} />}
      mobile={<MobileAgentBackground {...props} />}
    />
  );
}
