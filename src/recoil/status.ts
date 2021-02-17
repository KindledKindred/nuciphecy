import * as Recoil from 'recoil';
import {IStatus} from 'interface/status';

/**
 * base status
 */
export const characterStatus: Recoil.RecoilState<IStatus> = Recoil.atom({
  key: 'characterStatus',
  default: {
    name: '',
    maxHp: 24,
    hpReg: 0,
    maxMp: 3, // ゲーム中最大は6
    mpReg: 0, // ゲーム中最大は3
    evadeReg: 0,
    additionalBuffTurn: 0,
    additionalDebuffTurn: 0,
  },
});

export const enemyStatus: Recoil.RecoilState<IStatus> = Recoil.atom({
  key: 'enemyStatus',
  default: {
    name: '',
    maxHp: 30,
    hpReg: 0,
    maxMp: 6,
    mpReg: 1,
    evadeReg: 0,
    additionalBuffTurn: 0,
    additionalDebuffTurn: 0,
  },
});

/**
 * current status
 */
export const characterHp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'characterHp',
  default: 10,
});

export const characterMp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'characterMp',
  default: 2,
});

export const enemyHp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'enemyHp',
  default: 30,
});
