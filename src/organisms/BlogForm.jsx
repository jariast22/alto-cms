import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';

import Button from '@/atoms/Button';
import InputWithLabel from '@/molecules/InputWithLabel';
import styled from 'styled-components';

const BlogForm = ({ blog, handleBlogCreation }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (blog) {
      setIsEditing(true);
      setTitle(blog.title);
      setImageUrl(blog.imageUrl);
      setSummary(blog.summary);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let id;
    if (!isEditing) {
      id = uuidv4();
    } else {
      id = blog.id;
    }

    const sanitizedContent = DOMPurify.sanitize(content);

    const newBlog = {
      id,
      title,
      content: sanitizedContent,
      summary,
      imageUrl,
    };
    handleBlogCreation(newBlog, isEditing);
    navigate('/');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputWithLabel labelText="Title" id="title">
        <input
          id="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        ></input>
      </InputWithLabel>
      <InputWithLabel labelText="Image URL" id="url">
        <input
          type="url"
          id="url"
          value={imageUrl}
          onChange={({ target }) => setImageUrl(target.value)}
        ></input>
      </InputWithLabel>
      <InputWithLabel labelText="Summary" id="summary">
        <TextArea
          id="summary"
          value={summary}
          onChange={({ target }) => setSummary(target.value)}
        ></TextArea>
      </InputWithLabel>
      <InputWithLabel labelText="Content" id="content">
        <TextArea
          id="content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        ></TextArea>
      </InputWithLabel>
      <ButtonWrapper>
        <Button type="submit">Save Blog</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  width: fit-content;
`;

const TextArea = styled.textarea`
  resize: vertical;
`;

const ButtonWrapper = styled.div`
  align-self: end;
`;

export default BlogForm;
