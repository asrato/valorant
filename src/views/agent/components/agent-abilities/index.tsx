import type { AbilityT } from "../../../../data/types";
import Responsive from "../../../../layout/responsive";
import DesktopAgentAbilities from "./desktop";
import MobileAgentAbilities from "./mobile";

interface AgentAbilitiesProps {
  abilities: AbilityT[];
}

export default function AgentAbilities(props: AgentAbilitiesProps) {
  return (
    <Responsive
      desktop={<DesktopAgentAbilities {...props} />}
      mobile={<MobileAgentAbilities {...props} />}
    />
  );
}
