import Recoil from 'recoil'

export type ISkill = {
  children?: never
  name: string
  rarity: number
  cost: number
  icon: {
    src: string
    alt: string
  }
  attack?: number
  block?: number
  description?: string
  consumable?: 'vanished' | 'recycle'
  onUse: () => {}
}


export const skill = Recoil.atom({
  key: 'skill',
  default: {
    name: '',
    rarity: 0,
    cost: 1,
    icon: {
      src: '',
      alt: ''
    },
    onUse: () => {}
  }
})
