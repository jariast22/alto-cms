import styled from 'styled-components';

import Float from '@/atoms/Float';
import HTMLContent from '@/atoms/HTMLContent';
import ThumbNail from '@/molecules/ThumbNail';
import Icon from '@/atoms/Icon';
import { COLORS } from '@/constants';
import Navigate from '@/atoms/Navigate';

const BlogPost = ({ blog }) => (
  <Wrapper>
    <BlogHeader>
      <h1>{blog.title}</h1>
      <Navigate path={`/editBlog/${blog.id}`}>
        <Icon style={{ color: COLORS.primary }} id={'edit'} />
      </Navigate>
    </BlogHeader>
    <Float>
      <ThumbNail imageUrl={blog.imageUrl} altText={blog.title} size="400" />
    </Float>
    <HTMLContent htmlContent={blog.content} />
  </Wrapper>
);

const Wrapper = styled.article``;

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BlogPost;
