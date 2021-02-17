export type ISkill = {
  id: number;
  name: string;
  rarity: number;
  cost: number;
  icon: {
    src: string;
    alt: string;
  };
  attack?: number;
  block?: number;
  description?: string;
  onUse: Function;
};

export type IUltimateSKill = ISkill & {type: 'ultimate'};

export type ISkillSets = [IUltimateSKill?, ISkill?, ISkill?, ISkill?, ISkill?];
