import ErrorWarningIcon from "../../assets/icons/error-warning-fill.svg?react";

interface ErrorProps {
  className?: string;
  text?: string;
}

export default function MobileError(props: ErrorProps) {
  const { className, text } = props;
  return (
    <div
      className={`w-full h-full flex items-center justify-center flex-col gap-4 py-8 px-5 pb-navbar-space ${className}`}
    >
      <ErrorWarningIcon className="w-8 h-8 fill-white" />
      {text && (
        <span className="text-white text-md font-monument text-center tracking-wider uppercase">
          {text}
        </span>
      )}
    </div>
  );
}
