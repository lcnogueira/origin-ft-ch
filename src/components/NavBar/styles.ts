import { devices } from 'lib/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--white);
  padding: 1.6rem;

  @media ${devices.medium} {
    padding: 2.4rem 5.6rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  color: var(--blueGray900);
  width: 75px;
  height: 24px;

  @media ${devices.medium} {
    width: 100px;
    height: 32px;
  }
`;
