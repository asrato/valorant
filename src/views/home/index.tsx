import Responsive from "../../layout/responsive";
import HomeViewDesktop from "./desktop";
import HomeViewMobile from "./mobile";

export default function HomeView() {
  return (
    <Responsive desktop={<HomeViewDesktop />} mobile={<HomeViewMobile />} />
  );
}
