import { abilitiesBySlot, abilityTypeBySlot } from "../../../../data/abilities";
import type { AbilityT } from "../../../../data/types";

interface DesktopAgentAbilitiesProps {
  abilities: AbilityT[];
}

export default function DesktopAgentAbilities(
  props: DesktopAgentAbilitiesProps
) {
  const { abilities } = props;

  return (
    <div className="w-full flex flex-col">
      {abilities
        .sort((a, b) => a.slot.localeCompare(b.slot))
        .map((ability, index) => (
          <div className="w-full flex flex-row " key={index}>
            <div className="relative bg-valorant-black bg-gradient-to-t from-black/50 via-transparent to-transparent w-24 h-24 p-5 flex items-center justify-center border-l-2 border-b-2 border-t-2 border-white">
              {ability.displayIcon ? (
                <img
                  className="w-full h-full object-contain"
                  src={ability.displayIcon}
                />
              ) : (
                <div className="w-full h-full text-white text-lg mt-2 flex items-center justify-center font-monument">
                  -
                </div>
              )}
              <div className="flex items-center justify-center text-xs font-monument absolute bottom-0 right-0 w-6 h-6 bg-white text-valorant-black pl-0.5 pt-0.5">
                {abilitiesBySlot[ability.slot as keyof typeof abilitiesBySlot]}
              </div>
            </div>
            <div
              className={`w-[calc(100%-80px)] bg-valorant-black bg-gradient-to-t from-black/50 via-transparent to-transparent p-2 border-white border-t-2 border-r-2 border-l-2 ${
                index === abilities.length - 1 ? "border-b-2" : ""
              }`}
            >
              <div className="w-fit flex flex-row items-center gap-2">
                <span className="py-0 px-2 -mt-1 border border-valorant-red bg-valorant-red/10 w-fit rounded-md text-valorant-red text-xs font-saira">
                  {
                    abilityTypeBySlot[
                      ability.slot as keyof typeof abilityTypeBySlot
                    ]
                  }
                </span>
                <span className="text-base font-monument tracking-wider text-white">
                  {ability.displayName}
                </span>
              </div>
              <div className="text-sm font-saira text-white">
                {ability.description}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
