import Spinner from "../../shared/spinner";

interface LoadingProps {
  className?: string;
  text?: string;
}

export default function DesktopLoading(props: LoadingProps) {
  const { className, text } = props;
  return (
    <div
      className={`w-full h-[calc(100dvh-176px)] flex items-center justify-center flex-col gap-4 ${className}`}
    >
      <Spinner className="w-12 h-12" />
      {text && (
        <span className="text-white text-md font-monument text-center tracking-wider uppercase">
          {text}
        </span>
      )}
    </div>
  );
}
