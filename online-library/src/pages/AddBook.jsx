import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.list);

  const [form, setForm] = useState({
    title: "", author: "", description: "", rating: "", category: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: books.length + 1,
      ...form,
      rating: parseFloat(form.rating)
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="rating" placeholder="Rating (e.g. 4.5)" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
