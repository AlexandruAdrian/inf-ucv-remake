import React, { useState } from 'react';
import "../../styles/admin/teacher-form.css";
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeacherForm = ({ handler, toggler }) => {
  const [values, setValues] = useState({
    FullName: '',
    Grade: '',
    Title: '',
    WebPage: '',
    Phone: '',
    Fax: '',
    Email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className='overlay'>
      <div className="teacher-form-container">
        <form className='teacher-form' onSubmit={e => handleSubmit(e)}>
          <label htmlFor="full-name">Nume</label>
          <input type="text" id="full-name" name="FullName" value={values.FullName} placeholder="Ex. Popescu Adrian" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='grade'>Grad</label>
          <input type="text" id="grade" name="Grade" values={values.Grade} placeholder="Ex. Asist." onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='teacher-title'>Titlu</label>
          <input type="text" id="teacher-title" name="Title" value={values.Title} placeholder="Ex. Dr." onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='web-page'>Pagina Web</label>
          <input type="text" id="web-page" name="WebPage" value={values.WebPage} placeholder="Ex. http://wwww.webpage.ro" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='phone'>Telefon de serviciu</label>
          <input type="text" id="phone" name="Phone" value={values.Phone} placeholder="Ex. 0251 413728" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='fax'>Fax</label>
          <input type="text" id="fax" name="Fax" value={values.Fax} placeholder="Ex. 0251 412673" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='teacher-email'>E-mail</label>
          <input type="text" id="teacher-email" name="Email" value={values.Email} placeholder="Ex. popescu@gmail.com" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor="avatar">Avatar</label>
          <input type="file" accept="immage/*" id="avatar" name="PathToProfile" />
          <button>Adauga</button>
        </form>
      </div>
      <div onClick={toggler} className="close-form">
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
    </div>
  )
}

export default TeacherForm;