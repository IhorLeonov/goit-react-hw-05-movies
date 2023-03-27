import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Sorry, something went wrong :( </h2>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFound;
