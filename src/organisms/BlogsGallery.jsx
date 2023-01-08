import ThumbNail from '@/molecules/ThumbNail';
import styled from 'styled-components';

const BlogsGallery = () => {
  const imageUrl =
    'https://res.cloudinary.com/djxvv0rbv/image/upload/v1673188688/cld-sample-4.jpg';
  const altText = 'alt';

  return (
    <Wrapper>
      <ThumbNail imageUrl={imageUrl} altText={altText} size="170" />
      <ThumbNail imageUrl={imageUrl} altText={altText} size="170" />
      <ThumbNail imageUrl={imageUrl} altText={altText} size="170" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BlogsGallery;
