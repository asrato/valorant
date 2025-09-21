import { useNavigate } from "react-router-dom";
import Button from "../../shared/button";

interface DesktopTitleProps {
  content: string;
  goBack?: { label: string; to: string };
}

export default function DesktopTitle(props: DesktopTitleProps) {
  const { content, goBack } = props;

  const navigate = useNavigate();

  function handleGoBack() {
    if (goBack) navigate(goBack.to);
    else navigate(-1);
  }

  return (
    <h1 className="flex flex-row items-center gap-4 w-full z-10">
      {goBack && (
        <Button
          className="-mt-1 text-md font-saira font-medium px-2 py-0 bg-white from-transparent to-transparent !text-valorant-red whitespace-nowrap"
          label={goBack.label}
          onClick={handleGoBack}
        />
      )}
      <span className="uppercase text-4xl font-bold font-monument text-white tracking-widest whitespace-nowrap">
        {content}
      </span>
    </h1>
  );
}
