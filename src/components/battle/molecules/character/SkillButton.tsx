import * as React from 'react';
import styled from 'styled-components';
import {ISkill} from 'interface/skill';

export const Skill: React.VFC<ISkill> = ({
  name,
  rarity,
  cost,
  icon,
  attacks,
  evasion,
  description,
  onUse,
}) => {
  const useSkill = () => {
    /** エネミーに攻撃結果を渡す */
    /** 自身のブロック値を増やす */
    /** onUse を発火する */
    onUse();
    /** 相手が行動する */
  };
  return (
    <SkillWrapper onClick={() => useSkill()} rarity={rarity}>
      <Cost>{cost}</Cost>
      <Name>{name}</Name>
      <Icon src={icon.src} alt={icon.alt} />
      <Description>
        {attacks && (
          <p>
            威力
            <AttacksSpan>
              {attacks[0]} x {attacks.length}
            </AttacksSpan>
          </p>
        )}
        {evasion && (
          <p>
            回避<EvasionSpan>{evasion}</EvasionSpan>
          </p>
        )}
        {description && (
          <AdditionalDescription>{description}</AdditionalDescription>
        )}
      </Description>
    </SkillWrapper>
  );
};

const SkillWrapper = styled.div<{rarity: number}>`
  border: 1px solid ${props => getRarityColor(props.rarity)};
`;
const Cost = styled.p``;
const Name = styled.h2``;
const Icon = styled.img``;
const Description = styled.p``;
const AttacksSpan = styled.span``;
const EvasionSpan = styled.span``;
const AdditionalDescription = styled.p``;

const getRarityColor = (rarity: number) => {
  switch (rarity) {
    case 1:
      return 'white';
    case 2:
      return 'blue';
    case 3:
      return 'yellow';
    case 4:
      return 'orange';
    case 5:
      return 'purple';
    case 6:
      return '#00FFFF';
    default:
      return 'white';
  }
};
