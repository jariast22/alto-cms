import ThumbNail from '@/molecules/ThumbNail';
import styled from 'styled-components';

const FeaturedBlog = ({ imageUrl, altText, summary }) => (
  <Wrapper>
    <ThumbNail imageUrl={imageUrl} altText={altText} />
    <div>
      <p>{summary}</p>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default FeaturedBlog;
