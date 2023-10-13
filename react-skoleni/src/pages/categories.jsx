import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then((response) => setCategories(response.data));
  }, []);

  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category}><Link to={`/categories/${category}`}>{category}</Link></li>
        ))}
      </ul>
    </>
  );
};
