import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { blogsSeed } from './blogs';
import { QUERIES } from './constants';
import Hero from './molecules/Hero';
import MainContent from './organisms/MainContent';
import NavBar from './organisms/NavBar';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsInStorage = localStorage.getItem('blogs');
    if (blogsInStorage) {
      setBlogs(JSON.parse(blogsInStorage));
    } else {
      localStorage.setItem('blogs', JSON.stringify(blogsSeed));
      setBlogs(blogsSeed);
    }
  }, []);

  return (
    <Wrapper>
      <NavBar></NavBar>
      <Hero></Hero>
      <MainContent blogs={blogs}></MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 300px;

  @media ${QUERIES.tabletAndDown} {
    padding: 16px;
  }
`;
export default App;
