import React from 'react';
import "../../styles/cadre-didactice/Cadre.css";

import cadreDidactice from "../../profesori";
import Cadru from "./Cadru";

const Cadre = () => {
  return (
    <section className="teachers-container dark-bg-container">
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