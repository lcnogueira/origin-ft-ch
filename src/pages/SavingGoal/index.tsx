import { useCallback, useState } from 'react';
import Layout from 'components/Layout';
import HouseIcon from 'assets/icons/HouseIcon';
import Button from 'components/Button';
import MoneyInput from 'components/MoneyInput';
import DateInput from 'components/DateInput';
import { addAMonth } from 'lib/date';

import * as S from './styles';

export default function SavingGoal() {
  const [money, setMoney] = useState(25000);
  const [reachDate, setReachDate] = useState(addAMonth(new Date()));

  const handleMoneyChange = useCallback((value) => {
    setMoney(value);
  }, []);

  const handleTargetDateChange = useCallback((value) => {
    setReachDate(value);
  }, []);

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
            <MoneyInput
              label="Total amount"
              name="money"
              onInputChange={handleMoneyChange}
              placeholder="0.00"
              initialValue={money}
            />
            <DateInput
              label="Reach goal by"
              onDateChange={handleTargetDateChange}
              initialValue={reachDate}
            />
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
