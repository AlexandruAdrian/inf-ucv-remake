import React from 'react';

import cadreDidactice from "../../profesori.json";
import Cadru from "./Cadru";

const Cadre = () => {
  return (
    <section className="secondary-container dark-bg-container">
      {cadreDidactice.map(cadru => {
        return (
          <Cadru
            key={cadru.Id}
            profile={cadru.PathToPicture}
            name={cadru.FullName}
            grade={cadru.Grade}
            title={cadru.Title}
            webPage={cadru.WebPage}
            phone={cadru.Phone}
            fax={cadru.Fax}
            email={cadru.Email}
          />
        )
      })}
    </section>
  )
}

export default Cadre;