import React from 'react';
import "../../styles/Admitere.css";
import AdmitereTable from "./Admitere-table";

const Admitere = () => {

  return (
    <section class="admitere">
      <h4>Admitere 2019</h4>
      <p>Departamentul de Informatica al Facultatii de Stiinte organizeaza concurs de admitere pentru urmatoarele programe de studii:</p>
      <p><strong>Ciclul 1: Licenta (Facultate)</strong> - Locuri libere pentru sesiunea de admitere septembrie 2019: </p>
      <AdmitereTable />
    </section>
  );
};

export default Admitere;