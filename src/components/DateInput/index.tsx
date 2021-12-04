import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArrowLeftIcon from 'assets/icons/ArrowLeftIcon';
import ArrowRightIcon from 'assets/icons/ArrowRightIcon';
import {
  addAMonth,
  getMonthName,
  getMonthYear,
  getYear,
  removeAMonth,
} from 'lib/date';

import * as S from './styles';

type DateInputProps = {
  onDateChange?: (value: Date) => void;
  label?: string;
  initialValue?: Date;
};

const MINIMUM_MONTH_YEAR = addAMonth(new Date());

export default function DateInput({
  label,
  initialValue,
  onDateChange,
}: DateInputProps) {
  const isFirstRender = useRef(true);
  const [selectedMonthYear, setSelectedMonthYear] = useState(() => {
    if (!initialValue || getMonthYear(initialValue) < MINIMUM_MONTH_YEAR) {
      return MINIMUM_MONTH_YEAR;
    }
    return getMonthYear(initialValue);
  });

  const allowPreviousMonth = useMemo(
    () => selectedMonthYear > MINIMUM_MONTH_YEAR,
    [selectedMonthYear]
  );

  const handleDecrementMonth = useCallback(() => {
    if (allowPreviousMonth) {
      setSelectedMonthYear((currentValue) => removeAMonth(currentValue));
    }
  }, [allowPreviousMonth]);

  const handleIncrementMonth = useCallback(() => {
    setSelectedMonthYear((currentValue) => addAMonth(currentValue));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    !!onDateChange && onDateChange(selectedMonthYear);
  }, [selectedMonthYear, onDateChange]);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'ArrowLeft') {
        handleDecrementMonth();
      }

      if (key === 'ArrowRight') {
        handleIncrementMonth();
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleIncrementMonth, handleDecrementMonth]);

  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <S.InnerWrapper>
        <S.IconWrapper
          aria-label="previous month"
          onClick={handleDecrementMonth}
          disabled={!allowPreviousMonth}
        >
          <ArrowLeftIcon />
        </S.IconWrapper>
        <S.DataWrapper>
          <S.Month>{getMonthName(selectedMonthYear)}</S.Month>
          <S.Year>{getYear(selectedMonthYear)}</S.Year>
        </S.DataWrapper>
        <S.IconWrapper aria-label="next month" onClick={handleIncrementMonth}>
          <ArrowRightIcon />
        </S.IconWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
