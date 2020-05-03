import React from 'react';
import "../../styles/admitere-licenta/Calendar.css";

const Calendar = () => {

  return (
    <section className="container white-bg-container calendar">
      <h4>Calendar</h4>
      <p><strong>Sesiunea septembrie 2019</strong></p>
      <ul>
        <li>
          <strong>09 - 16 septembrie - Depunerea dosarelor de concurs</strong>, la <strong>sala 219</strong>, Universitatea
          din Craiova, <a href="/contact">strada A.I.Cuza Nr.13</a>, de intre orele 9:00 si 15:00. În zilele de sambata si duminica,
          14 si 15 septembrie, inscrierile se fac pana la ora 12:00.
        </li>

        <li>
          <strong>17 septembrie, orele 15:00 - Afisarea rezultatelor partiale</strong>
        </li>

        <li>
          <strong>18 - 20 septembrie (8:00 - 15:00) - Confirmarea locurilor</strong> ocupate de catre candidatii declarati admisi,
          <strong>depunerea in original a diplomei de bacalaureat si a foii matricole</strong> de absolvire a liceului, plata taxei de
          inmatriculare (150 lei) si semnarea contractelor de scolarizare. Nedepunerea acestor documente atrage pierderea locului ocupat
          prin concurs.
        </li>

        <li>
          <strong>21 septembrie - Afisarea rezultatelor actualizate in urma redistribuirii locurilor neconfirmate</strong> Candidatii care
          nu si-au confirmat locul sunt eliminati, locurile ramase libere fiind ocupate de candidatii din lista celor care au fost declarati
          respinsi in data de 18 septembrie, urcand in lista in ordinea descrescatoare a mediilor.
        </li>

        <li>
          <strong>22 - 24 septembrie, orele 08:00-15:00 - Confirmarea locurilor de catre noii candidati declarati admisi</strong> dupa
          redistribuire; depunerea in original a diplomei de bacalaureat si a foii matricole de absolvire a liceului, plata taxei de
          inmatriculare (150 lei) si semnarea contractelor de scolarizare.
        </li>
      </ul>

    </section>
  );
}

export default Calendar;