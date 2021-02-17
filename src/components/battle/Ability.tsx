/**
 * @file
 */

import React from 'react';
import styled from 'styled-components';

export type IAbility = {
  children?: never;
};

const AbilityBase: React.FC<IAbility> = ({}) => {
  return (
    <div className="Ability-base">
      <div className=""></div>
    </div>
  );
};

const StyledComponent = styled(AbilityBase)``;

export const Ability = StyledComponent;
