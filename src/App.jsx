import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Outlet, useMatch } from 'react-router-dom';

import { blogsSeed } from './blogs';
import { QUERIES } from './constants';
import NavBar from '@/organisms/NavBar';
import Home from '@pages/Home';
import ErrorPage from '@pages/error-page';
import Blog from '@pages/Blog';
import BlogEdit from '@pages/BlogEdit';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const match = useMatch('/blog/:id');

  const blog = match ? blogs.find((blog) => blog.id === match.params.id) : null;

  useEffect(() => {
    const blogsInStorage = localStorage.getItem('blogs');
    if (blogsInStorage) {
      setBlogs(JSON.parse(blogsInStorage));
    } else {
      localStorage.setItem('blogs', JSON.stringify(blogsSeed));
      setBlogs(blogsSeed);
    }
  }, []);

  const onBlogCreation = (newBlog) => {
    localStorage.clear();
    const newBlogs = blogs.concat(newBlog);
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
    setBlogs(newBlogs);
  };

  return (
    <Wrapper>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Home blogs={blogs} />} />
        <Route path="blog/:id" element={<Blog blog={blog} />} />
        <Route
          path="editBlog"
          element={<BlogEdit handleBlogCreation={onBlogCreation} />}
        />
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
