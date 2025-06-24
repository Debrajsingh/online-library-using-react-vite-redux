import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.list);
  return (
    <div>
      <h2>Browse Books</h2>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/books/details/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BrowseBooks;
