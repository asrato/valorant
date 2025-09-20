import Responsive from "../../layout/responsive";
import DesktopImageLink from "./desktop";
import MobileImageLink from "./mobile";

interface ImageLinkProps {
  image: string;
  label: string;
  url: string;
}

export default function ImageLink(props: ImageLinkProps) {
  const { image, label, url } = props;
  return (
    <Responsive
      desktop={<DesktopImageLink image={image} label={label} url={url} />}
      mobile={<MobileImageLink image={image} label={label} url={url} />}
    />
  );
}
