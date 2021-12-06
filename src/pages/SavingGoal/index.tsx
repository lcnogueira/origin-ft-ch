import { useCallback, useMemo, useState } from 'react';
import Layout from 'components/Layout';
import HouseIcon from 'assets/icons/HouseIcon';
import Button from 'components/Button';
import MoneyInput from 'components/MoneyInput';
import DateInput from 'components/DateInput';
import { addAMonth, getMonthYearDescription } from 'lib/date';
import { formatCurrency } from 'lib/currency';
import { calculateDeposits, getMonthlyDepositsDescription } from './utils';
import * as S from './styles';

export default function SavingGoal() {
  const [moneyInCents, setMoneyInCents] = useState(250000);
  const [reachDate, setReachDate] = useState(addAMonth(new Date()));

  const handleMoneyChange = useCallback((value) => {
    setMoneyInCents(value);
  }, []);

  const handleTargetDateChange = useCallback((value) => {
    setReachDate(value);
  }, []);

  const { monthsAmount, monthlyDeposit } = useMemo(
    () => calculateDeposits(moneyInCents, reachDate),
    [moneyInCents, reachDate]
  );

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
              initialValue={moneyInCents}
            />
            <DateInput
              label="Reach goal by"
              onDateChange={handleTargetDateChange}
              initialValue={reachDate}
            />
          </S.InputsContainer>
          <S.AmountContainer>
            <S.AmountTitle>Monthly amount</S.AmountTitle>
            <S.AmountValue data-testid="monthly-deposit">
              {formatCurrency(monthlyDeposit)}
            </S.AmountValue>
          </S.AmountContainer>
          <S.ResultMessage data-testid="result-message">
            You’re planning{' '}
            <strong>{getMonthlyDepositsDescription(monthsAmount)}</strong> to
            reach your <strong>{formatCurrency(moneyInCents)}</strong> goal by{' '}
            <strong>{getMonthYearDescription(reachDate)}</strong>.
          </S.ResultMessage>
          <Button type="submit">Confirm</Button>
        </S.Card>
      </S.Content>
    </Layout>
  );
}
