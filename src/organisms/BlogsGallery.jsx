import Navigate from '@/atoms/Navigate';
import ThumbNail from '@/molecules/ThumbNail';
import styled from 'styled-components';

const BlogsGallery = ({ blogs }) => {
  return (
    <Wrapper>
      {blogs.map((blog) => (
        <Navigate key={blog.id} path={`blog/${blog.id}`}>
          <ThumbNail
            imageUrl={blog.imageUrl}
            altText={blog.title}
            size="170"
          ></ThumbNail>
        </Navigate>
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
