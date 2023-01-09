import styled from 'styled-components';

const InputWithLabel = ({ labelText, id, children }) => (
  <Wrapper>
    <Label htmlFor={id}>{labelText}</Label>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  min-width: 100px;
`;

export default InputWithLabel;
