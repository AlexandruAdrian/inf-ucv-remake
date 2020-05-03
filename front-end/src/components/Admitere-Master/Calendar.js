import React from 'react';
import "../../styles/admitere-master/Calendar.css";

const Calendar = () => {
  return (
    <section className="container white-bg-container master-calendar">
      <h4>Calendar</h4>
      <p><strong>Sesiunea septembrie 2019</strong></p>

      <div>
        <p>
          Depunerea dosarelor de concurs se va face in perioada <strong>13-18 septembrie 2019</strong> la sala 219 din strada A.I.Cuza
          Nr.13, parter, dupa urmatorul program: Luni-Vineri orele 9.00-15.00, Sambata orele 9.00-12.00
        </p>

        <p>
          Desfasurarea probelor de concurs: <strong>20 septembrie 2019</strong>
        </p>

        <p>
          Confirmarea locurilor: <strong>21-24 septembrie 2019</strong>
        </p>

        <p>
          Redistribuirea locurilor neconfirmate si afisarea rezultatelor finale: <strong>25 septembrie 2019</strong>
        </p>

        <p>Confirmarea locurilor ocupate dupa redistribuire: <strong>25-26 septembrie 2019</strong></p>
      </div>
    </section>
  );
}

export default Calendar;