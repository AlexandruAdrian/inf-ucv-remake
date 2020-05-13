import React from 'react';
import "../../styles/cadre-didactice/Cadru.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cadru = ({ Id, Avatar, FullName, Grade, Title, WebPage, Phone, Fax, Email, isAdmin, handleDelete, toggleEdit }) => {
  return (
    <section className="teacher-card">
      <div className="teacher">
        <figure>
          <img src={Avatar} alt="teacher profile" />
        </figure>

        <ul>
          <li>Nume: <strong>{FullName}</strong></li>
          <li>Grad: <strong>{Grade}</strong></li>
          <li>Titlu: <strong>{Title}</strong></li>
          <li>Pagina web: <strong><a href={WebPage} target="_blank" rel="noopener noreferrer">{WebPage}</a></strong></li>
          <li>Telefon de serviciu: <strong>{Phone}</strong></li>
          <li>Fax de serviciu: <strong>{Fax}</strong></li>
          <li>E-mail: <strong>{Email}</strong></li>
        </ul>
      </div>
      {isAdmin &&
        <div className="card-toolbar">
          <div className='tool edit' onClick={() => toggleEdit({ Id, FullName, Grade, Title, WebPage, Phone, Fax, Email, Avatar })}>
            <FontAwesomeIcon icon='pen' size="sm" />
            <p>Editeaza</p>
          </div>
          <div className='tool delete' onClick={() => handleDelete(Id)}>
            <FontAwesomeIcon icon='trash-alt' size="sm" />
            <p>Sterge</p>
          </div>
        </div>
      }
    </section>
  );
}

export default Cadru;