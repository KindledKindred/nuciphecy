/**
 * @file 各種ステータスをコンテキストに登録，実際の処理は子コンポーネントで行う
 */

import React from 'react'
import styled from 'styled-components'
import { Enemy } from './Enemy'
import { Skill } from './Skill/Skill'
import { Ability } from './Ability'

export type IBattle = {
  children?: never
  class: string
}

export type IStatus = {
  character: {
    hp: number
    maxHp: number
    hpRegRate: number
    mp: number
    maxMp: number
    manaRegRate: number
    ward: number
    maxWard: number
    wardRegRate: number
    criticalRate: number
    criticalRatio: number
    blockRate: number
    blockRatio: number
    evadeRate: number
    evadeRatio: number
  },
  enemy: {
    hp: number
    maxHp: number
    hpRegRate: number
    mp: number
    maxMp: number
    manaRegRate: number
    ward: number
    maxWard: number
    wardRegRate: number
    criticalRate: number
    criticalRatio: number
    blockRate: number
    blockRatio: number
    evadeRate: number
    evadeRatio: number
  }
}

export type IStatusAction = {
  type: string,
  payload: IStatus
}

const BattleBase: React.FC<IBattle> = ({}) => {
  /**
   * ステータスのコンテキスト登録
   */
  const StatusContext = React.createContext({})
  const initialStatus = {
    character: {
      hp: 50,
      maxHp: 50,
      hpRegRate: 2,
      mp: 4,
      maxMp: 4,
      manaRegRate: 20,
      ward: 0,
      maxWard: 0,
      wardRegRate: 20,
      criticalRate: 14,
      criticalRatio: 130,
      blockRate: 0,
      blockRatio: 75,
      evadeRate: 0,
      evadeRatio: 75,
    },
    enemy: {
      hp: 50,
      maxHp: 50,
      hpRegRate: 2,
      mp: 4,
      maxMp: 4,
      manaRegRate: 20,
      ward: 0,
      maxWard: 0,
      wardRegRate: 20,
      criticalRate: 0,
      criticalRatio: 130,
      blockRate: 0,
      blockRatio: 75,
      evadeRate: 0,
      evadeRatio: 75,
    },
  }
  const reducer = (status: IStatus, action: IStatusAction): IStatus => {
    switch (action.type) {
      case 'UPDATE':
        return action.payload
      default:
        return status
    }
  } 
  const [status, dispatch] = React.useReducer(reducer, initialStatus)

  return (
    <StatusContext.Provider value={{status, dispatch}}>
      <div className='Battle-base'>
        <Enemy />
        <Skill />
        <Ability />
      </div>
    </StatusContext.Provider>
  )
}

const StyledComponent = styled(BattleBase)`
`

export const Battle = StyledComponent
