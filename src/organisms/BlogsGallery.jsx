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
        ></ThumbNail>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BlogsGallery;
