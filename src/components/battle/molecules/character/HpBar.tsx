import * as React from 'react';
import {useRecoilValue} from 'recoil';
import {characterStatus, characterCurrentHp} from 'recoil/status';
import styled from 'styled-components';
import {BAR_WIDTH, COLOR} from 'assets/styles/variables';

const StyledHpBar = styled.div<{hpRate: number}>`
  width: ${BAR_WIDTH}px;
  height: 18px;
  background: linear-gradient(
    90deg,
    ${COLOR.HP} 0%,
    ${COLOR.HP} ${props => props.hpRate}%,
    ${COLOR.HP_EMPTY} ${props => props.hpRate}%,
    ${COLOR.HP_EMPTY} 100%
  );
`;

export const HpBar: React.VFC = () => {
  const currentHp = useRecoilValue(characterCurrentHp);
  const maxHp = useRecoilValue(characterStatus).maxHp;
  const hpRate = (100 * currentHp) / maxHp;

  return (
    <StyledHpBar hpRate={hpRate}>
      {currentHp} / {maxHp}
    </StyledHpBar>
  );
};
