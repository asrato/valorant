import Image from "../../../../shared/image";

interface DesktopAgentImageProps {
  image: string;
}

export default function DesktopAgentImage(props: DesktopAgentImageProps) {
  const { image } = props;

  return (
    <div className="h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image containerClassName="w-full h-full" src={image} />
    </div>
  );
}
