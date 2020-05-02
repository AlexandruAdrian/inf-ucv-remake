import React from 'react';
import "../../styles/Presentation.css";
/* Components */
import Domains from "./Domains";
import StudyPlans from "./Study-Plans";

const Presentation = () => {

  return (
    <section className="presentation">
      <Domains />
      <StudyPlans />
    </section>
  );
}

export default Presentation;