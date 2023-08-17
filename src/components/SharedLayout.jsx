import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Search from './headerComponent/Search/Search';
import Card from './headerComponent/Card/Card';

import { Header, NavList, Container } from './SharedLayout.styled';
import Logo from './headerComponent/Logo/Logo';

const StyledLink = styled(NavLink)`
  color: black;
  padding: 20px 0;

  &.active {
    color: #274c5b;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo />
          <NavList>
            <StyledLink to="/" style={{}}>
              Home
            </StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/shop">Shop</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/news">News</StyledLink>
          </NavList>
          <Search />
          <Card />
        </Header>
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};
