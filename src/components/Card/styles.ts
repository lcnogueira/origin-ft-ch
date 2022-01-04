import styled from 'styled-components';
import { devices } from 'utils/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;

  border: 1px solid var(--blueGray50);
  box-shadow: 0px 8px 24px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  background: var(--white);

  @media ${devices.medium} {
    height: 248px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2.4rem;

  @media ${devices.medium} {
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    margin-bottom: 5.6rem;
  }
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
`;

export const Title = styled.span`
  color: blueGray900;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;
