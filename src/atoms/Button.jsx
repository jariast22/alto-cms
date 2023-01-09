import { COLORS } from '@/constants';
import styled from 'styled-components';

const Button = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.button`
  background-color: ${COLORS.primary};
  border: 0;
  color: white;
  height: 100%;
  padding: 10px;
  text-transform: uppercase;

  &:hover {
    background-color: #ed8d64;
    color: ${COLORS.gray500};
  }
`;

export default Button;
