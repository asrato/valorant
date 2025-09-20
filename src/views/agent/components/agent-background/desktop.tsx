interface DesktopAgentBackgroundProps {
  image: string;
}

export default function DesktopAgentBackground({
  image,
}: DesktopAgentBackgroundProps) {
  return (
    <div className="absolute opacity-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-portrait">
      <img src={image} className="h-full object-cover" />
    </div>
  );
}
