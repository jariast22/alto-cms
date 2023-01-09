import styled from 'styled-components';

import Label from '@/atoms/Label';
import SearchInput from '@/atoms/SearchInput';
import Button from '@/atoms/Button';

const Search = ({ blogs }) => (
  <Wrapper>
    <Label>Search The Site</Label>
    <InputWrapper>
      <SearchInput blogs={blogs} placeholder="Enter Keyword"></SearchInput>
      <Button>Search</Button>
    </InputWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 4px;
`;

export default Search;
