import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 375px;

  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 24px;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px 0;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 40px;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;

  * {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }
`;
