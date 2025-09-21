import Responsive from "../../layout/responsive";
import DesktopBuddyView from "./desktop";
import MobileBuddyView from "./mobile";

export default function BuddyView() {
  return (
    <Responsive desktop={<DesktopBuddyView />} mobile={<MobileBuddyView />} />
  );
}
