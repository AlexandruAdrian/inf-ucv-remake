import React from 'react';

const Cadru = ({ profile, name, grade, title, webPage, phone, fax, email }) => {
  return (
    <section className="teacher">
      <figure>
        <img src={profile} alt="teacher profile photo" />
      </figure>

      <ul>
        <li>Nume: {name}</li>
        <li>Grad: {grade}</li>
        <li>Titlu: {title}</li>
        <li>webPage: {webPage}</li>
        <li>Telefon de serviciu: {phone}</li>
        <li>Fax de serviciu: {fax}</li>
        <li>E-mail: {email}</li>
      </ul>
    </section>
  );
}

export default Cadru;