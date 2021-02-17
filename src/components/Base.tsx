/**
 * @file
 */

import React from 'react';
import styled from 'styled-components';

export type IFoo = {
  children?: never;
};

const FooBase: React.FC<IFoo> = ({}) => {
  return (
    <div className="foo-base">
      <div className=""></div>
    </div>
  );
};

const StyledComponent = styled(FooBase)``;

export const Foo = StyledComponent;
