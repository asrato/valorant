import Responsive from "../../layout/responsive";
import DesktopBuddiesView from "./desktop";
import MobileBuddiesView from "./mobile";

export default function BuddiesView() {
  return (
    <Responsive
      desktop={<DesktopBuddiesView />}
      mobile={<MobileBuddiesView />}
    />
  );
}
