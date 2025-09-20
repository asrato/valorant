interface MobileAgentBackgroundProps {
  image: string;
}

export default function MobileAgentBackground({
  image,
}: MobileAgentBackgroundProps) {
  return (
    <div className="w-full h-full absolute top-0 left-0 opacity-25">
      <img src={image} className="w-full h-full object-cover" />
    </div>
  );
}
