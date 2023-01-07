import styled from 'styled-components';

const Label = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.span`
  text-transform: uppercase;
  font-size: 14px;
`;
export default Label;