import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';

import { blogsSeed } from './blogs';
import { QUERIES } from './constants';
import NavBar from '@/organisms/NavBar';
import Home from '@pages/Home';
import ErrorPage from './pages/error-page';

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
      <Routes>
        <Route index element={<Home blogs={blogs} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Outlet />
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
