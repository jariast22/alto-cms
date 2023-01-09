import styled from 'styled-components';

import ThumbNailImage from '@/atoms/ThumbNailImage';

const ThumbNail = ({ imageUrl, altText, size = 200 }) => (
  <Wrapper
    style={{
      '--size': size + 'px',
    }}
  >
    <ThumbNailImage imageUrl={imageUrl} altText={altText} />
  </Wrapper>
);

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.8);
  display: inline-block;
  height: var(--size);
  min-width: var(--size);
  overflow: hidden;
  width: var(--size);
`;

export default ThumbNail;
