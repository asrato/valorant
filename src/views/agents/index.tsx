import Responsive from "../../layout/responsive";
import AgentsViewDesktop from "./desktop";
import AgentsViewMobile from "./mobile";

export default function AgentsView() {
  return (
    <Responsive desktop={<AgentsViewDesktop />} mobile={<AgentsViewMobile />} />
  );
}
