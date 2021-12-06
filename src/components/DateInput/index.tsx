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
import useUpdateEffect from 'hooks/useUpdateEffect';

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
  const inputWrapperRef = useRef<HTMLDivElement>(null);

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
    setSelectedMonthYear((currentValue) => removeAMonth(currentValue));
  }, []);

  const handleIncrementMonth = useCallback(() => {
    setSelectedMonthYear((currentValue) => addAMonth(currentValue));
  }, []);

  const handleKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      const isFocused = document.activeElement === inputWrapperRef.current;
      if (!['ArrowLeft', 'ArrowRight'].includes(key) || !isFocused) {
        return;
      }

      if (key === 'ArrowLeft' && allowPreviousMonth) {
        return handleDecrementMonth();
      }

      if (key === 'ArrowRight') {
        return handleIncrementMonth();
      }
    },
    [allowPreviousMonth, handleDecrementMonth, handleIncrementMonth]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);

  useUpdateEffect(
    () => !!onDateChange && onDateChange(selectedMonthYear),
    [selectedMonthYear]
  );

  return (
    <S.Wrapper>
      {!!label && (
        <S.Label role="button" onClick={() => inputWrapperRef.current?.focus()}>
          {label}
        </S.Label>
      )}
      <S.InputWrapper
        className="input-wrapper"
        ref={inputWrapperRef}
        tabIndex={0}
      >
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
      </S.InputWrapper>
    </S.Wrapper>
  );
}
