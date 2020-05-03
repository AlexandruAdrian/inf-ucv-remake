import React from 'react';

const OfferTable = ({buget, taxa}) => {
  return (
    <table>
      <thead>
        <tr>
          <td rowSpan="2">Domeniul de Licenta</td>
          <td rowSpan="2">Specializarea</td>
          <td colSpan="2">Numarul de locuri</td>
        </tr>
        <tr>
          <td>Buget</td>
          <td>Taxa <span>*</span></td>
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