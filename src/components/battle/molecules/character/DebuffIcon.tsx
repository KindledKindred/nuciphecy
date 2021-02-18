import * as React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {useToggle} from 'react-use';
import {characterCurrentDebuff} from 'recoil/status';
import {Modal} from 'components/common/modal';

export const EvasionIcon: React.VFC = () => {
  const currentDebuff = useRecoilValue(characterCurrentDebuff);
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <Wrapper onClick={toggleOpen}>
      <Icon src={currentDebuff.icon.src} alt={currentDebuff.icon.alt} />
      <Turn>{currentDebuff.remainedTurn}</Turn>
      <Modal
        name={currentDebuff.name}
        description={currentDebuff.description}
        icon={currentDebuff.icon}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Icon = styled.img``;
const Turn = styled.p``;
