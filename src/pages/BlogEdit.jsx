import BlogForm from '@/organisms/BlogForm';
import styled from 'styled-components';

const BlogEdit = ({ handleBlogCreation }) => (
  <Wrapper>
    <BlogForm handleBlogCreation={handleBlogCreation} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default BlogEdit;
