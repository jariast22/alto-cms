import Hero from '@/molecules/Hero';
import MainContent from '@/organisms/MainContent';
import styled from 'styled-components';

const Home = ({ blogs }) => (
  <Wrapper>
    <Hero></Hero>
    <MainContent blogs={blogs}></MainContent>
  </Wrapper>
);

const Wrapper = styled.main`
  /* display: flex; */
`;

export default Home;
