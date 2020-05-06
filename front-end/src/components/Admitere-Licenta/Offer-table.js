import React from 'react';

const OfferTable = ({ buget, taxa }) => {
  return (
    <table className="offer-table">
      <thead>
        <tr>
          <th rowSpan="2">Domeniul de Licenta</th>
          <th rowSpan="2">Specializarea</th>
          <th colSpan="2">Numarul de locuri</th>
        </tr>
        <tr>
          <th>Buget</th>
          <th>Taxa <span>*</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Informatica (3 ani)</td>
          <td>Informatica</td>
          <td>{buget}</td>
          <td>{taxa}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OfferTable;