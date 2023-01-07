import styled from 'styled-components';

const SearchInput = (props) => <Wrapper {...props}></Wrapper>;

const Wrapper = styled.input`
  background-color: black;
  box-sizing: border-box;
  border: 0;
  color: white;
  height: 100%;

  &::placeholder {
    color: white;
    text-transform: uppercase;
  }
`;

export default SearchInput;
