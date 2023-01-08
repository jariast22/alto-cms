import ThumbNail from '@/molecules/ThumbNail';
import styled from 'styled-components';

const FeaturedBlog = ({ blog }) => (
  <Wrapper>
    <ThumbNail imageUrl={blog.imageUrl} altText={blog.title} />
    <div>
      <p>{blog.summary}</p>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default FeaturedBlog;
