import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.list.find(b => b.id === parseInt(id)));

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.description}</p>
      <p><b>Rating:</b> {book.rating}</p>
      <button onClick={() => navigate('/books')}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;
