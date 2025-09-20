interface SpinnerProps {
  className?: string;
}

export default function Spinner(props: SpinnerProps) {
  const { className } = props;

  return (
    <div className="flex items-center justify-center">
      <div className={`relative w-8 h-8 ${className}`}>
        <div className="absolute inset-0 rounded-full border-4 border-t-white border-b-white border-l-white border-r-white/25 animate-spin"></div>
      </div>
    </div>
  );
}
