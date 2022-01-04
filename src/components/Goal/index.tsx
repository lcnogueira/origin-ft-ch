import { useCallback, useMemo, useState } from 'react';
import HouseIcon from 'assets/icons/HouseIcon';
import Button from 'components/Button';
import MoneyInput from 'components/MoneyInput';
import DateInput from 'components/DateInput';
import { addAMonth, getMonthYearDescription } from 'utils/date';
import { formatCurrency } from 'utils/currency';
import * as S from './styles';
import { calculateDeposits, getMonthlyDepositsDescription } from 'lib/deposits';

export const GOALS_LIST = {
  college: {
    title: 'Go to college',
    icon: <HouseIcon />,
  },
  vacation: {
    title: 'Take a vacation',
    icon: <HouseIcon />,
  },
  car: {
    title: 'Buy a car',
    icon: <HouseIcon />,
  },
  wedding: {
    title: 'Throw a wedding party',
    icon: <HouseIcon />,
  },
  fund: {
    title: 'Build an emergency fund',
    icon: <HouseIcon />,
  },
  baby: {
    title: 'Have a baby',
    icon: <HouseIcon />,
  },
} as const;

export type GoalType =
  | 'college'
  | 'vacation'
  | 'car'
  | 'wedding'
  | 'fund'
  | 'baby';

export type GoalProps = {
  type: GoalType;
};

export default function Goal({ type }: GoalProps) {
  const [moneyInCents, setMoneyInCents] = useState(250000);
  const [reachDate, setReachDate] = useState(addAMonth(new Date()));
  const { title, icon } = GOALS_LIST[type];

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
    <S.Content>
      <S.Message>
        Let&apos;s plan your <strong>saving goal</strong>
      </S.Message>
      <S.Card onSubmit={handleSubmit}>
        <S.HeaderContainer>
          <S.IconWrapper>{icon}</S.IconWrapper>
          <div>
            <S.Title>{title}</S.Title>
            <S.SubTitle>Saving Goal</S.SubTitle>
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
  );
}
