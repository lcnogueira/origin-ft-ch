import { devices } from 'lib/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div``;

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

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid var(--blueGray50);
  padding: 0 1.2rem;
  height: 5.6rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0.2rem var(--blueGray100);
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DataValue = styled.span`
  display: block;
  font-size: 1.4rem;
  line-height: 2.1rem;

  @media ${devices.medium} {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const Month = styled(DataValue)`
  font-weight: 600;
  color: var(--blueGray900);
`;

export const Year = styled(DataValue)`
  color: var(--blueGray300);
`;

export const IconWrapper = styled.button`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  color: var(--blueGray300);
  background: transparent;
  border: none;
  outline: none;
  transition: filter var(--defaultTransition);

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
