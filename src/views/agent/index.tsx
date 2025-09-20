import Responsive from "../../layout/responsive";
import AgentViewDesktop from "./desktop";
import AgentViewMobile from "./mobile";

export default function AgentView() {
  return (
    <Responsive desktop={<AgentViewDesktop />} mobile={<AgentViewMobile />} />
  );
}
