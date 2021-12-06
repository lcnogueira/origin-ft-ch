import { getMonthYear, monthsDifference } from 'lib/date';

const TODAY = getMonthYear();

export const calculateDeposits = (money: number, reachDate: Date) => {
  const monthsAmount = monthsDifference(TODAY, reachDate);
  return { monthsAmount, monthlyDeposit: money / monthsAmount };
};

export const getMonthlyDepositsDescription = (monthsAmount: number) => {
  return monthsAmount > 1
    ? `${monthsAmount} monthly deposits`
    : `${monthsAmount} deposit`;
};
