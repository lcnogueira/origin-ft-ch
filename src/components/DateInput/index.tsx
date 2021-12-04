import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArrowLeftIcon from 'assets/icons/ArrowLeftIcon';
import ArrowRightIcon from 'assets/icons/ArrowRightIcon';
import { addMonth, getMonthYear, removeMonth } from 'lib/date';

import * as S from './styles';

type DateInputProps = {
  onDateChange?: (value: Date) => void;
  label?: string;
  initialDate?: Date;
};

const CURRENT_MONTH_YEAR = getMonthYear();

export default function DateInput({
  label,
  initialDate,
  onDateChange,
}: DateInputProps) {
  const isMounted = useRef(false);
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    initialDate ? getMonthYear(initialDate) : CURRENT_MONTH_YEAR
  );

  const allowPreviousMonth = useMemo(
    () => selectedMonthYear > CURRENT_MONTH_YEAR,
    [selectedMonthYear]
  );

  const handleDecrementMonth = useCallback(() => {
    if (allowPreviousMonth) {
      setSelectedMonthYear((currentValue) => removeMonth(currentValue));
    }
  }, [allowPreviousMonth]);

  const handleIncrementMonth = useCallback(() => {
    setSelectedMonthYear((currentValue) => addMonth(currentValue));
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    !!onDateChange && onDateChange(selectedMonthYear);
  }, [selectedMonthYear, onDateChange]);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'ArrowLeft') {
        return handleDecrementMonth();
      }

      if (key === 'ArrowRight') {
        return handleIncrementMonth();
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
          <S.Month>
            {selectedMonthYear.toLocaleString('en-US', { month: 'long' })}
          </S.Month>
          <S.Year>{selectedMonthYear.getFullYear()}</S.Year>
        </S.DataWrapper>
        <S.IconWrapper aria-label="next month" onClick={handleIncrementMonth}>
          <ArrowRightIcon />
        </S.IconWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
