/**
 * @file
 */

import React from 'react'
import styled from 'styled-components'

export type ISkill = {
  children?: never
  isChangeSkillsMode?: boolean
}

const SkillBase: React.FC<ISkill> = ({}) => {
  return (
    <div className='Skill-base'>
      <div className=''></div>
    </div>
  )
}

const StyledComponent = styled(SkillBase)`
`

export const Skill = StyledComponent
