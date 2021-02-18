import * as React from 'react';
import {useRecoilValue} from 'recoil';
import {enemyCurrentEvasion} from 'recoil/status';
import styled from 'styled-components';
import {COLOR} from 'assets/styles/variables';

// TODO: アイコン
const StyledEvasionIcon = styled.div`
  color: ${COLOR.EVASION};
`;

export const EvasionIcon: React.VFC = () => {
  const currentEvasion = useRecoilValue(enemyCurrentEvasion);

  return <StyledEvasionIcon>{currentEvasion}</StyledEvasionIcon>;
};
