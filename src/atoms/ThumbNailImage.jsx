import styled from 'styled-components';

const ThumbNailImage = ({ imageUrl, altText }) => (
  <Wrapper src={imageUrl} alt={altText}></Wrapper>
);

const Wrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ThumbNailImage;
