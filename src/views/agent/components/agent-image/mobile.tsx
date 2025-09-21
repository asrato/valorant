import Image from "../../../../shared/image";

interface MobileAgentImageProps {
  image: string;
}

export default function MobileAgentImage(props: MobileAgentImageProps) {
  const { image } = props;

  return (
    <div className="w-dvw -left-5 h-full absolute top-0">
      <Image
        containerClassName="w-full h-full"
        className="w-full h-full object-center object-cover"
        src={image}
      />
      <div className="absolute w-full h-24 left-0 bottom-0 bg-gradient-to-b from-transparent to-valorant-red" />
    </div>
  );
}
