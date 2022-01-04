import { Link } from 'react-router-dom';
import Button from 'components/Button';

import * as S from './styles';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

export default function Card({ icon, title, href }: CardProps) {
  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.Title>{title}</S.Title>
      </S.Content>
      <S.Link to={href}>Setup goal</S.Link>
    </S.Container>
  );
}
