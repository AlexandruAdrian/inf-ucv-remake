import React from 'react';
/* Components */
import Header from "./Header";
import Offer from "./Admitere-Master/Offer";
import Criteria from "./Admitere-Master/Criteria";
import Calendar from "./Admitere-Master/Calendar";
import RegisterDocuments from "./Admitere-Master/Register-Documents";

const AdmittanceMaster = () => {

  return (
    <>
      <Header
        bg='admitere-bg'
        hero
        title="Admitere 2019 - Master"
        subtitle=""
      />
      <Offer />
      <Criteria />
      <Calendar />
      <RegisterDocuments />
    </>
  )
}

export default AdmittanceMaster;