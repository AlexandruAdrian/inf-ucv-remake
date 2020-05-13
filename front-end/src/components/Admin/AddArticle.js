import React, { useState, useContext } from 'react';
import axios from 'axios';
import "../../styles/admin/add-article.css";
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Context */
import { NewsDispatchContext } from "../../context/news-context";

const AddArticle = ({ toggleForm }) => {
  const [values, setValues] = useState({
    title: '',
    content: '',
    tag: '',
    link: '',
    category: 'Stiri'
  });
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useContext(NewsDispatchContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = async () => {
    if (values.title.length === 0) {
      alert('Articolul trebuie sa contina un titlu.');
      return;
    }

    if (values.content.length === 0) {
      alert('Articolul trebuie sa aiba continut.');
      return;
    }

    if (categories.length === 0) {
      alert('Articolul trebuie sa faca parte din cel putin o categorie.');
      return;
    }

    const payload = {
      title: values.title,
      content: values.content,
      tags: tags,
      categories: categories
    }

    const token = localStorage.getItem("Token");
    const result = await axios.post('/news', payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({ type: 'ADD_ARTICLE', payload: result.data.article[0] });
    toggleForm();
  }

  const handleCategories = (e) => {
    e.preventDefault();
    const foundCategory = categories.find(cat => cat === values.category);
    if (foundCategory === undefined) {
      setCategories(categories => [...categories, values.category]);
    } else {
      alert('Anuntul este deja inscris in aceasta categorie.')
    }
  }

  const handleCategoryDelete = (category) => {
    setCategories(cat => cat.filter(cat => cat !== category));
  }

  const handleTags = (e) => {
    e.preventDefault();
    const data = {
      tag: values.tag,
      link: values.link
    }

    if (values.tag.length === 0 || values.link.length === 0) {
      alert('Tag-ul si Link-ul sunt corelate.\n' +
        'Tag-ul este marcat in cadrul continutului ca un link catre o alta resursa sau alta pagina web.\n' +
        'Asigurati-va ca ambele campuri sunt completate.'
      );

      return;
    }

    if (values.link.indexOf("http://") === -1) {
      alert("Link-ul este invalid, asigurati-va ca link-ul incepe cu http://");
      return;
    }

    const foundTag = tags.find(t => t.tag === data.tag);
    if (foundTag === undefined) {
      setTags(tags => [...tags, data]);
    } else {
      alert('Tag-ul exista deja.');
    }
  }

  const handleTagDelete = (data) => {
    setTags(tags => tags.filter(t => t.tag !== data.tag));
  }

  return (
    <section className="overlay">
      <div className='add-article'>
        <form>
          <div>
            <label htmlFor="add-title">Titlu</label>
            <input
              type="text"
              name='title'
              maxLength={100}
              id="add-title"
              placeholder='Ex: Discipline Optionale - An Universitar 2014 - 2015'
              value={values.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor='add-content'>Continut</label>
            <textarea
              name='content'
              id='add-content'
              placeholder='Ex: Lorem ipsum dolor amet...'
              value={values.content}
              onChange={handleChange}
            />

            <div id="add-article-categories">
              <p>Categorii</p>
              <div>
                <select name="category" value={values.category} onChange={handleChange}>
                  <option value="Stiri">Stiri</option>
                  <option value="Evenimente">Evenimente</option>
                  <option value="Oferte">Oferte</option>
                </select>
                <button onClick={(e) => handleCategories(e)}>Adauga</button>
              </div>

              <div id="categories-container">
                {categories.map(cat => {
                  return (
                    <div className='wrapper' key={cat}>
                      <p>{cat}</p>
                      <div className="close-item" onClick={() => handleCategoryDelete(cat)}>
                        <FontAwesomeIcon icon='times' size="sm" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>


          <div id="add-article-tags">
            <label htmlFor='add-tags'>Tag</label>
            <input
              type="text"
              id='add-tags'
              name='tag'
              placeholder='Ex: Ghidul de utilizare'
              value={values.tag}
              onChange={handleChange}
            />
            <br />
            <label htmlFor='add-links'>Link</label>
            <input
              type="text"
              id='add-links'
              name='link'
              placeholder='Ex: http://inf.ucv.ro/optionale/login.php?view=ghid'
              value={values.link}
              onChange={handleChange}
            />
            <button onClick={(e) => handleTags(e)}>Adauga</button>
            <div id="tags-container">
              {tags.map(({ tag, link }) => {
                return (
                  <div className='wrapper' key={tag}>
                    <p>{tag} -> {link}</p>
                    <div className="close-item" onClick={() => handleTagDelete({ tag, link })}>
                      <FontAwesomeIcon icon='times' size="sm" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </form>

        <button onClick={handleSubmit}>Creeaza articol</button>
      </div>

      <div onClick={toggleForm} className="close-form">
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
    </section >
  );
}

export default AddArticle;
