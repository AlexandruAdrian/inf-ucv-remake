import React from 'react';

const MobileTable = ({ data }) => {
  const { domeniulTitle, domeniulDesc, specializare, locBuget, locTaxa, dataInscrieri } = data;

  return (
    <table className="mobile-table">
      <tbody>
        <tr>
          <th colSpan="2">{domeniulTitle}</th>
          <td>{domeniulDesc}</td>
        </tr>
        <tr>
          <th colSpan="2">
            Specializarea
        </th>
          <td>{specializare}</td>
        </tr>
        <tr>
          <th rowSpan="2">Numarul de locuri</th>
          <th>Buget</th>
          <td>{locBuget}</td>
        </tr>
        <tr>
          <th>Taxa</th>
          <td>{locTaxa}</td>
        </tr>
        <tr>
          <th colSpan="2">Inscrieri</th>
          <td>{dataInscrieri}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MobileTable;
