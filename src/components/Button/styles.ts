import { devices } from 'lib/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-family: 'Work Sans';
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
  width: 100%;
  border-radius: 32px;
  padding: 1.8rem 0;
  background: var(--brandColorPrimary);
  border: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--defaultTransition);

  &:hover {
    background: var(--brandColorSecondary);
  }

  &:disabled {
    cursor: not-allowed;
    filter: saturate(30%);
  }

  @media ${devices.medium} {
    max-width: 32rem;
  }
`;
