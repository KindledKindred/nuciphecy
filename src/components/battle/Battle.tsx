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
  hp: number
  maxHp: number
  // hpRegRate: number 特化すると防御の仕組みが shield に似てしまうので warrior と mage の差別化が困難
  currentArmor: number
  baseArmor: number
  currentEvade: number
  additionalEvade: number
  currentShield: number
  maxShield: number
  // shieldRegeneration: number 防御寄りにしすぎると容易にゲームを壊せる。かといって基礎値が低いと warrior と大差ない。不要かも
}

export type IStatusAction = {
  type: string,
  payload: IStatus
}

const BattleBase: React.FC<IBattle> = ({}) => {

  return (
    <div className='Battle-base'>
      <Enemy />
      <Skill />
      <Ability />
    </div>
  )
}

const StyledComponent = styled(BattleBase)`
`

export const Battle = StyledComponent
