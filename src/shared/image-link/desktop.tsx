import { Link } from "react-router-dom";

import Image from "../image";

interface DesktopImageLinkProps {
  image: string;
  label: string;
  url: string;
}

export default function DesktopImageLink(props: DesktopImageLinkProps) {
  const { image, label, url } = props;

  const afterClasses =
    "after:bg-valorant-red after:absolute after:w-4 after:h-4 after:-bottom-[9px] after:-right-[9px] after:rotate-45 after:border-l-white after:border-l-2";
  const beforeClasses =
    "before:bg-valorant-red before:absolute before:w-4 before:h-4 before:-top-[9px] before:-left-[9px] before:rotate-45 before:border-r-white before:border-r-2";

  return (
    <Link to={url} className="w-full flex flex-col gap-1.5">
      <div
        className={`z-10 w-full relative border-2 bg-valorant-black border-white bg-gradient-to-t from-black/50 via-transparent to-transparent ${beforeClasses} ${afterClasses}`}
      >
        <Image
          className="w-full h-24 object-cover"
          containerClassName="w-full h-full"
          src={image}
        />
      </div>
      <div className="uppercase text-center text-xs font-extralight font-monument tracking-wider text-white">
        {label}
      </div>
    </Link>
  );
}
