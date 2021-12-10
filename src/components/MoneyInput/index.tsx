import DollarSignIcon from 'assets/icons/DollarSignIcon';
import { maskValue, toCents, unMaskValue } from 'utils/currency';
import { InputHTMLAttributes, useCallback, useState } from 'react';
import * as S from './styles';

export type MoneyInputProps = {
  onInputChange?: (value: number) => void;
  label?: string;
  initialValue?: number;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function MoneyInput({
  onInputChange,
  initialValue,
  label,
  name,
  disabled,
  ...props
}: MoneyInputProps) {
  const [value, setValue] = useState(maskValue(String(initialValue)));

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const maskedValue = maskValue(e.currentTarget.value);

      setValue(maskedValue);
      !!onInputChange && onInputChange(toCents(unMaskValue(maskedValue)));
    },
    [onInputChange]
  );

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.IconWrapper>
          <DollarSignIcon />
        </S.IconWrapper>
        <S.Input
          {...props}
          onChange={handleChange}
          value={value}
          disabled={disabled}
          {...(label ? { id: name } : {})}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
}
