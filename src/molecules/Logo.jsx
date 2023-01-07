import styled from 'styled-components';

import Icon from '@/atoms/Icon';

const Logo = () => (
  <Wrapper>
    <Icon id={'pocket'} size={100}></Icon>
    Pocket Blogs
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Logo;
