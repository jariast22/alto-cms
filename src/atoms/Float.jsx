import styled from 'styled-components';

const Float = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  float: left;
  margin-right: 20px;
`;

export default Float;
