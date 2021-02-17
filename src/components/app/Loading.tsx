/**
 * @file
 */

import React from 'react';
import styled from 'styled-components';

export type ILoading = {
  children?: never;
};

const LoadingBase: React.FC<ILoading> = ({}) => {
  return (
    <div className="Loading-base">
      <div className=""></div>
    </div>
  );
};

const StyledComponent = styled(LoadingBase)``;

export const Loading = StyledComponent;
