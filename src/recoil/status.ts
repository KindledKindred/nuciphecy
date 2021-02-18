import * as Recoil from 'recoil';
import {IStatus} from 'interface/status';
import {IBuff} from 'interface/buff';
import {IDebuff} from 'interface/debuff';

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
export const characterCurrentHp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'characterCurrentHp',
  default: 10,
});

export const characterCurrentMp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'characterCurrentMp',
  default: 2,
});

export const characterCurrentEvasion: Recoil.RecoilState<number> = Recoil.atom({
  key: 'characterCurrentEvasion',
  default: 0,
});

export const characterCurrentBuff: Recoil.RecoilState<IBuff> = Recoil.atom({
  key: 'characterCurrentBuff',
  default: {
    name: '',
    remainedTurn: 0,
    icon: {
      src: '',
      alt: '',
    },
    description: '',
  },
});

export const characterCurrentDebuff: Recoil.RecoilState<IDebuff> = Recoil.atom({
  key: 'characterCurrentDebuff',
  default: {
    name: '',
    remainedTurn: 0,
    icon: {
      src: '',
      alt: '',
    },
    description: '',
  },
});

export const enemyCurrentHp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'enemyCurrentHp',
  default: 30,
});

export const enemyCurrentMp: Recoil.RecoilState<number> = Recoil.atom({
  key: 'enemyCurrentMp',
  default: 2,
});

export const enemyCurrentEvasion: Recoil.RecoilState<number> = Recoil.atom({
  key: 'enemyCurrentEvasion',
  default: 0,
});

export const enemyCurrentBuff: Recoil.RecoilState<IBuff> = Recoil.atom({
  key: 'enemyCurrentBuff',
  default: {
    name: '',
    remainedTurn: 0,
    icon: {
      src: '',
      alt: '',
    },
    description: '',
  },
});

export const enemyCurrentDebuff: Recoil.RecoilState<IDebuff> = Recoil.atom({
  key: 'enemyCurrentDebuff',
  default: {
    name: '',
    remainedTurn: 0,
    icon: {
      src: '',
      alt: '',
    },
    description: '',
  },
});
