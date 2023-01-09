import { COLORS } from '@/constants';
import styled from 'styled-components';

const HeroText = ({ heading, content }) => (
  <Wrapper>
    <Heading>{heading}</Heading>
    <Content>{content}</Content>
  </Wrapper>
);

const Wrapper = styled.div`
  color: ${COLORS.gray50};
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  max-width: 300px;
  text-align: center;
`;

const Heading = styled.h4`
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  text-align: justify;
`;

export default HeroText;
