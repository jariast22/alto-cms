import styled from 'styled-components';

import Logo from '@/molecules/Logo';
import NavBarMenu from '@/molecules/NavBarMenu';
import Search from '@/molecules/Search';

const NavBar = () => (
  <Wrapper>
    <Logo></Logo>
    <NavBarMenu></NavBarMenu>
    <Search></Search>
  </Wrapper>
);

const Wrapper = styled.div`
  align-items: end;
  border-bottom: 3px solid black;
  display: flex;
  height: 60px;
  gap: 40px;
  justify-content: space-between;
  padding: 20px;
`;

export default NavBar;
