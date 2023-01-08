import ThumbNailImage from '@/atoms/ThumbNailImage';
import styled from 'styled-components';

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
  display: inline-block;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  border-radius: 4px;
  min-width: var(--size);
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.8);
`;

export default ThumbNail;
