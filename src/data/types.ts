export type AbilityT = {
  description: string;
  displayIcon: string | null;
  displayName: string;
  slot: string;
};

export type AgentT = {
  abilities: AbilityT[];
  assetPath: string;
  background: string;
  backgroundGradientColors: string[];
  bustPortrait: string;
  characterTags: string[] | null;
  description: string;
  developerName: string;
  displayIcon: string;
  displayIconSmall: string;
  displayName: string;
  fullPortrait: string;
  fullPortraitV2: string;
  homeScreenPromoTileImage: string | null;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  killfeedPortrait: string;
  minimapPortrait: string;
  recruitmentData: unknown;
  releaseDate: string;
  role: RoleT | null;
  uuid: string;
  voiceLine: unknown;
};

export type RoleT = {
  assetPath: string;
  description: string;
  displayIcon: string;
  displayName: string;
  uuid: string;
};
