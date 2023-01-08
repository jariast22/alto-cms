import styled from 'styled-components';
import { QUERIES } from './constants';
import Hero from './molecules/Hero';
import MainContent from './organisms/MainContent';
import NavBar from './organisms/NavBar';

const App = () => (
  <Wrapper>
    <NavBar></NavBar>
    <Hero></Hero>
    <MainContent></MainContent>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0 300px;

  @media ${QUERIES.tabletAndDown} {
    padding: 16px;
  }
`;
export default App;
