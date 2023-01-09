import BlogPost from '@/organisms/BlogPost';
import styled from 'styled-components';

const Blog = ({ blog }) => {
  if (!blog) {
    return <span>Blog not found</span>;
  }
  return (
    <Wrapper>
      <BlogPost blog={blog} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 20px;
`;

export default Blog;
