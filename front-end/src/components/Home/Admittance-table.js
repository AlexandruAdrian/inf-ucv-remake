import React from 'react';
import '../../styles/home/Admittance-table.css';

const AdmittanceTable = ({ data }) => {
  const { domeniulTitle, domeniulDesc, specializare, locBuget, locTaxa, dataInscrieri } = data;

  return (
    <table className="desktop-table">
      <thead>
        <tr>
          <th rowSpan="2">{domeniulTitle}</th>
          <th rowSpan="2">Specializarea</th>
          <th colSpan="2">Numarul de locuri</th>
          <th rowSpan="2">Inscrieri</th>
        </tr>
        <tr>
          <td>Buget</td>
          <td>Taxa</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{domeniulDesc}</td>
          <td>{specializare}</td>
          <td>{locBuget}</td>
          <td>{locTaxa}</td>
          <td>{dataInscrieri}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default AdmittanceTable;