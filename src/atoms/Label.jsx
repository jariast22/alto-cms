import styled from 'styled-components';

const Label = ({ size = '1', children }) => (
  <Wrapper style={{ '--size': size + 'rem' }}>{children}</Wrapper>
);

const Wrapper = styled.span`
  text-transform: uppercase;
  font-size: var(--size);
`;
export default Label;
