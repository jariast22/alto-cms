import styled from 'styled-components';

const Blog = ({ blog }) => {
  if (!blog) {
    return <span>Blog not found</span>;
  }
  return <Wrapper>{blog.title}</Wrapper>;
};

const Wrapper = styled.main``;

export default Blog;
