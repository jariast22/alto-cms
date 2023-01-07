import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavBarLink = ({ path, label }) => (
  <Wrapper>
    <Link to={path}>{label}</Link>
  </Wrapper>
);

const Wrapper = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  a {
    color: black;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #ccc;
    }
  }
`;

export default NavBarLink;
