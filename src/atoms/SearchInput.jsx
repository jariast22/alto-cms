import { COLORS } from '@/constants';
import styled from 'styled-components';

const SearchInput = (props) => <Wrapper {...props}></Wrapper>;

const Wrapper = styled.input`
  background-color: ${COLORS.black};
  box-sizing: border-box;
  border: 0;
  color: ${COLORS.gray50};
  height: 100%;

  &::placeholder {
    color: ${COLORS.gray300};
    text-transform: uppercase;
  }
`;

export default SearchInput;
