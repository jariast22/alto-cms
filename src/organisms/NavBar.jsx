import styled from 'styled-components';

import Logo from '@/molecules/Logo';
import NavBarMenu from '@/molecules/NavBarMenu';
import Search from '@/molecules/Search';
import { COLORS } from '@/constants';
import Navigate from '@/atoms/Navigate';

const NavBar = () => (
  <Wrapper>
    <Navigate path="">
      <Logo />
    </Navigate>
    <NavBarMenu></NavBarMenu>
    <Search></Search>
  </Wrapper>
);

const Wrapper = styled.header`
  align-items: end;
  border-bottom: 3px solid ${COLORS.black};
  display: flex;
  height: 60px;
  gap: 40px;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default NavBar;
