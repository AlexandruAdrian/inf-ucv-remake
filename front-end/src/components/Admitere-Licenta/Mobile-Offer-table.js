import React from 'react';

const MobileOfferTable = ({ buget, taxa }) => {
  return (
    <table className="mobile-offer-table">
      <tbody>
        <tr>
          <th colSpan="2">Domeniul de Licenta</th>
          <td>Informatica (3 ani)</td>
        </tr>
        <tr>
          <th colSpan="2">
            Specializarea
        </th>
          <td>Informatica</td>
        </tr>
        <tr>
          <th rowSpan="2">Numarul de locuri</th>
          <th>Buget</th>
          <td>{buget}</td>
        </tr>
        <tr>
          <th>Taxa</th>
          <td>{taxa}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MobileOfferTable