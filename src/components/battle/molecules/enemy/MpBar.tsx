import * as React from 'react';
import {useRecoilValue} from 'recoil';
import {enemyStatus, enemyCurrentMp} from 'recoil/status';
import styled from 'styled-components';
import {BAR_WIDTH, COLOR} from 'assets/styles/variables';

const StyledMpBar = styled.div<{hpRate: number}>`
  width: ${BAR_WIDTH}px;
  height: 18px;
  background: linear-gradient(
    90deg,
    ${COLOR.MP} 0%,
    ${COLOR.MP} ${props => props.hpRate}%,
    ${COLOR.MP_EMPTY} ${props => props.hpRate}%,
    ${COLOR.MP_EMPTY} 100%
  );
`;

export const MpBar: React.VFC = () => {
  const currentMp = useRecoilValue(enemyCurrentMp);
  const maxMp = useRecoilValue(enemyStatus).maxMp;
  const hpRate = (100 * currentMp) / maxMp;

  return (
    <StyledMpBar hpRate={hpRate}>
      {currentMp} / {maxMp}
    </StyledMpBar>
  );
};
