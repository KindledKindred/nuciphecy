import Recoil from 'recoil'

export type ISkill = {
  type: 'primary' | 'secondary' | 'ultimate'
  potency: number
  evade: number
  shield: number
  coolDown: number
  mpCost: number
  onUse: (potency: number, block: number) => {}
}

export const currentPrimarySkill = Recoil.atom({
  key: 'currentPrimarySkill',
  default: {
    type: 'primary',
    potency: 0,
    evade: 0,
    shield: 0,
    coolDown: 0,
    mpCost: 0,
    onUse: () => {}
  }
})

export const currentSecondarySkill = Recoil.atom({
  key: 'currentSecondarySkill',
  default: {
    type: 'secondary',
    potency: 0,
    evade: 0,
    shield: 0,
    coolDown: 0,
    mpCost: 0,
    onUse: () => {}
  }
})

export const currentUltimateSkill = Recoil.atom({
  key: 'currentUltimateSkill',
  default: {
    type: 'ultimate',
    potency: 0,
    evade: 0,
    shield: 0,
    coolDown: 0,
    mpCost: 0,
    onUse: () => {}
  }
})
