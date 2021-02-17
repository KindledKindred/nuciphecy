import * as Recoil from 'recoil';

export type IRelic = {
  trigger:
    | 'onAttack'
    | 'onAttacked'
    | 'onEvade'
    | 'onCalcCycleStart'
    | 'onAftershock';
  potency: number;
  evade: number;
  shield: number;
  coolDown: number;
  mpCost: number;
  onUse: (potency: number, block: number) => {};
};

export const currentPrimarySkill = Recoil.atom({
  key: 'currentPrimarySkill',
  default: {},
});
