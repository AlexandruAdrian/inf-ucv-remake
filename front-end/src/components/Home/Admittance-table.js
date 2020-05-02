import React from 'react';
import '../../styles/Admittance-table.css';

const AdmittanceTable = ({data}) => {
  const {domeniulTitle, domeniulDesc, specializare, locBuget, locTaxa, dataInscrieri} = data;
  
  return (
    <table>
      <thead>
        <tr>
          <td rowSpan="2">{domeniulTitle}</td>
          <td rowSpan="2">Specializarea</td>
          <td colSpan="2">Numarul de locuri</td>
          <td rowSpan="2">Inscrieri</td>
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