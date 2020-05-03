import React from 'react';
import "../../styles/admitere-master/Register-Documents.css";

const RegisterDocuments = () => {
  return (
    <section className="container dark-bg-container master-register">
      <h4>Acte necesare inscrierii</h4>
      <p>Pentru inscrierea la concursul de admitere, candidatii vor depune un dosar mapa care cuprinde urmatoarele documente:</p>

      <ol>
        <li>
          <strong>fisa de inscriere </strong> - ciclul II - de studii universitare de master (se primeste de la comisia de inscriere)
          </li>

        <li>
          <strong>diploma de bacalaureat</strong> sau diploma echivalenta cu aceasta in <strong>original</strong> sau copie legalizata si
          <strong>foaia matricola</strong> in original sau copie legalizata;
        </li>

        <li>
          <strong>diploma de licenta</strong> si <strong>suplimentul la diploma</strong>/foaia matricola in <strong>original</strong> sau
          copie legalizata, sau <strong>adeverinta de absolvire in original</strong> pentru absolventii din promotia 2019 in original
          sau copie legalizata;
        </li>

        <li>
          <strong>certificatul de nastere</strong>, in <strong>copie legalizata</strong> (legalizarea se poate efectua si de catre comisia
          de admitere a  facultatii pe baza actului original);
        </li>

        <li>
          <strong>certificatul de casatorie</strong> in copie legalizata. Candidatii care solicita si completarea numelui de dupa casatorie,
          vor depune o  cerere pentru completarea numelui, insotita de o declaratie autentificata la notariat, in care precizeaza ca nu vor
          solicita modificarea actelor de studii in cazul modificarii ulterioare a numelui;
        </li>

        <li>
          <strong>adeverinta medicala tip M.S.</strong>, eliberata de medicul de familie, cabinetele medicale scolare, policlinici
          teritoriale;
          Candidatii cu afectiuni cronice vor prezenta adeverinte medicale vizate de comisiile medicale judetene de orientare scolara si
          profesionala. in adeverintele respective se va mentiona in mod expres gradul deficientelor, in functie de localizarea acestora,
          conform criteriilor medicale de orientare scolara si profesionala, din ordinul Ministerului Sanatatii nr. 428/1989. Nedeclararea
          acestor afectiuni atrage dupa sine consecintele institutionale in vigoare.
        </li>

        <li><strong>trei fotografii tip buletin;</strong></li>

        <li>
          <strong>chitanta</strong> doveditoare a platii taxei de inscriere la concursul de admitere. Taxa in cuantum de 100 lei se
          achita la inscriere; <strong>acte doveditoare</strong> pentru candidatii care solicita <strong>scutirea de plata a taxei de
          inscriere</strong> la concursul de admitere (copii legalizate dupa certificatele de deces ale parintilor, in cazul celor
          orfani de ambii parinti; adeverinte de la Casa de copii, in cazul celor aflati in aceasta situatie; adeverinta pentru copiii
          salariatilor Universitatii din Craiova sau din alte institutii de invatamânt, conform legii;
        </li>

        <li>
          <strong>declaratie pe proprie raspundere</strong> ca nu a mai beneficiat de scolarizare subventionata de la buget
          (se primeste de la comisia de inscriere);
        </li>

        <li>
          Candidatii pentru care inscrierea la concurs se face pe baza adeverintei de absolvire sau a actelor de studii in copie
          legalizata, trebuie sa depuna actele de studii in original pana la o data stabilita de fiecare facultate, conform
          <strong>angajamentului</strong> semnat la inscriere (se primeste de la comisia de inscriere);
        </li>

        <li>
          <strong>adeverinta</strong> din care sa rezulte calitatea de student in anul universitar curent, eliberata de decanatul
          facultatii, precum si diplomele in original sau copie legalizata, pentru studentii care doresc sa urmeze in paralel doua
          programe de studiu;
        </li>

        <li>
          <strong>copie dupa CI/BI</strong>
        </li>
      </ol>

      <p>La sustinerea interviului candidatul va avea asupra sa cartea de identitate</p>
      <p>
        Pentru mai multe detalii puteti accesa <a
          href="https://www.ucv.ro/pdf/admitere/2019/Regulament_organiz_si_desf_concurs_de%20admitere_2019_2020.pdf"
          target="_blank">
          Regulamentul de organizare si desfasurare a concursului de admitere al universitatii.
        </a>
      </p>
    </section>

  );
}

export default RegisterDocuments;