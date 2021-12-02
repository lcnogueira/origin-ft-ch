import { devices } from 'lib/breakpoints';
import styled from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.p`
  color: var(--brandColorPrimary);
  margin-bottom: 2.4rem;
  line-height: 2.4rem;
`;

export const Card = styled.form`
  width: 100%;
  max-width: 560px;
  background-color: var(--white);
  padding: 3.2rem 2.4rem 4rem;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;

  @media ${devices.medium} {
    padding: 3.5rem 4rem 4rem;
  }

  ${ButtonStyles.Wrapper} {
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.8rem;
`;

export const IconWrapper = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  margin-right: 1.6rem;
`;

export const Title = styled.h1`
  color: var(---blueGray900);
  font-size: 2rem;
  line-height: 120%;
  font-weight: 500;
  margin-bottom: 0.4rem;

  @media ${devices.medium} {
    font-size: 2.4rem;
  }
`;

export const SubTitle = styled.p`
  color: var(--blueGray400);
  font-size: 1.4rem;
  line-height: 150%;

  @media ${devices.medium} {
    font-size: 1.6rem;
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;
  margin-bottom: 2.4rem;

  @media ${devices.small} {
    grid-template-columns: 3fr 2fr;
  }
`;

export const Label = styled.label``;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 1px solid var(--blueGray50);
  border-bottom: none;

  @media ${devices.medium} {
    padding: 2.4rem 3.2rem;
  }
`;

export const AmountTitle = styled.span`
  color: var(--blueGray900);
  font-size: 1.8rem;
  line-height: 120%;

  @media ${devices.medium} {
    font-size: 2rem;
  }
`;

export const AmountValue = styled.span`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 120%;
  color: var(--brandColorSecondary);

  @media ${devices.medium} {
    font-size: 3.2rem;
  }
`;

export const ResultMessage = styled.p`
  display: block;
  color: var(--blueGray900);
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 2.4rem 3.2rem;
  background-color: var(--blueGray10);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid var(--blueGray50);
  border-top: none;
  margin-bottom: 3.2rem;
`;
