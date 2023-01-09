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
  list-style: none;
  margin: 0;
  margin-right: auto;
  padding: 0;
`;

export default NavBarMenu;
