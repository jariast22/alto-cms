import BlogForm from '@/organisms/BlogForm';
import styled from 'styled-components';

const BlogEdit = ({ blog, handleBlogCreation }) => (
  <Wrapper>
    <BlogForm handleBlogCreation={handleBlogCreation} blog={blog} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default BlogEdit;
