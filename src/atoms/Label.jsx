import styled from 'styled-components';

const Label = ({ size = '1', children }) => (
  <Wrapper style={{ '--size': size + 'rem' }}>{children}</Wrapper>
);

const Wrapper = styled.span`
  font-size: var(--size);
  text-transform: uppercase;
`;
export default Label;
