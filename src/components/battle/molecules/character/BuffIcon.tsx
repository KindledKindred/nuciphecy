import * as React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {useToggle} from 'react-use';
import {characterCurrentBuff} from 'recoil/status';
import {Modal} from 'components/common/modal';

export const EvasionIcon: React.VFC = () => {
  const currentBuff = useRecoilValue(characterCurrentBuff);
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <Wrapper onClick={toggleOpen}>
      <Icon src={currentBuff.icon.src} alt={currentBuff.icon.alt} />
      <Turn>{currentBuff.remainedTurn}</Turn>
      <Modal
        name={currentBuff.name}
        description={currentBuff.description}
        icon={currentBuff.icon}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Icon = styled.img``;
const Turn = styled.p``;
