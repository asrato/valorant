import Responsive from "../../../../layout/responsive";
import DesktopBuddyImage from "./desktop";
import MobileBuddyImage from "./mobile";

interface BuddyImageProps {
  image: string;
  label: string;
}

export default function BuddyImage(props: BuddyImageProps) {
  const { image, label } = props;
  return (
    <Responsive
      desktop={<DesktopBuddyImage image={image} label={label} />}
      mobile={<MobileBuddyImage image={image} label={label} />}
    />
  );
}
