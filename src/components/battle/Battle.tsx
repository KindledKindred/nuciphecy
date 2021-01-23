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
  hpRegRate: number
  // 回避：ダメージを受けるとその分だけ消費して同じ値だけ軽減。持続しない。
  currentEvade: number
  limitEvade: number
  // シールド：ダメージを受けるとその分だけ消費して同じ値だけ軽減。永続。
  currentShield: number
  maxShield: number
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
