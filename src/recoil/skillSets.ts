import * as Recoil from 'recoil';
import {ISkill, ISkillSets} from 'interface/skill';

const initialSKillSets: ISkillSets = [];

export const skillSets: Recoil.RecoilState<ISkillSets> = Recoil.atom({
  key: 'skillSets',
  default: initialSKillSets,
});
