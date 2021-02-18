import {IIcon} from './icon';

export type ISkill = {
  id: number;
  name: string;
  rarity: number;
  cost: number;
  icon: IIcon;
  attacks?: number[];
  evasion?: number;
  description?: string;
  onUse: Function;
};

export type IUltimateSKill = ISkill & {type: 'ultimate'};

export type ISkillSets = [IUltimateSKill?, ISkill?, ISkill?, ISkill?, ISkill?];
