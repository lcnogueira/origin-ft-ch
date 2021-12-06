import { devices } from 'lib/breakpoints';
import styled, { css } from 'styled-components';
import { MoneyInputProps } from '.';

export const Input = styled.input`
  color: var(--blueGray600);
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 2rem;
  line-height: 120%;
  padding: 0 1.2rem;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

  @media ${devices.medium} {
    font-size: 2.4rem;
  }

  ::placeholder {
    color: var(--blueGray100);
  }
`;

export const Label = styled.label`
  color: var(--blueGray900);
  font-size: 1.2rem;
  line-height: 150%;
  cursor: pointer;
  margin-bottom: 0.4rem;

  @media ${devices.medium} {
    font-size: 1.4rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 2.4rem;
  width: 2.4rem;
  color: var(--blueGray100);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  height: 5.6rem;
  padding: 0 1.6rem;
  border-radius: 4px;
  border: 1px solid var(--blueGray50);

  &:focus-within {
    box-shadow: 0 0 0.2rem var(--blueGray100);
  }
`;

type WrapperProps = Pick<MoneyInputProps, 'disabled'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ disabled }) => css`
    ${disabled &&
    css`
      ${Label},
      ${Input},
      ${IconWrapper} {
        cursor: not-allowed;
        color: var(--blueGray100);

        &::placeholder {
          color: currentColor;
        }
      }
    `}
  `}
`;
