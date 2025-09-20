import Spinner from "../../shared/spinner";

interface LoadingProps {
  className?: string;
  text?: string;
}

export default function MobileLoading(props: LoadingProps) {
  const { className, text } = props;

  return (
    <div
      className={`w-full h-[calc(100dvh-124px)] flex items-center justify-center flex-col gap-4 py-8 px-5 pb-navbar-space ${className}`}
    >
      <Spinner />
      {text && (
        <span className="text-white text-md font-monument text-center tracking-wider uppercase">
          {text}
        </span>
      )}
    </div>
  );
}
