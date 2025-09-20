import type { RoleT } from "../../../../data/types";

interface MobileAgentInfoProps {
  codeName: string;
  description: string;
  role: RoleT | null;
}

export default function MobileAgentInfo(props: MobileAgentInfoProps) {
  const { codeName, description, role } = props;

  return (
    <div className="w-full flex flex-col">
      <div className="w-dvw bg-red-700/15 px-2 py-3 -ml-5 flex flex-col items-center justify-between gap-2">
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
        <span className="text-base text-center leading-5 text-white font-saira">
          {description}
        </span>
      </div>
    </div>
  );
}
