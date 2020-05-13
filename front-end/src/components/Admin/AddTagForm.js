import React, { useState } from 'react';
import axios from 'axios';

const AddTagForm = ({ id, tags, setTags }) => {
  const [values, setValues] = useState({ tag: '', link: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if tag already exists
    const foundTag = tags.find(tag => tag.Tag === values.tag);
    if (foundTag !== undefined) {
      alert('Tag-ul deja exista!');
    }
    // Validate inputs
    if (values.tag.length === 0 || values.tag.length === 0) {
      alert(
        `Tag-ul si Link-ul sunt corelate.
Tag-ul este marcat in cadrul continutului ca un link catre o alta resursa sau alta pagina web.
Asigurati-va ca ambele campuri sunt completate.`
      );
    } else if (values.link.indexOf('http://') === -1) {
      alert(`Link-ul este invalid! Asigurati-va a link-ul incepe cu http://`);
    } else {
      try {
        const payload = {
          newsId: id,
          tag: values.tag,
          link: values.link
        }
        const token = localStorage.getItem("Token");
        const result = await axios.post(`/news/tags`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setTags(tags => [...tags, ...result.data.tag]);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <form className="tag-form" onSubmit={handleSubmit}>
      <label htmlFor="tag">Tag</label>
      <input
        type="text"
        id="tag"
        name="tag"
        placeholder="Ghidul de utilizare"
        value={values.tag}
        onChange={handleChange}
      />

      <label htmlFor="link">Link</label>
      <input
        type="text"
        id="link"
        name="link"
        placeholder="http://inf.ucv.ro/optionale/login.php?view=ghid"
        value={values.link}
        onChange={handleChange}
      />

      <button>Adauga</button>
    </form>
  );
}

export default AddTagForm;