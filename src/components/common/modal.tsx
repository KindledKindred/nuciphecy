import * as React from 'react';
import styled from 'styled-components';
import {useClickAway} from 'react-use';
import {IIcon} from 'interface/icon';
import ReactModal from 'react-modal';

export interface IModalProps {
  name: string;
  icon: IIcon;
  description: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

ReactModal.setAppElement('"root');

export const Modal: React.VFC<IModalProps> = ({
  name,
  icon,
  description,
  isOpen,
  toggleOpen,
}) => {
  const refModal = React.useRef(null);
  useClickAway(refModal, () => toggleOpen);

  return (
    <ReactModal isOpen={isOpen}>
      <Wrapper ref={refModal}>
        <Name>{name}</Name>
        <Icon src={icon.src} alt={icon.alt} />
        <Description>{description}</Description>
        <Button onClick={toggleOpen}>閉じる</Button>
      </Wrapper>
    </ReactModal>
  );
};

const Wrapper = styled.div``;
const Name = styled.p``;
const Icon = styled.img``;
const Description = styled.p``;
const Button = styled.button``;
