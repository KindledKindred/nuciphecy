/**
 * @file
 */

import React from 'react';
import styled from 'styled-components';

const SkillSettingModalBase: React.VFC = () => {
  return (
    <div className="SkillSettingModal-base">
      <div className=""></div>
    </div>
  );
};

const StyledComponent = styled(SkillSettingModalBase)``;

export const SkillSettingModal = StyledComponent;
