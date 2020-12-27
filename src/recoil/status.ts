import Recoil from 'recoil'

/**
 * base status
 */
export const characterStatus = Recoil.atom({
  key: 'characterStatus',
  default: {
    maxHp: 24,
    hpRegeneration: 0,
    additionalEvasion: 0,
    maxShield: 0,
    shieldRegeneration: 2,
    /** skill resource */
    coolDownReduction: 1,
    mpRegeneration: 2
  }
})

export const enemyStatus = Recoil.atom({
  key: 'enemyStatus',
  default: {
    maxHp: 24,
    hpRegeneration: 0,
    additionalEvasion: 0,
    maxShield: 0,
    shieldRegeneration: 2
  }
})

/**
 * current status
 */
export const characterHp = Recoil.atom({
  key: 'characterHp',
  default: 10
})

export const characterMp = Recoil.atom({
  key: 'characterMp',
  default: 0
})

export const enemyHp = Recoil.atom({
  key: 'enemyHp',
  default: 0
})
