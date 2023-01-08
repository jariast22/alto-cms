import HeroText from '@/atoms/HeroText';
import HeroImage from '@/atoms/HeroImage';
import styled from 'styled-components';

const Hero = () => {
  const heading = 'Praesent pellentesque libero.';
  const content =
    'Curabitur placerat blandit ipsum eu condimentum. Proin pellentesque justo id lorem sodales, ac ullamcorper urna vehicula.';

  return (
    <Wrapper>
      <HeroImage imageUrl="https://res.cloudinary.com/djxvv0rbv/image/upload/v1673189630/wallhaven-q6ov1r_meqqhf.jpg">
        <HeroText heading={heading} content={content}></HeroText>
      </HeroImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default Hero;
