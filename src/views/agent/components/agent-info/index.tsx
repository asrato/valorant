import type { RoleT } from "../../../../data/types";
import Responsive from "../../../../layout/responsive";
import DesktopAgentInfo from "./desktop";
import MobileAgentInfo from "./mobile";

interface AgentInfoProps {
  codeName: string;
  description: string;
  role: RoleT | null;
}

export default function AgentInfo(props: AgentInfoProps) {
  return (
    <Responsive
      desktop={<DesktopAgentInfo {...props} />}
      mobile={<MobileAgentInfo {...props} />}
    />
  );
}
