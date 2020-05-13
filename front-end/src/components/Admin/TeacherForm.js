import React from 'react';
import "../../styles/admin/teacher-form.css";
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeacherForm = ({ toggler, fetch, values, setValues, selectedFile, setSelectedFile }) => {

  const handler = async (e) => {
    e.preventDefault();
    const passed = validateForm();
    if (!passed) return;

    const formData = new FormData();
    if (values.Id) {
      formData.append("Id", values.Id);
    }
    formData.append('FullName', values.FullName);
    formData.append('Grade', values.Grade);
    formData.append('Title', values.Title);
    formData.append('WebPage', values.WebPage);
    formData.append('Phone', values.Phone);
    formData.append('Fax', values.Fax);
    formData.append('Email', values.Email);
    if (selectedFile) {
      formData.append('Avatar', selectedFile);
    } else {
      formData.append('Avatar', values.Avatar);
    }

    await fetch(formData);
  }

  const validateForm = () => {
    if (values.FullName.length === 0) {
      alert("Campul *Nume* nu poate fi gol.");
      return false;
    }

    if (values.Grade.length === 0) {
      alert("Campul *Grad* nu poate fi gol.");
      return false;
    }

    if (values.Title.length === 0) {
      alert("Campul *Titlu* nu poate fi gol.");
      return false;
    }

    if (values.WebPage.length === 0) {
      alert("Campul *Pagina Web* nu poate fi gol.");
      return false;
    }

    if (values.Phone.length === 0 && values.Fax.length === 0) {
      alert("Asigurati-va ca ati completat cel putin unu din cele doua campuri *Fax* sau *Telefon de serviciu*");
      return false;
    }

    if (!validateEmail(values.Email)) {
      alert("Adresa de e-mail este invalida.")
      return false;
    }

    if (!validateLink(values.WebPage) || values.WebPage.indexOf('http://') === -1) {
      alert("Pagina web este invalida.");
      return false;
    }

    if (!validatePhone(values.Phone)) {
      alert("Numarul de telefon este invalid.");
      return false;
    }

    if (!validatePhone(values.Fax)) {
      alert("Numarul de fax este invalid.");
      return false;
    }

    return true;
  }

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
  }

  const validateLink = (link) => {
    const expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm;

    return expression.test(String(link).toLowerCase());
  }

  const validatePhone = (phone) => {
    const expression = /^[0-9 -]+$/;

    return expression.test(phone);
  }

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  return (
    <div className='overlay'>
      <div className="teacher-form-container">
        <form className='teacher-form'>
          <label htmlFor="full-name">Nume</label>
          <input type="text" id="full-name" name="FullName" value={values.FullName} placeholder="Ex. Popescu Adrian" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='grade'>Grad</label>
          <input type="text" id="grade" name="Grade" value={values.Grade} placeholder="Ex. Asist." onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='teacher-title'>Titlu</label>
          <input type="text" id="teacher-title" name="Title" value={values.Title} placeholder="Ex. Dr." onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='web-page'>Pagina Web</label>
          <input type="text" id="web-page" name="WebPage" value={values.WebPage} placeholder="Ex. http://wwww.webpage.ro" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='phone'>Telefon de serviciu</label>
          <input type="tel" pattern="[0-9]{10}" id="phone" name="Phone" value={values.Phone} placeholder="Ex. 0251 413728" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='fax'>Fax</label>
          <input type="tel" pattern="[0-9]{10}" id="fax" name="Fax" value={values.Fax} placeholder="Ex. 0251 412673" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='teacher-email'>E-mail</label>
          <input type="text" id="teacher-email" name="Email" value={values.Email} placeholder="Ex. popescu@gmail.com" onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor="avatar">Avatar</label>
          <input type="file" accept="immage/*" id="avatar" name="Avatar" onChange={e => handleFile(e)} />

          <button onClick={(e) => handler(e, values, validateForm, selectedFile)}>Salveaza</button>
        </form>
      </div>
      <div onClick={toggler} className="close-form">
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
    </div>
  )
}

export default TeacherForm;