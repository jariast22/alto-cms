import styled from 'styled-components';

import Logo from '@/molecules/Logo';
import NavBarMenu from '@/molecules/NavBarMenu';

const NavBar = () => (
  <Wrapper>
    <Logo></Logo>
    <NavBarMenu></NavBarMenu>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export default NavBar;
