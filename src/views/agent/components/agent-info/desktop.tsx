import type { RoleT } from "../../../../data/types";

interface DesktopAgentInfoProps {
  codeName: string;
  description: string;
  role: RoleT | null;
}

export default function DesktopAgentInfo(props: DesktopAgentInfoProps) {
  const { codeName, description, role } = props;

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <div className="w-fit flex flex-row items-center gap-2">
        <span className="text-xl text-center text-white font-monument tracking-wider uppercase">
          {codeName}
        </span>
        {role && (
          <>
            <img src={role.displayIcon} className="w-6 h-6" />
            <span className="text-xl text-center uppercase text-white font-monument tracking-wider">
              {role.displayName}
            </span>
          </>
        )}
      </div>
      <span className="text-base text-left leading-5 text-white font-saira">
        {description}
      </span>
    </div>
  );
}
