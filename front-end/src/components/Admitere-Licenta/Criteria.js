import React from 'react';
import "../../styles/admitere-licenta/Criteria.css";

const Criteria = () => {
  return (
    <section className="criteria">
      <h4>Criterii de selectie</h4>
      <p>
        Pot candida la admiterea in invatamantul superior, in ciclul de studii universitare de licenta,
        absolventii de liceu cu diploma de bacalaureat sau diploma echivalenta cu aceasta.
      </p>

      <p>
        In anul universitar 2019/2020 admiterea in anul I de studii se face prin <span>concurs de dosare pe
        baza mediei generale obtinute la examenul de bacalaureat.</span>
      </p>

      <p>
        Candidatii la programele de studii universitare de licenta, care au obtinut in perioada studiilor
        liceale distinctii (premiile I, II, III, mentiune) la olimpiadele scolare internationale recunoscute
        de Ministerul Educatiei Nationale, beneficiaza de dreptul de a se inscrie, fara sustinerea concursului de admitere,
        pe locuri finantate de la buget.
      </p>

      <p>
        Candidatii la programele de studii universitare de licenta, care au obtinut in perioada studiilor liceale distinctii
        la olimpiadele scolare si/sau la alte concursuri nationale/internationale, pot fi declarati admisi, fara sustinerea concursului
        admitere, pe locuri finantate de la buget, <strong>la propunerea Consiliului Facultatii, analizandu-se fiecare caz in parte si cu
        aprobarea Consiliului de Administratie al UCv.</strong>
      </p>

      <p>Criterii de departajare la medii egale:</p>

      <ol>
        <li>Nota cea mai mare  obtinuta la  probele scrise la disciplinele Informatica sau Matematica din cadrul examenului de bacalaureat.</li>
        <li>Nota obtinuta la  proba scrisa la disciplina Limba si literatura româna din cadrul examenului de bacalaureat.</li>
      </ol>

    </section>
  );
}

export default Criteria;