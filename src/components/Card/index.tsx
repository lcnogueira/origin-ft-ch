import Button from 'components/Button';
import HouseIcon from 'assets/icons/HouseIcon';

import * as S from './styles';

export default function Card() {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <HouseIcon />
        </S.IconWrapper>
        <S.Title>Go to college</S.Title>
      </S.Content>
      <Button onClick={handleClick}>Setup Goal</Button>
    </S.Container>
  );
}
