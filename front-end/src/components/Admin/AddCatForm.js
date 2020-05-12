import React, { useState } from 'react';
import axios from 'axios';

const AddCatForm = ({ id, categories, setCategories }) => {
  const [category, setCategory] = useState("Stiri");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reject if category already exists
    const foundCat = categories.find(cat => cat.Category === category);
    // Post to DB if it doesn't
    if (foundCat === undefined) {
      const payload = {
        newsId: id,
        category: category
      }

      try {
        const token = localStorage.getItem("Token");
        const result = await axios.post("/news/categories/", payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setCategories(cat => [...cat, ...result.data.category]);
      } catch (err) {
        console.log(err);
      }

    } else {
      alert(`Anuntul face deja parte din categoria ${category}`);
    }
  }

  const handleChange = (e) => {
    setCategory(e.target.value);
  }

  return (
    <form className="cat-form" onSubmit={e => handleSubmit(e)}>
      <select onChange={handleChange} value={category}>
        <option value="Stiri">Stiri</option>
        <option value="Evenimente">Evenimente</option>
        <option value="Oferte">Oferte</option>
      </select>

      <button>Adauga</button>
    </form>
  );
}

export default AddCatForm;