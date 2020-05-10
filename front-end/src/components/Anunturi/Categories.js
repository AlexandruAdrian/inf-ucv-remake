import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = ({ handleNews }) => {
  const [categories, setCategories] = useState(['Toate']);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/categories");
      const cat = response.data.categories.map(c => c.Category);
      setCategories(c => [...c, ...cat]);
    } catch (err) {
      console.log(`Failed to fetch categories - ${err}`);
    }
  }

  const handleChange = async (e) => {
    const { value } = e.target;
    const response = await axios.get(`/news/${value}`);
    handleNews(response.data.news);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <form id="cat-form">
      <label htmlFor='categories'>Alege o categorie:</label>
      <select id="categories" name="category-list" form="cat-form" onChange={handleChange}>
        {categories.map(c => {
          return <option key={c} value={c}>{c}</option>
        }
        )}
      </select>
    </form>
  );
}

export default Categories;