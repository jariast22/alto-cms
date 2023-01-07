import styled from 'styled-components';

import NavBarLink from '@/atoms/NavBarLink';

const NavBarMenu = () => (
  <Wrapper>
    <NavBarLink path="/" label="Home"></NavBarLink>
    <NavBarLink path="/about" label="About"></NavBarLink>
    <NavBarLink path="/blog" label="Blog"></NavBarLink>
    <NavBarLink path="/contact" label="Contact"></NavBarLink>
  </Wrapper>
);

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  margin-right: auto;
  padding: 0;
`;

export default NavBarMenu;
