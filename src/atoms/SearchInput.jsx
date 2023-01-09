import { useNavigate } from 'react-router-dom';
import { Hint } from 'react-autocomplete-hint';

/* In hindsight the Hint component was a bad choice
  Is not easily customizable, doesn't support styled components, etc.
*/

const SearchInput = ({ blogs = [] }) => {
  const navigate = useNavigate();
  const options =
    blogs && blogs.map((blog) => ({ id: blog.id, label: blog.title }));

  const handleFill = (option) => {
    navigate(`blog/${option.id}`);
  };

  return (
    <Hint options={options} onFill={handleFill}>
      <input className="input-with-hint" />
    </Hint>
  );
};

export default SearchInput;
