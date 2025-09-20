interface MobileAgentImageProps {
  image: string;
}

export default function MobileAgentImage(props: MobileAgentImageProps) {
  const { image } = props;

  return (
    <div className="w-dvw -left-5 h-full absolute top-0">
      <img className="object-cover h-full object-center" src={image} />
      <div className="absolute w-full h-24 left-0 bottom-0 bg-gradient-to-b from-transparent to-valorant-red" />
    </div>
  );
}
