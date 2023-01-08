import styled from 'styled-components';

const HeroImage = ({ imageUrl, children }) => (
  <Wrapper imageUrl={imageUrl}>{children}</Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  display: flex;
  align-items: end;
  justify-content: end;
  padding: 20px;
`;

export default HeroImage;
