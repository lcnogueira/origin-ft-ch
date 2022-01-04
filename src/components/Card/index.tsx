import * as S from './styles';
import { getItem } from 'utils/localStorage';
import { useState } from 'react';
import { GoalType } from 'components/Goal';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
  type: GoalType;
};

export default function Card({ icon, title, href, type }: CardProps) {
  const [localGoal] = useState(getItem('@goal', type));

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.Title>{title}</S.Title>
      </S.Content>
      <S.Link to={href}>{localGoal ? 'Edit' : 'Setup goal'}</S.Link>
    </S.Container>
  );
}
