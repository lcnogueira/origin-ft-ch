import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  as?: React.ElementType;
} & ButtonTypes;

export default function Button({ children, ...props }: ButtonProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
