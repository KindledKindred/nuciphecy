/**
 * @file
 */

import React from 'react'
import styled from 'styled-components'

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

export const Skill: React.FC<ISkill> = ({ name, rarity, cost, icon, attack, block, description, consumable, onUse }) => {
  const useSkill = () => {
    /** エネミーに攻撃結果を渡す */
    /** 自身のブロック値を増やす */
    /** onUse を発火する */
  }
  return (
    <SkillWrapper onClick={() => useSkill()}>
      <Cost>{cost}</Cost>
      <Name>{name}</Name>
      <Icon src={icon.src} alt={icon.alt} />
      <Description>
        {attack && <PotencyDescription>{attack}</PotencyDescription>}
        {block && <PotencyDescription>{block}</PotencyDescription>}
        {description && <AdditionalDescription>{description}</AdditionalDescription>}
      </Description>
    </SkillWrapper>
  )
}

const SkillWrapper = styled.div``
const Cost = styled.p``
const Name = styled.h2``
const Icon = styled.img``
const Description = styled.div``
const PotencyDescription = styled.p``
const AdditionalDescription = styled.p``
