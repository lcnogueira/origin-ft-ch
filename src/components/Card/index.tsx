import Button from 'components/Button';

import * as S from './styles';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

export default function Card({ icon, title, href }: CardProps) {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.Title>{title}</S.Title>
      </S.Content>
      <Button as="a" onClick={handleClick} href={href}>
        Setup Goal
      </Button>
    </S.Container>
  );
}
