import styled from 'styled-components';

const HeroImage = ({ imageUrl, children }) => (
  <Wrapper imageUrl={imageUrl}>{children}</Wrapper>
);

const Wrapper = styled.div`
  align-items: end;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  height: 500px;
  justify-content: end;
  padding: 20px;
  width: 100%;
`;

export default HeroImage;
