import React from 'react'
import Recoil from 'recoil'

export const characterStatus = Recoil.atom({
  key: 'characterStatus',
  default: {
    maxHp: 24,
    hpRegeneration: 0,
    armor: 0,
    additionalEvasion: 0,
    maxShield: 0,
    shieldRegeneration: 2,
    coolDownReduction: 1,
  }
})

export const enemyStatus = Recoil.atom({
  key: 'enemyStatus',
  default: {
    maxHp: 24,
    hpRegeneration: 0,
    armor: 0,
    additionalEvasion: 0,
    maxShield: 0,
    shieldRegeneration: 2,
    coolDownReduction: 1,
  }
})
