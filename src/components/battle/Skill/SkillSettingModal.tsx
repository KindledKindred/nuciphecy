/**
 * @file
 */

import React from 'react';
import styled from 'styled-components';

export type ISkillSettingModal = {
  children?: never;
};

const SkillSettingModalBase: React.FC<ISkillSettingModal> = ({}) => {
  return (
    <div className="SkillSettingModal-base">
      <div className=""></div>
    </div>
  );
};

const StyledComponent = styled(SkillSettingModalBase)``;

export const SkillSettingModal = StyledComponent;
