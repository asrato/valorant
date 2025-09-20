import { useNavigate } from "react-router";

import Button from "../../shared/button";

interface MobileTitleProps {
  content: string;
  goBack?: { label: string; to: string };
}

export default function MobileTitle(props: MobileTitleProps) {
  const { content, goBack } = props;

  const navigate = useNavigate();

  function handleGoBack() {
    if (goBack) navigate(goBack.to);
    else navigate(-1);
  }

  return (
    <h1 className="flex flex-col items-start gap-2 w-full">
      {goBack && (
        <div className="w-full flex flex-row items-center gap-2">
          <Button
            className="ml-auto text-sm font-saira font-medium px-2 py-0 bg-white from-transparent to-transparent !text-valorant-red whitespace-nowrap"
            label={goBack.label}
            onClick={handleGoBack}
          />
          <div className="w-full flex flex-col gap-0.5">
            <div className="flex-grow bg-white h-0.5" />
            <div className="flex-grow bg-white/75 h-0.5" />
            <div className="flex-grow bg-white/50 h-0.5" />
            <div className="flex-grow bg-white/25 h-0.5" />
          </div>
        </div>
      )}
      <span className="uppercase text-4xl font-bold font-monument tracking-widest text-white whitespace-nowrap">
        {content}
      </span>
    </h1>
  );
}
