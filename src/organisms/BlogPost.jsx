import styled from 'styled-components';

import Icon from '@/atoms/Icon';
import { COLORS } from '@/constants';
import Navigate from '@/atoms/Navigate';
import BlogContent from '@/molecules/BlogContent';

const BlogPost = ({ blog }) => (
  <Wrapper>
    <BlogHeader>
      <h1>{blog.title}</h1>
      <Navigate path={`/editBlog/${blog.id}`}>
        <Icon style={{ color: COLORS.primary }} id={'edit'} />
      </Navigate>
    </BlogHeader>
    <BlogContent blog={blog} />
  </Wrapper>
);

const Wrapper = styled.article``;

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BlogPost;
