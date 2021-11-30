import Layout from 'components/Layout';
import HouseIcon from 'assets/icons/HouseIcon';
import * as S from './styles';
import Button from 'components/Button';

export default function SavingGoal() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //This is just a placecholder function
  };

  return (
    <Layout>
      <S.Content>
        <S.Message>
          Let&apos;s plan your <strong>saving goal</strong>
        </S.Message>
        <S.Card onSubmit={handleSubmit}>
          <S.HeaderContainer>
            <S.IconWrapper>
              <HouseIcon />
            </S.IconWrapper>
            <div>
              <S.Title>Buy a house</S.Title>
              <S.SubTitle>Saving goal</S.SubTitle>
            </div>
          </S.HeaderContainer>
          <S.InputsContainer>
            <div>
              <S.Label>Total amount</S.Label>
              <div>$25,000</div>
            </div>
            <div>
              <S.Label>Reach goal by</S.Label>
              <div>25,000</div>
            </div>
          </S.InputsContainer>
          <S.AmountContainer>
            <S.AmountTitle>Monthly amount</S.AmountTitle>
            <S.AmountValue>$520.83</S.AmountValue>
          </S.AmountContainer>
          <S.ResultMessage>
            You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
            <strong>$25,000</strong> goal by <strong>October 2020</strong>.
          </S.ResultMessage>
          <Button type="submit">Confirm</Button>
        </S.Card>
      </S.Content>
    </Layout>
  );
}
