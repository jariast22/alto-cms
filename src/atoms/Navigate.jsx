import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navigate = ({ path, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return <Wrapper onClick={handleClick}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  cursor: pointer;
`;
export default Navigate;
