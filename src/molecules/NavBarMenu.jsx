import styled from 'styled-components';

import NavBarLink from '@/atoms/NavBarLink';

const NavBarMenu = () => (
  <Wrapper aria-label="main">
    <NavBarLink path="/" label="Home"></NavBarLink>
    <NavBarLink path="/editBlog" label="Blog"></NavBarLink>
    <NavBarLink path="/contact" label="Contact"></NavBarLink>
  </Wrapper>
);

const Wrapper = styled.nav`
  display: flex;
  gap: 20px;
  margin: 0;
  margin-right: auto;
  list-style: none;
  padding: 0;
`;

export default NavBarMenu;
