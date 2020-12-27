import React from 'react'

/**
 * ステータス
 */
export type IStatus = {
  maxHp?: number
  hpRegeneration?: number
  armor?: number
  additionalEvasion?: number // 回避時にこの値だけ加算
  maxShield?: number
  shieldRegeneration?: number
  coolDownReduction?: number // ターン開始時に cd をこの数だけ消化
}

const initStatus = (job: string): IStatus => {
  const calcStatus = (props: IStatus): IStatus => {
    return {
      maxHp: props.maxHp ?? 24,
      hpRegeneration: props.hpRegeneration ?? 0,
      armor: props.armor ?? 0,
      additionalEvasion: props.additionalEvasion ?? 0,
      maxShield: props.maxShield ?? 0,
      shieldRegeneration: props.shieldRegeneration ?? 2,
      coolDownReduction: props.coolDownReduction ?? 1,
    }
  }
  switch (job) {
    case 'Knight':
      return calcStatus({ maxHp: 28, armor: 1 })
    case '':
      return calcStatus({})
    case '':
      return calcStatus({ maxHp: 8, maxShield: 9 })
    default:
      console.error(`invalid job name: ${job}`)
      return calcStatus({})
  }
}

const CurrentHpContext = React.createContext(0)
const CurrentHpProvider = ({}) => {
  const [currentHp, setCurrentHp] = React.useState()
}