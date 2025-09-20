import DesktopMainLayout from "./desktop";
import MobileMainLayout from "./mobile";
import Responsive from "../responsive";

export default function MainLayout() {
  return (
    <Responsive desktop={<DesktopMainLayout />} mobile={<MobileMainLayout />} />
  );
}
