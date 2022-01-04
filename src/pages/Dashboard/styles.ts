import styled from 'styled-components';
import { devices } from 'utils/breakpoints';

export const Container = styled.div`
  max-width: 1136px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.6rem 4.8rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1.6rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'Rubik';
  font-weight: 500;
  color: var(---blueGray900);
  font-size: 2rem;
  line-height: 120%;
  font-weight: 500;
  margin-bottom: 0.4rem;

  @media ${devices.medium} {
    font-size: 2.4rem;
  }
`;
