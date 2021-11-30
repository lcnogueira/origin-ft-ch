import DollarSignIcon from 'assets/icons/DollarSignIcon';
import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type MoneyInputProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function MoneyInput({
  onInputChange,
  label,
  name,
  initialValue = '',
  disabled,
  ...props
}: MoneyInputProps) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.IconWrapper>
          <DollarSignIcon />
        </S.IconWrapper>
        <S.Input
          type="number"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
}
