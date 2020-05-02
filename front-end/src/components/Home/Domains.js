import React from 'react';

const Domains = ({className: animation}) => {

  return (
    <div className={`domains ${animation}`}>
      <h4>Domenii de Licenta si Specializari</h4>
      <h5>INFORMATICA</h5>
      <ul>
        <li>Durata studiilor: 3 ani</li>
        <li>Diploma obtinuta: licenta in informatica</li>
        <li>Specializari:
          <ul>
            <li>Informatica</li>
          </ul>
        </li>
      </ul>

      <h5>MASTER IN INFORMATICA:</h5>
      <p>Tehnici avansate de prelucrare a informatiei (in limba engleza)</p>
      <ul>
        <li>Durata studiilor: 2 ani</li>
        <li>Diploma obtinuta: master in informatica</li>
      </ul>
    </div>
  );
}

export default Domains;