import { devices } from 'utils/breakpoints';
import styled from 'styled-components';

export const PageContent = styled.main`
  padding: 3.2rem 0;

  @media ${devices.medium} {
    padding: 4.8rem 0;
  }
`;
