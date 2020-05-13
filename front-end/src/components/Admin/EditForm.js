import React, { useState, useContext } from 'react';
import axios from 'axios';
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCategories from "./AddCategories";
import AddTags from './AddTags';
/* Context */
import { NewsDispatchContext } from "../../context/news-context";

const EditForm = ({ toggleEdit, article, categories, setCategories, tags, setTags }) => {
  const dispatch = useContext(NewsDispatchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({ ...article[0] });
  const { Id, Title, Content } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleCategoryDelete = async (newsId, catId) => {
    if (categories.length <= 1) {
      alert("Anuntul trebuie sa faca parte din cel putin o categorie !");
      return;
    }
    else {
      try {
        setCategories(cat => cat.filter(c => c.Id !== catId));
        const token = localStorage.getItem("Token");
        await axios.delete(`/news/${newsId}/categories/${catId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      //Grab token and attach it to http request header
      const token = localStorage.getItem("Token");
      await axios.put(`/news/${Id}`,
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      dispatch({ type: 'EDIT_ARTICLE', payload: values });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  const handleTagDelete = async (newsId, tagId) => {
    try {
      setTags(tag => tag.filter(t => t.Id !== tagId));
      const token = localStorage.getItem("Token");
      await axios.delete(`/news/${newsId}/tags/${tagId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className='overlay'>
      <section className='overlay-container'>
        <form>
          <label htmlFor="title">Titlu</label>
          <input type="text" id="title" name="Title" value={Title} maxLength={100} onChange={handleChange} />
          <br />
          <label htmlFor='content'>Continut</label>
          <textarea id="content" value={Content} onChange={handleChange} name="Content" />
          <br />
          <button onClick={handleSave}>
            {isLoading ?
              <FontAwesomeIcon icon="spinner" className="fa-spin 4x" size="lg" />
              :
              'Salveaza'
            }
          </button>
        </form>

        <section className='details'>
          <p>Categorii:</p>

          <div className="categories">
            {categories.map(cat => {
              return (
                <div className='wrapper' key={cat.Id}>
                  <p>{cat.Category}</p>
                  <div className="close-item" onClick={() => handleCategoryDelete(Id, cat.Id)}>
                    <FontAwesomeIcon icon='times' size="sm" />
                  </div>
                </div>
              )
            })}
          </div>
          <AddCategories categories={categories} setCategories={setCategories} id={Id} />
        </section>

        <section className='details'>
          <AddTags tags={tags} setTags={setTags} id={Id} />
          <p>Tag-uri si Link-uri</p>

          <div className="tags">
            {tags.map(tag => {
              return (
                <div key={tag.Id} className='wrapper'>
                  <p>{tag.Tag} -> {tag.Link}</p>
                  <div className="close-item" onClick={() => handleTagDelete(Id, tag.Id)}>
                    <FontAwesomeIcon icon='times' size="sm" />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </section>
      <div onClick={toggleEdit} className="close-form">
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
    </section >
  );
}

export default EditForm;