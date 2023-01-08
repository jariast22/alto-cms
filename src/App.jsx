import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { blogsSeed } from './blogs';
import { QUERIES } from './constants';
import NavBar from '@/organisms/NavBar';
import Home from '@pages/Home';

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
      <Home blogs={blogs}></Home>
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
