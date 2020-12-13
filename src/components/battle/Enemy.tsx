/**
 * @file
 */

import React from 'react'
import styled from 'styled-components'

export type IEnemy = {
  children?: never
}

const EnemyBase: React.FC<IEnemy> = ({}) => {
  return (
    <div className='Enemy-base'>
      <div className=''></div>
    </div>
  )
} 

const StyledComponent = styled(EnemyBase)`
`

export const Enemy = StyledComponent
