import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/books">Browse Books</Link> | 
    <Link to="/add">Add Book</Link>
  </nav>
);

export default Header;
