import React from 'react';
/* Components */
import Header from "./Header";
import Offer from "./Admitere-Licenta/Offer";
import Criteria from "./Admitere-Licenta/Criteria";
import Calendar from "./Admitere-Licenta/Calendar";
import RegisterDocuments from "./Admitere-Licenta/Register-Documents";

const AdmittanceLicense = () => {

  return (
    <>
      <Header
        bg='admitere-bg'
        hero
        title="Admitere 2019 - Licenta"
        subtitle=""
      />
      <Offer />
      <Criteria />
      <Calendar />
      <RegisterDocuments />
    </>
  )
}

export default AdmittanceLicense;