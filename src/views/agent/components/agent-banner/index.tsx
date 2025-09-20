import Responsive from "../../../../layout/responsive";
import DesktopAgentBanner from "./desktop";
import MobileAgentBanner from "./mobile";

export default function AgentBanner() {
  return (
    <Responsive
      desktop={<DesktopAgentBanner />}
      mobile={<MobileAgentBanner />}
    />
  );
}
