import styled from 'styled-components';

import Label from '@/atoms/Label';
import SearchInput from '@/atoms/SearchInput';
import Button from '@/atoms/Button';

const Search = () => (
  <Wrapper>
    <Label>Search The Site</Label>
    <InputWrapper>
      <SearchInput placeholder="Enter Keyword"></SearchInput>
      <Button>Search</Button>
    </InputWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-grow: 1;
`;

export default Search;
