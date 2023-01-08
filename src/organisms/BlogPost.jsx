import Float from '@/atoms/Float';
import HTMLContent from '@/atoms/HTMLContent';
import ThumbNail from '@/molecules/ThumbNail';
import styled from 'styled-components';

const BlogPost = ({ blog }) => (
  <Wrapper>
    <h1>{blog.title}</h1>
    <Float>
      <ThumbNail imageUrl={blog.imageUrl} altText={blog.title} size="400" />
    </Float>
    <HTMLContent htmlContent={blog.content} />
  </Wrapper>
);

const Wrapper = styled.article``;

export default BlogPost;
