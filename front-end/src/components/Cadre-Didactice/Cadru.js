import React from 'react';
import "../../styles/cadre-didactice/Cadru.css"
import Tool from "../Admin/Tool";

const Cadru = ({ profile, name, grade, title, webPage, phone, fax, email, isAdmin }) => {
  return (
    <section className="teacher-card">
      <div className="teacher">
        <figure>
          <img src={profile} alt="teacher profile" />
        </figure>

        <ul>
          <li>Nume: <strong>{name}</strong></li>
          <li>Grad: <strong>{grade}</strong></li>
          <li>Titlu: <strong>{title}</strong></li>
          <li>Pagina web: <strong><a href={webPage} target="_blank" rel="noopener noreferrer">{webPage}</a></strong></li>
          <li>Telefon de serviciu: <strong>{phone}</strong></li>
          <li>Fax de serviciu: <strong>{fax}</strong></li>
          <li>E-mail: <strong>{email}</strong></li>
        </ul>
      </div>
      {isAdmin &&
        <div className="card-toolbar">
          <Tool icon='pen' text='Editeaza' />
          <Tool icon='trash-alt' text='Sterge' />
        </div>
      }
    </section>
  );
}

export default Cadru;