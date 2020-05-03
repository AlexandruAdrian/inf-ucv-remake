import React from 'react';
import "../../styles/admitere-master/Criteria.css";

const Criteria = () => {

  return (
    <section className="container dark-bg-container master-criteria">
      <h4>Criterii de selectie</h4>

      <div>
        <p>
          Concurs de admitere este bazat pe sustinerea unei probe de tip  interviu (cu nota NI),
          media examenului de licenta (MEL) si media anilor de studiu de la ciclul de licenta (MAS).
        </p>

        <p>
          Media de admitere (MA) se calculeaza cu formula: MA=(50xNI+35xMAS+15xMEL)/100. Toate notele trebuie sa fie peste 5 cu
          exceptia MEL care trebuie sa fie minim 6.
        </p>

        <p>
          In cazul mediilor egale, criteriile de departajare vor fi: nota la interviu, media anilor de studii de licenta, nota la
          proba scrisa de la examenul de licenta.
        </p>

        <p>
          Interviul abordeaza probleme legate de dezvoltarea carierei profesionale; alte detalii se gasesc la secretariat si la
          avizierul facultatii.
        </p>
      </div>

      <h4>Data sustinerii interviului - Sesiunea Septembrie 2019</h4>
      <p>Joi, 20 septembrie 2019, ora 9.00, sala 116 (candidatii se vor prezenta la inteviu cu B.I. sau C.I)</p>
    </section>
  );
}

export default Criteria;