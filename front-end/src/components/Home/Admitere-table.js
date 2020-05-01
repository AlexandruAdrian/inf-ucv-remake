import React from 'react';
import '../../styles/Admitere-table.css';

const AdmitereTable = () => {
  return (
    <table>
      <tr>
        <td rowspan="2">Domeniul de Licenta</td>
        <td rowspan="2">Specializarea</td>
        <td colspan="2">Numarul de locuri</td>
        <td rowspan="2">Inscrieri</td>
      </tr>
      <tr>
        <td>Buget</td>
        <td>Taxa</td>
      </tr>
      <tr>
        <td>Informatica (3 ani)</td>
        <td>Informatica</td>
        <td>10</td>
        <td>21</td>
        <td>9 - 16 septembrie 2019</td>
      </tr>
    </table>
  );
}

export default AdmitereTable;