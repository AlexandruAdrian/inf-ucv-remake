import React from 'react';
/* Components */
import Header from "./Header";
import Cadre from "./Cadre-Didactice/Cadre";

const Teachers = () => {
  return (
    <>
      <Header
        bg='cadre-didactice-bg'
        hero
        title="Cadre didactice"
        subtitle=""
      />
      <Cadre />
    </>
  )
}

export default Teachers;