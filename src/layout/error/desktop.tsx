import ErrorWarningIcon from "../../assets/icons/error-warning-fill.svg?react";

interface ErrorProps {
  className?: string;
  text?: string;
}

export default function DesktopError(props: ErrorProps) {
  const { className, text } = props;
  return (
    <div
      className={`w-full h-[calc(100dvh-176px)] flex items-center justify-center flex-col gap-4 ${className}`}
    >
      <ErrorWarningIcon className="w-12 h-12 fill-white" />
      {text && (
        <span className="text-white text-md font-monument text-center tracking-wider uppercase">
          {text}
        </span>
      )}
    </div>
  );
}
