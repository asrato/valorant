import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

import { abilitiesBySlot, abilityTypeBySlot } from "../../../../data/abilities";
import type { AbilityT } from "../../../../data/types";

interface MobileAgentAbilitiesProps {
  abilities: AbilityT[];
}

export default function MobileAgentAbilities(props: MobileAgentAbilitiesProps) {
  const { abilities } = props;

  const [selection, setSelection] = useState<number | null>(null);

  function handleSelection(index: number) {
    if (selection === index) setSelection(null);
    else setSelection(index);
  }

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-fit bg-valorant-black border-white border-2 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-row items-center justify-center">
        {abilities
          .sort((a, b) => a.slot.localeCompare(b.slot))
          .map((ability, index) => (
            <Fragment key={index}>
              <div
                className={`w-14 h-14 p-3 flex items-center justify-center relative transition-all duration-500 ${
                  selection === index ? "bg-white/5" : "bg-transparent"
                }`}
                onClick={() => handleSelection(index)}
              >
                {ability.displayIcon ? (
                  <img
                    className="w-full h-full object-cover"
                    src={ability.displayIcon}
                  />
                ) : (
                  <div className="w-full h-full text-white text-lg mt-2 flex items-center justify-center font-monument">
                    -
                  </div>
                )}
                <div className="text-xs font-monument absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-white text-valorant-black flex items-center justify-center">
                  {
                    abilitiesBySlot[
                      ability.slot as keyof typeof abilitiesBySlot
                    ]
                  }
                </div>
              </div>
              {index < abilities.length - 1 && (
                <div className="w-0.5 h-1/2 bg-white" />
              )}
            </Fragment>
          ))}
      </div>
      <div
        className={`w-full border-white bg-valorant-black bg-gradient-to-t from-black/50 via-transparent to-transparent text-white transition-all duration-500 overflow-x-hidden relative flex flex-row items-start ${
          selection !== null ? "max-h-dvw border-2" : "max-h-0 border-0"
        }`}
      >
        {abilities.map((ability, index) => (
          <div
            key={index}
            className={`min-w-full w-full px-4 py-2 transition-opacity duration-500 flex flex-col gap-1 ${
              selection === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } ${
              index !== 0 || selection === 0
                ? ""
                : selection === 1
                ? "-ml-[100%]"
                : selection === 2
                ? "-ml-[200%]"
                : selection === 3
                ? "-ml-[300%]"
                : selection === 4
                ? "-ml-[400%]"
                : ""
            }`}
            aria-hidden={selection !== index}
          >
            <span className="py-0 px-2 border border-valorant-red bg-valorant-red/10 w-fit rounded-md text-valorant-red text-xs font-saira">
              {
                abilityTypeBySlot[
                  ability.slot as keyof typeof abilityTypeBySlot
                ]
              }
            </span>
            <span className="text-xl font-monument tracking-wider">
              {ability.displayName}
            </span>
            <span className="text-xs font-saira">{ability.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
