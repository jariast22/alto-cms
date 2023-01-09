import styled from 'styled-components';

const ThumbNailImage = ({ imageUrl, altText }) => (
  <Wrapper src={imageUrl} alt={altText}></Wrapper>
);

const Wrapper = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export default ThumbNailImage;
