import React from 'react';
import cadreDidactice from "../../profesori";
import Cadru from "./Cadru";

const Cadre = () => {
  return (
    <section className="container dark-bg-container">
      {cadreDidactice.map(cadru => {
        return (
          <Cadru
            profile={cadru.profile}
            name={cadru.nume}
            grade={cadru.grad}
            title={cadru.titlu}
            webPage={cadru.webPage}
            phone={cadru.phone}
            fax={cadru.fax}
            email={cadru.email}
          />
        )
      })}
    </section>
  )
}

export default Cadre;