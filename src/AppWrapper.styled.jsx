import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  margin: 0 auto;

  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;
