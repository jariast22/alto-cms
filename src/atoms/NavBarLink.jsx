import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { COLORS } from '@/constants';

const NavBarLink = ({ path, label }) => (
  <Wrapper>
    <Link to={path}>{label}</Link>
  </Wrapper>
);

const Wrapper = styled.li`
  a {
    color: ${COLORS.gray900};
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: ${COLORS.gray700};
    }
  }
`;

export default NavBarLink;
