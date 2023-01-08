import ThumbNail from '@/molecules/ThumbNail';
import styled from 'styled-components';

const BlogsGallery = ({ blogs }) => {
  return (
    <Wrapper>
      {blogs.map((blog) => (
        <ThumbNail
          key={blog.id}
          imageUrl={blog.imageUrl}
          altText={blog.title}
          size="170"
        ></ThumbNail>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default BlogsGallery;
