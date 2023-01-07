import styled from 'styled-components';

const Button = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.button`
  background-color: #c44d1a;
  border: 0;
  color: white;
  height: 100%;
  padding: 10px;
  text-transform: uppercase;
`;

export default Button;
