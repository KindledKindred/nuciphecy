import {IIcon} from './icon';

export type IDebuff = {
  name: string;
  remainedTurn: number;
  icon: IIcon;
  description: string;
};
